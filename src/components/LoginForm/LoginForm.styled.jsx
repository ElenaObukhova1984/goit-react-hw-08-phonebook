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
  min-height:30px;
  margin-top: 5px;
  border: 2px solid blue;
  border-radius:4px;
  background-color: white;
  &:focus {
    border-color: blue;
    background-color: white;
  }
`;

export const Button = styled.button`
  min-height:30px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid blue;
  color: white;
  background: #243c78;
`;