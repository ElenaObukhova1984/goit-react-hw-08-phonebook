import styled from 'styled-components';

export const Form = styled.form`

display:flex;
flex-direction:column;
width: 100%;
height: auto;
`;

export const Input = styled.input`
min-height: 30px;
width:400px;
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


export const AddButton = styled.button`


height: 30px;
width: 150px;
margin-top: 10px;
border-radius: 10px;
`;
