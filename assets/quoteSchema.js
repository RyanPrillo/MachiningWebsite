import z from "zod";
import isMobilePhone from "validator/es/lib/isMobilePhone";

export const quoteSchema = z.object({
    firstName: z.string()
        .max(20, "First name must be less than 20 characters")
        .min(1, "First name is Required").min(3, "First name must be at least 3 characters long"),
    email: z.string()
        .email("Please enter a valid email")
        .max(50, "Email must be less than 50 characters"),
    phoneNumber: z.string({message: "Phone Number is Required"})
        .refine(isMobilePhone, {
            message: "Please enter a valid phone number",
        }),
    workDescription: z.coerce.string({message: "Must enter a work description"})
        .min(100, "Description must be more than 100 characters")
        .max(300, "Description must be less than 300 characters"),

    typeOfWork: z.object({
        repairWorkCheck: z.boolean().optional(),
        materials: z.string({message: "Must enter the materials you would like your product made of"})
    }).superRefine((data, context) => {
        if (!data.repairWorkCheck && !data.materials) {
            context.addIssue({
                path: ["materials"],
                code: z.ZodIssueCode.custom,
                message: "Material is required when repair work is checked."
            });
        } if (!data.repairWorkCheck && data.materials.trim().length < 3) {
            context.addIssue({
                path: ["materials"],
                code: z.ZodIssueCode.custom,
                message: "Materials must be longer than 3 characters long."
            });
        } if (data.materials.trim().length > 100) {
            context.addIssue({
                path: ["materials"],
                code: z.ZodIssueCode.custom,
                message: "Materials must be less than 100 characters long."
            });
        }
    }, {
        message: "Material is required when repair work is checked."
    }),

    deadlineDetails: z.object({
        deadlineCheck: z.boolean().optional(),
        deadlineDate: z.coerce.date().optional()
    }).superRefine((data, context) => {
        if (data.deadlineCheck && !data.deadlineDate) {
            context.addIssue({
                path: ["deadlineDate"],
                code: z.ZodIssueCode.custom,
                message: "Deadline checkbox is checked, please provide a date"
            })
        }
        if (data.deadlineCheck && data.deadlineDate < new Date()) {
            context.addIssue({
                path: ["deadlineDate"],
                code: z.ZodIssueCode.custom,
                message: "Date provided is before the current date"
            })
        }
    }, {
        message: "A valid deadline date is required when deadline is checked."
    }),

    extraInfo: z.string().max(100, "Additional info must be less than 100 characters").optional(),
});