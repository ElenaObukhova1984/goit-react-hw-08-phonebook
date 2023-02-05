import styled from 'styled-components';

export const Input = styled.input`
height: 30px;
width: 230px;
margin-left: 10px;
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

export const Label = styled.label`
width:100px;
`;