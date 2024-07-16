import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input<{
  disabled: boolean;
  visible: boolean;
  disabledColor: string;
  backgroundColor: string;
}>`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ disabled, disabledColor }) => (disabled ? disabledColor : 'black')};
  background-color: ${({ disabled, disabledColor, backgroundColor }) => (disabled ? disabledColor : backgroundColor)};
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:checked {
    background-color: ${({ disabled }) => (disabled ? 'lightgrey' : 'blue')};
  }

  @media (max-width: 1200px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 992px) {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 576px) {
    width: 12px;
    height: 12px;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  disabled = false,
  visible = true,
  disabledColor = 'grey',
  backgroundColor = 'white',
  ...props
}) => {
  return (
    <StyledRadioButton
      type="radio"
      disabled={disabled}
      visible={visible}
      disabledColor={disabledColor}
      backgroundColor={backgroundColor}
      {...props}
    />
  );
};

export default RadioButton;
