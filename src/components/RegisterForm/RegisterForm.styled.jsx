import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border-color: #746874;
  margin-top: 5px;
  border: 1px solid purple;
  background-color: white;
  &:focus {
    border-color: #2b2b83;
    background-color: white;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid purple;
  color: white;
  background: #746874;
`;
