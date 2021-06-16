import styled, { css } from 'styled-components'

export const FormGroup = styled.div<{isError:boolean}>`
  display: block;
  margin: ${props => props.isError ? '0 0' : '0 0 20px 0'};
  position: relative;
  font-family: 'Roboto';
  font-weight: normal;
`;

export const FormTextField = styled.div`
  position: relative;
`;

export const Label = styled.label<{hasValue:boolean, isError: boolean}>`
  position: absolute;
  line-height: 20px;
  left: 0;
  transform: translateY(-50%);
  background-color: rgba(249,249,249,1);
  color: ${props => props.isError ? 'rgba(245,60,60,1)' : 'rgba(119,119,119,1)'};
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: .3s ease-out;
  transform-origin: left top;
  pointer-events: none;
  ${props => props.hasValue ? css`
      top: 0;
      font-size: 12px;
    `: css`
    top: 50%;
    font-size: 15px;
    `}
`;

export const InputField = styled.input<{hasValue:boolean, isError:boolean}>`
  width: 100%;
  font-size: 15px;
  line-height: 30px;
  outline: none;
  border: 1px solid ${props => props.isError ? 'rgba(245,60,60,1)' : 'rgba(237,237,237,1)'};
  border-radius: 4px;  
  padding: 10px 15px;
  color: rgba(119,119,119,1);
  transition: 0.3s ease-out;
  background-color: rgba(249,249,249,1);
  height: 50px;
  
  &:focus{
    border-color: ${props => props.isError ? 'rgba(245,60,60,1)' : '#286EFA'};
  }

  &:focus-within + ${Label}{
    color: ${props => props.isError ? 'rgba(245,60,60,1)' : '#286EFA'};
    top: 0;
    transform: translateY(-50%) scale(.9);
    background-color: rgba(249,249,249,1);
  }

  &::placeholder{
    font-size: 15px;
    color: rgba(119,119,119,1);
    background-color: rgba(249,249,249,1);
  }
`;

export const EyeSpan = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    height: 20px;
    width: 20px;
  }
`;

export const ErrorDiv = styled.div`
  padding: 10px 0;
`;

export const Error = styled.h4`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: normal;
  color: rgba(245,60,60,1);
`;

export const Button = styled.button<{isDisabled: boolean}>`
  border-radius: 4px;
  background-color: ${props => props.isDisabled ? 'rgba(237,237,237,1)' : 'rgba(40,110,250,1)'};
  height: 50px;
  color: ${props => props.isDisabled ? 'rgba(170,170,170,1)' : 'rgba(255,255,255,1)'};
  text-align: center;
  font-size: 13px;
  line-height: 25px;
  font-family: 'Roboto';
  font-weight: bold;
  width: 100%;
  margin-top: 30px;
`;