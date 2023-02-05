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
 min-height: 30px;
 border-radius:4px;
 border-color: #243c78;
  margin-top: 5px;
  border: 2px solid blue;
  background-color: white;
  &:focus {
    border-color: #2b2b83;
    background-color: white;
  }
`;

export const Button = styled.button`
  min-height: 30px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid blue;
  color: white;
  background: #243c78;
`;
