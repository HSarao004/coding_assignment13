import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.span<{ color: string; disabled: boolean; visible: boolean; backgroundColor: string; disabledBackgroundColor: string }>`
    color: ${({ disabled, color }) => (disabled ? 'grey' : color)};
    background-color: ${({ disabled, disabledBackgroundColor, backgroundColor }) => (disabled ? disabledBackgroundColor : backgroundColor)};
    font-size: 16px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
    display: ${({ visible }) => (visible ? 'inline' : 'none')};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
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

const Text: React.FC<TextProps> = ({ children, color = 'black', disabled = false, visible = true, backgroundColor = 'transparent', disabledBackgroundColor = 'grey', ...props }) => {
    return <StyledText color={color} disabled={disabled} visible={visible} backgroundColor={backgroundColor} disabledBackgroundColor={disabledBackgroundColor} {...props}>{children}</StyledText>;
};

export default Text;
