import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{
  disabled: boolean;
  visible: boolean;
  backgroundColor: string;
  disabledBackgroundColor: string;
}>`
  background-color: ${({ disabled, disabledBackgroundColor, backgroundColor }) =>
    disabled ? disabledBackgroundColor : backgroundColor};
  color: ${({ disabled }) => (disabled ? 'grey' : 'black')};
  font-size: 16px;
  padding: 10px;
  border: 1px solid ${({ disabled }) => (disabled ? 'grey' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  margin-left: 10px;

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

const Dropdown: React.FC<DropdownProps> = ({
  children,
  disabled = false,
  visible = true,
  backgroundColor = 'white',
  disabledBackgroundColor = 'lightgrey',
  ...props
}) => {
  return (
    <StyledSelect
      disabled={disabled}
      visible={visible}
      backgroundColor={backgroundColor}
      disabledBackgroundColor={disabledBackgroundColor}
      {...props}
    >
      {children}
    </StyledSelect>
  );
};

export default Dropdown;
