import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useEffect, useState} from "react";
export default function FormSubmitPopup({isOpen, formSuccess}) {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen]);

    return (
    <Dialog
        open={open}
        onClose={handleClose}
    >
        <DialogTitle>{formSuccess ? "Form Submitted Successfully" : "Form Submission Failed"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {formSuccess ? "We Will Get Back to You Shortly!" : "Your Form Was Unable To Be Submitted Due to an Error. We Are Sorry for the Inconvenience"}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Close</Button>
        </DialogActions>
    </Dialog>
    )
}