import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, styled, TextField } from '@mui/material';
import { useState } from 'react';

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
  };

  return (
    <StyledTextField
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={handlePasswordChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockOutlined />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
