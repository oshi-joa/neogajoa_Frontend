import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

interface Props {
  type: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ ...props }: Props) => {
  return <InputContainer {...props} />;
};

const InputContainer = styled.input`
  width: 100%;
  flex-shrink: 0;
  height: 60px;
  padding: 10px 20px;
  border-radius: 100px;
  border: 1px solid #fde8ee;
  outline: none;
  font-size: 17px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #b6b6b6;
  }
`;
