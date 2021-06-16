import React from 'react'
import { EyeOffSvg, EyeOpenSvg } from '../../../components/Icon/Icon';
import { Error, ErrorDiv, EyeSpan, FormTextField,InputField,Label, FormGroup } from './FormInput.style'

interface IProps{
  type: string;
  name: string;
  label: string;
  isPassShow?: boolean;
  value: string
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  togglePasswordShow?: () => void;
  errorMsg: string;
}
const Input:React.FC<IProps> = ({
  type,
  name,
  label,
  isPassShow,
  inputChange,
  togglePasswordShow,
  value,
  errorMsg
  }:IProps) => {

  return (
    <>
    <FormGroup isError = {errorMsg?.length > 0 ? true: false}>
      <FormTextField>
        <InputField 
        type={type === 'password' ? isPassShow ? 'text' : 'password': 'text'} 
        name={name} 
        id={name} 
        placeholder='' 
        autoComplete='off' 
        value={value} 
        onChange={inputChange} 
        hasValue={value.length ? true: false}
        isError = {errorMsg?.length > 0 ? true: false}
        />

        <Label htmlFor={name} isError = {errorMsg?.length > 0 ? true: false} hasValue={value.length ? true: false}>{label}</Label>
      </FormTextField>

      {type === 'password' && (
        <EyeSpan onClick={togglePasswordShow}>
          {isPassShow ? <EyeOpenSvg />: <EyeOffSvg />}
        </EyeSpan>
      ) }
    </FormGroup>
    {errorMsg ? (
      <ErrorDiv>
        <Error>{errorMsg}</Error>
      </ErrorDiv>
    ): null}
    </>
  )
}

export default Input
