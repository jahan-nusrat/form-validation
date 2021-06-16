import React, {useEffect, useState} from 'react'
import SelectOption from '../Select/SelectOption';
import { Button } from './FormInput.style';
import Input from './Input';

interface IFieldValue {
  name: string;
  email: string;
  userType: string;
  password: string;
}

const inputValues = {
  name: "",
  email: "",
  userType: "",
  password: "",
};

const FormInput = () => {
  /* ====== States===== */
  const [fieldValues, setFieldValues] = useState<IFieldValue>(inputValues);
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [errors, setErrors] = useState<IFieldValue>(fieldValues);
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  /* ========Form Validation======== */
  const validate = (formValues: IFieldValue = fieldValues) => {
    const err = {...errors}

    /* Name Error */
    if(formValues['name']) {
      err['name'] =formValues.name.trim() ? '' : 'This field is required';
    }

    /* Email errors */
    if (formValues['email']) {
      err['email'] = formValues.email ? /^\S+@\S+$/i.test(formValues.email) ? '' : 'Invalid Email Address' : 'This field is required';
    }

    /* Password Errors */
    if(formValues['password']){
      err['password'] = formValues.password.length < 8 ? 'Minimum 8 Characters' : ''
    }

    setErrors({...err})
  }

  /* ========Select Role======= */
  const handleSelectRole = (role: string) => setFieldValues({...fieldValues, userType: role})

  /* ======Handle Input Change====== */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target;

    setFieldValues({
      ...fieldValues,
      [name as string]: value,
    });

    validate(fieldValues);
  };

  useEffect(() => {
    Object.values(errors).some((err) => err !== "") ||
    (Object.values(errors).every((err) => err === "") &&
    Object.values(fieldValues).some((val) => val === "")) ? setIsDisabled(true) : setIsDisabled(false)
  },[errors, fieldValues])

  const togglePasswordShow = () => setPasswordShow(!passwordShow);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  
  return (
    <form onSubmit={handleFormSubmit}>
      <Input 
        type='text' 
        name='name' 
        label='Your Name' 
        value={fieldValues.name} 
        inputChange={handleInputChange}
        errorMsg={errors.name} 
      />

      <Input 
        type='text' 
        name='email' 
        label='Email Address' 
        value={fieldValues.email} 
        inputChange={handleInputChange}
        errorMsg={errors.email}  
      />

      <SelectOption handleSelectRole={handleSelectRole} />

      <Input 
        type='password' 
        name='password' 
        label='Password' 
        value={fieldValues.password} 
        inputChange={handleInputChange} 
        isPassShow={passwordShow} 
        togglePasswordShow={togglePasswordShow}
        errorMsg={errors.password} 
      />

      <Button type='submit' disabled={isDisabled} isDisabled={isDisabled}>
        Next
      </Button>
    </form>
  )
}

export default FormInput
