import {zodResolver} from "@hookform/resolvers/zod"
import {Controller, useForm} from "react-hook-form";
import {quoteSchema} from "@/assets/quoteSchema"
import {
    Autocomplete,
    Button,
    Checkbox, createTheme, FormControl,
    FormControlLabel, FormGroup, FormLabel,
    Grid, IconButton,
    InputAdornment,
    TextField,
    ThemeProvider, Tooltip
} from "@mui/material";
import {useEffect, useState} from "react";
import {MuiTelInput} from "mui-tel-input";
import {Info, Email, Send} from "@mui/icons-material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormSubmitPopup from "@/components/FormSubmitPopup";

export default function QuoteRequestForm() {
    const {
        control,
        register,
        watch,
        formState: {errors},
        handleSubmit
    } = useForm({resolver: zodResolver(quoteSchema), defaultValues: {
            firstName: "",
            email: "",
            typeOfWork: {
                repairWorkCheck: false
            },
            deadlineDetails: {
                deadlineCheck: false
            }
        }});

    // watch the checkboxes to allow to update certain text fields conditionally
    const watchRepairWorkCheck = watch('typeOfWork.repairWorkCheck', false);
    const watchDeadlineCheck = watch("deadlineDetails.deadlineCheck", false)

    // hooks for the checkbox states
    const [isDeadlineChecked, setIsDeadlineChecked] = useState(false);
    const [isRepairWorkChecked, setIsRepairWorkChecked] = useState(false);

    // hook for the form submission state
    const [submitSuccess, setSubmitSuccess] = useState(null);

    // used to open to dialog when the form is submitted
    const [openDialog, setOpenDialog] = useState(false)


    // make the mui breakpoints match tailwind css for consistency
    const matchingTailwindBreakpoints = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280
            }
        }
    })

    // set the deadline checks to the new value if the watch variables update
    useEffect(() => {
        setIsDeadlineChecked(watchDeadlineCheck);
        setIsRepairWorkChecked(watchRepairWorkCheck)
    }, [watchDeadlineCheck, watchRepairWorkCheck]);

    const onSubmit = async (data) => {
        // use the api route to input the data into the database
        let res = await fetch("/api/add-quote-form-data", {method: "POST", body: JSON.stringify(data)})

        // check the response from the database, give the according message to the user
        if (res.ok) {
            setSubmitSuccess(true);
        } else setSubmitSuccess(false);
        setOpenDialog(true);
    }

    const onInvalid = (errors) => Object.values(errors).forEach((value) => {
        console.error(value)
    })

    return (
        <form className="flex justify-center" onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <ThemeProvider theme={matchingTailwindBreakpoints}>

                {/*give a message to the user after the form submit*/}
                <FormSubmitPopup isOpen={openDialog} formSuccess={submitSuccess}/>

                {/*use mui grid to organize the form elements*/}
                <Grid className="w-full justify-center text-center" container item spacing={6}>

                    {/*section for contact info*/}
                    <section className="w-full justify-center">
                        <h1 className="text-black pb-20 underline text-xl md:text-2xl lg:text-3xl xl:text-4xl">Enter
                            Your Contact Information</h1>

                        {/*another grid container to organize the contact section*/}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Controller name="firstName" control={control}
                                            render={({field: {onChange, onBlur, value, name, ref}}) => (
                                                <TextField
                                                    label="First Name"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={value}
                                                    onBlur={onBlur}
                                                    onChange={onChange}
                                                    inputRef={ref}
                                                    error={Boolean(errors.firstName)}
                                                    helperText={errors.firstName ? errors.firstName.message : " "}
                                                />
                                            )}
                                />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Controller className="" name="email" control={control}
                                            render={({field: {onChange, onBlur, value, name, ref}}) => (
                                                <TextField
                                                    label="Email"
                                                    placeholder="We will use this email to contact you"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={value}
                                                    onBlur={onBlur}
                                                    onChange={onChange}
                                                    inputRef={ref}
                                                    error={!!errors.email}
                                                    helperText={errors.email ? errors.email.message : " "}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <Email/>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            )}
                                />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Controller name="phoneNumber" control={control}
                                            render={({field: {onChange, onBlur, value, name, ref}}) => (
                                                <MuiTelInput
                                                    name={name}
                                                    defaultCountry="US"
                                                    label="Phone Number"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={value}
                                                    onBlur={onBlur}
                                                    onChange={onChange}
                                                    inputRef={ref}
                                                    error={Boolean(errors.phoneNumber)}
                                                    helperText={errors.phoneNumber ? errors.phoneNumber.message : " "}
                                                />
                                            )}
                                />
                            </Grid>
                        </Grid>
                    </section>

                    {/*section for some basic work details*/}
                    <section className="w-full text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                        <h2 className="text-black p-20 underline">Basic Details</h2>
                        <Grid item xs={12} container className="justify-center" spacing={6}>
                            <FormControl component="fieldset">
                                <FormGroup className="">
                                    <FormControlLabel
                                        control={
                                            <Controller
                                                name="typeOfWork.repairWorkCheck"
                                                control={control}
                                                render={({field}) => (
                                                    <Checkbox
                                                        {...field}
                                                        checked={field.value}
                                                    />
                                                )}
                                            />
                                        }
                                        label={
                                            <div
                                                className="text-black text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl">
                                                Do You Need Repair Work?
                                                <Tooltip title="Specify if you need repair work">
                                                    <Info style={{marginLeft: 4}}/>
                                                </Tooltip>
                                            </div>
                                        }
                                    />
                                    <FormControlLabel
                                        control={
                                            <Controller
                                                name="deadlineDetails.deadlineCheck"
                                                control={control}
                                                render={({field}) => (
                                                    <Checkbox
                                                        {...field}
                                                        checked={field.value}
                                                    />
                                                )}
                                            />
                                        }
                                        label={
                                            <div
                                                className="text-black text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl">
                                                Do you Have a Specific Deadline for This Project?
                                                <Tooltip
                                                    title="Provide a specific deadline if you have one. We will prioritize your work at an additional cost, based on the request.">
                                                    <Info style={{marginLeft: 4}}/>
                                                </Tooltip>
                                            </div>
                                        }
                                    />
                                </FormGroup>
                            </FormControl>

                            <Grid item xs={12} sm={4}>
                                {watchDeadlineCheck && (
                                    <Controller name="deadlineDetails.deadlineDate" control={control}
                                                render={({
                                                             field: {onChange, onBlur, value, name, ref},
                                                             fieldState: {error}
                                                         }) => (
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DatePicker disablePast
                                                                    name={name}
                                                                    value={value || ""}
                                                                    fullWidth
                                                                    onBlur={onBlur}
                                                                    onChange={onChange}
                                                                    inputRef={ref}
                                                                    error={Boolean(errors.deadlineDetails && errors.deadlineDetails.deadlineDate)}
                                                                    slotProps={{
                                                                        textField: {
                                                                            variant: 'outlined',
                                                                            error: !!error,
                                                                            helperText: error ? error.message : " ",
                                                                        },
                                                                    }}
                                                                    label="Pick Your Hard Deadline Date"
                                                        />
                                                    </LocalizationProvider>
                                                )}
                                    />

                                )}
                            </Grid>
                        </Grid>
                    </section>

                    {/*In depth work details*/}
                    <section className="w-full text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                        <h3 className="text-black text-center p-20 underline">Work Details</h3>
                        <Grid className="w-full" container spacing={6}>
                            <Grid item xs={12} sm={4}>
                                <Controller name="workDescription" control={control}
                                            render={({field: {onChange, onBlur, value, name, ref}}) => (
                                                <TextField
                                                    name={name}
                                                    label="What Work Would You Like Done?"
                                                    placeholder="What can we do for you?"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={value}
                                                    multiline
                                                    rows={4}
                                                    onBlur={onBlur}
                                                    onChange={onChange}
                                                    inputRef={ref}
                                                    error={Boolean(errors.workDescription)}
                                                    helperText={errors.workDescription ? errors.workDescription.message : " "}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <Tooltip
                                                                title="Please describe in detail the product you would like us to make for you"
                                                                placement="top-end">
                                                                <IconButton>
                                                                    <Info/>
                                                                </IconButton>
                                                            </Tooltip>
                                                        ),
                                                    }}
                                                />
                                            )}
                                />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                {(
                                    <Controller name="typeOfWork.materials" control={control}
                                                render={({field: {onChange, onBlur, value, name, ref}}) => (
                                                    <TextField
                                                        name={name}
                                                        label="Materials (Metal)"
                                                        placeholder={!watchRepairWorkCheck ? "What materials would you like your product to be made of?" : "Do you have a specific request for the materials we use when repairing your part?"}
                                                        variant="outlined"
                                                        fullWidth
                                                        InputProps={{
                                                            endAdornment: (
                                                                <Tooltip
                                                                    title="Specify the materials you want us to use for your product"
                                                                    placement="top-end">
                                                                    <IconButton>
                                                                        <Info/>
                                                                    </IconButton>
                                                                </Tooltip>
                                                            ),
                                                        }}
                                                        value={value}
                                                        multiline={true}
                                                        rows={4}
                                                        onBlur={onBlur}
                                                        onChange={onChange}
                                                        inputRef={ref}
                                                        error={Boolean(errors.typeOfWork && errors.typeOfWork.materials)}
                                                        helperText={errors.typeOfWork && errors.typeOfWork.materials ? errors.typeOfWork.materials.message : " "}

                                                    />
                                                )}
                                    />
                                )}
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Controller name="extraInfo" control={control}
                                            render={({field: {onChange, onBlur, value, name, ref}}) => (
                                                <TextField
                                                    name={name}
                                                    label="Additional Info"
                                                    placeholder="Is there any additional information would you like us to know?"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={value}
                                                    multiline={true}
                                                    rows={4}
                                                    onBlur={onBlur}
                                                    onChange={onChange}
                                                    inputRef={ref}
                                                    error={Boolean(errors.extraInfo)}
                                                    helperText={errors.extraInfo ? errors.extraInfo.message : " "}
                                                />
                                            )}
                                />
                            </Grid>
                        </Grid>
                    </section>


                    {/*submit the form*/}
                    <Grid className="justify-center text-center pt-10" item xs={12} sm={4}>
                        <Button sx={{stroke: "#000000", borderWidth: 2, width: '160px', height: '50px'}}
                                size="large"
                                variant="outlined" type="submit" endIcon={<Send/>}>Submit</Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </form>
);
}
