import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{
  disabled: boolean;
  visible: boolean;
  disabledColor: string;
  backgroundColor: string;
}>`
  width: 100%;
  height: auto;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: ${({ disabled, disabledColor, backgroundColor }) => (disabled ? disabledColor : backgroundColor)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 576px) {
    width: 50%;
  }
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  disabled = false,
  visible = true,
  disabledColor = 'grey',
  backgroundColor = 'transparent',
  ...props
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      disabled={disabled}
      visible={visible}
      disabledColor={disabledColor}
      backgroundColor={backgroundColor}
      {...props}
    />
  );
};

export default Img;
