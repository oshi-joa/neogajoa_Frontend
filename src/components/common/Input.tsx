import styled from '@emotion/styled';
import {
  ChangeEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ ...props }: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [borderColor, setBOR] = useState('');
  useEffect(() => {
    if (ref.current) {
      if (ref.current.value !== '') {
        setBOR('#F66994');
      } else {
        setBOR('#fde8ee');
      }
      ref.current.style.borderColor = borderColor;
    }
  }, [ref.current?.value]);
  return <InputContainer ref={ref} {...props} autoComplete="none" />;
};

const InputContainer = styled.input`
  width: 100%;
  flex-shrink: 0;
  padding: 20px;
  border-radius: 100px;
  border: 1px solid #fde8ee;
  box-sizing: border-box;
  color: #f66994;
  font-size: 16px;
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
