'use server'
import pg from "pg";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req) {
    const {Client} = pg;
    const client = new Client({
        // use connection string to connect to database
        connectionString: process.env.DB_CONNECTION_STRING,

        // make sure connection is secure
        ssl: {
            rejectUnauthorized: true,
            ca: process.env.CA_CERT
        }
    })
    try {
        // get the form data from the quote form
        const formData = await req.json();

        // format the date from a zod date to regular js date MM/DD/YYYY
        let deadlineFormatted;
        if (formData.deadlineDetails.deadlineCheck) {
            const date = new Date(formData.deadlineDetails.deadlineDate);
            deadlineFormatted = date.toLocaleDateString('en-US');
        }

        // the info for the database forms table
        const text = 'INSERT INTO forms (firstName, email, phoneNumber, workDescription, needsRepairWork, hasHardDeadline, deadlineDate, materials) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
        const values = [formData.firstName, formData.email, formData.phoneNumber, formData.workDescription, formData.typeOfWork.repairWorkCheck, formData.deadlineDetails.deadlineCheck, deadlineFormatted, formData.typeOfWork.materials];

        await client.connect()

        // insert the form information into the database forms table
        const res = await client.query(text, values);

        const data = res.rows[0];
        return NextResponse.json(data);
    } catch (err) {
        console.log(err)
        return NextResponse.json({message: "Internal Server Error"})
    } finally {
        await client.end()
    }
}