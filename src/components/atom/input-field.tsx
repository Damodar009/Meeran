import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { InputAdornment, styled, TextField } from '@mui/material';
import React from 'react';

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: blue;
    }
  }
  width: 100%;
`;

interface InputFieldProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  hint?: string;
  size?: "large" | "medium" | "small" | undefined
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, label, size, hint }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div style={{ marginLeft: '20px', width: "428px", position: 'relative', }}>
      <div style={{ marginBottom: "10px" }} >
        {label}
        <span style={{ color: 'red' }}>*</span>
        <span style={{ position: 'absolute', right: '0' }}>
          <HelpOutlineIcon htmlColor="#FF0000" fontSize={size} />
        </span>

      </div>
      <StyledTextField
        size="small"
        value={value}
        onChange={handleChange}
        variant="outlined"
        placeholder={hint}
        error={true}
        helperText={"This feild is required"} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person2OutlinedIcon sx={
                {
                  width: "20px",
                  height: "20px"

                }
              } />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default InputField;
