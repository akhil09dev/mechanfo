import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from "react";
import '../../assets/styles/contact.css'
import { useFormControls } from "./ContactFormControls";

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name"
  },
  {
    name: "email",
    label: "Email",
    id: "my-email"
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 5
  }
];

export const ContactForm = () => {
  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  } = useFormControls();

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <div className='text-field'>
          <TextField
            key={index}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            error={errors[inputFieldValue.name]}
            multiline={inputFieldValue.multiline ?? false}
            fullWidth
            rows={inputFieldValue.rows ?? 1}
            autoComplete="none"
            {...(errors[inputFieldValue.name] && {
              error: true,
              helperText: errors[inputFieldValue.name]
            })
            }
          /></div>
        );
      })}
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disabled={!formIsValid()}
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm