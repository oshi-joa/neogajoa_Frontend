import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

interface Props {
  type: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ ...props }: Props) => {
  return <InputContainer {...props} autoComplete="none" />;
};

const InputContainer = styled.input`
  width: 100%;
  flex-shrink: 0;
  padding: 20px;
  border-radius: 100px;
  border: 1px solid #fde8ee;
  box-sizing: border-box;
  color: #f66994;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #b6b6b6;
  }
`;
