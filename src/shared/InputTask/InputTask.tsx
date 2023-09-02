import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface BasicTextFieldsProps {
    placeholder?: string;
    value:string;
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const BasicTextFields: React.FC<BasicTextFieldsProps> = ({ placeholder, value , onChange}) => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label={placeholder} variant="outlined" value={value} onChange={onChange}/>
        </Box>
    );
}

export default BasicTextFields;