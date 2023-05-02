import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 300px;
  padding: 20px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 10px;
  color: red;
`;

export const ButtonWrapForm = styled.button`
 
  border: 0px solid gray;
  border-radius: 1px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: aqua;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;