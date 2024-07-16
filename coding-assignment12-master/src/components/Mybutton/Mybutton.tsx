import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Mybutton.types';

const StyledButton = styled.button<{ disabled: boolean; visible: boolean; disabledColor: string }>`
    background-color: ${({ disabled, disabledColor }) => (disabled ? disabledColor : 'blue')};
    color: white; /* Ensure the text color is white */
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.2s;
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};

    &:hover {
        background-color: ${({ disabled, disabledColor }) => (disabled ? disabledColor : 'darkblue')};
        transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
    }

    &:active {
        transform: ${({ disabled }) => (disabled ? 'none' : 'scale(0.95)')};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }

    @media (max-width: 1200px) {
        padding: 9px 18px;
        font-size: 15px;
    }

    @media (max-width: 992px) {
        padding: 8px 16px;
        font-size: 14px;
    }

    @media (max-width: 768px) {
        padding: 7px 14px;
        font-size: 13px;
    }

    @media (max-width: 576px) {
        padding: 6px 12px;
        font-size: 12px;
    }
`;

const MyButton: React.FC<ButtonProps> = ({ children, disabled = false, visible = true, disabledColor = 'grey', ...props }) => {
    return (
        <StyledButton disabled={disabled} visible={visible} disabledColor={disabledColor} {...props}>
            {children}
        </StyledButton>
    );
};

export default MyButton;
