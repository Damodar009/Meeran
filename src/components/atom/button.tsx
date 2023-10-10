import { Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import React, { ReactNode } from 'react';

interface ButtonProps {
  variant: 'text' | 'outlined' | 'contained';
  elevation?: boolean;
  prefixIcon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  children: string
}
const StyledButton = styled(Button)(({ variant, disableElevation, }) => {
  return {
    marginTop: "",
    backgroundColor: variant === 'contained' ? '#025EAE' : 'transparent',
    color: variant === 'contained' ? 'white' : '#025EAE',
    marginLeft: 20,
    textTransform: 'none',
    boxShadow: disableElevation ? "0" : "1",
    borderColor: '#025EAE',
    '&:hover': {
      backgroundColor: '#025EAE',
    },
    '&:focus': {
      backgroundColor: '#025EAE',
    },
    '&:active': {
      backgroundColor: '#025EAE',
    },
    '&:disabled': {
      backgroundColor: '#EEEEEE',
    },
  };
});


const MyButton: React.FC<ButtonProps> = ({
  variant,
  elevation,
  prefixIcon,
  onClick,
  disabled,
  size,
  children,

}) => {

  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      startIcon={prefixIcon}
      disableElevation={elevation}
      size={size}

    >
      {children}
    </StyledButton>
  );
};

export default MyButton;
