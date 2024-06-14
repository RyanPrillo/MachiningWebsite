import * as React from "react";
import MuiTextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {ThemeProvider} from "@mui/material";

const TextFieldCharacterCounter = React.forwardRef((props, ref) => {
    const { counter = 0, onFocus, onBlur, helperText, label, matchingTailwindBreakpoints, ...other } = props;

    if (counter && !props.InputProps?.maxLength) {
        throw new Error("counter needs maxLength to be set on inputProps");
    }
    if (counter && props.type !== "text") {
        throw new Error("invalid input type");
    }

    const [visible, setVisible] = React.useState(false);

    return (
        <ThemeProvider theme={matchingTailwindBreakpoints}>
            <MuiTextField
                ref={ref}
                label={<Box>{label}</Box>}
                {...other}
                onFocus={(event) => {
                    setVisible(true);
                    onFocus && onFocus(event);
                }}
                onBlur={(event) => {
                    setVisible(false);
                    onBlur && onBlur(event);
                }}
                helperText={
                    <Box
                        component="span"
                        sx={{ display: "flex", justifyContent: "space-between", fontSize: {
                                lg: 20,
                                md: 18,
                                sm: 16,
                                xs: 14
                            }}}
                    >
                        <span className="mr-4">{helperText}</span>
                        {visible && counter && (
                            <span>{`${props.value?.length || 0} / ${(!props.value || props.value?.length < props.InputProps.minLength) ? props.InputProps.minLength + " Minimum Length" : props.InputProps.maxLength + " Maximum Length"}`}</span>
                        )}
                    </Box>
                }
            />
        </ThemeProvider>
    );
});

TextFieldCharacterCounter.displayName = "TextField";

export default TextFieldCharacterCounter;
