// Code to ensure that the labels(longer ones especially) aren't overlapping the MUI textfield input
export const InputLabelProps={
    style: {
        whiteSpace: 'normal',
            overflow: 'visible',
            textOverflow: 'clip',
            maxWidth: '100%', // Make sure the label doesn't go outside the container
    },
    shrink: true, // Make the label shrink
}

export const InputProps={
    style: {
        paddingTop: '50px', // add padding for the label
    }
}