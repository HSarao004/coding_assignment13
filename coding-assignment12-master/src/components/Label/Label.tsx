import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ color: string; disabled: boolean; visible: boolean; backgroundColor: string; disabledBackgroundColor: string }>`
    color: ${({ disabled, color }) => (disabled ? 'grey' : color)};
    background-color: ${({ disabled, disabledBackgroundColor, backgroundColor }) => (disabled ? disabledBackgroundColor : backgroundColor)};
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
    padding: 5px;

    @media (max-width: 1200px) {
        font-size: 15px;
    }

    @media (max-width: 992px) {
        font-size: 14px;
    }

    @media (max-width: 768px) {
        font-size: 13px;
    }

    @media (max-width: 576px) {
        font-size: 12px;
    }
`;

const Label: React.FC<LabelProps> = ({ children, color = 'black', disabled = false, visible = true, backgroundColor = 'transparent', disabledBackgroundColor = 'grey', ...props }) => {
    return <StyledLabel color={color} disabled={disabled} visible={visible} backgroundColor={backgroundColor} disabledBackgroundColor={disabledBackgroundColor} {...props}>{children}</StyledLabel>;
};

export default Label;
