import React, { useCallback, useState } from 'react';
import { Stack, Button } from '@mui/material';
import { FormInputField } from './userFormComponents/FormInputField';
import { inputFieldType } from './utils/enums';
import axios from 'axios';

export const UserForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: ''
    });
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
    
        const { firstName, lastName, country } = formData;
    
        // Check if any of the fields are falsy
        if (!firstName || !lastName || !country) {
          alert('Please fill out all fields.');
          return;
        }
    
        try {
          // Submit the values to the backend API
          const response = await axios.post('https://localhost:5000/validateUser', {
            firstName,
            lastName,
            country
          });
    
          // Parse the response field from the payload
          const { data } = response;
          console.log('Response:', data);
          // Handle the response as needed
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      }, [formData]);

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} justifyContent="center" padding="10px">
                <Stack direction="row" spacing={2}>
                    <FormInputField formData={formData} fieldType={inputFieldType.FirstName} handleOnChange={handleOnChange} />
                    <FormInputField formData={formData} fieldType={inputFieldType.LastName} handleOnChange={handleOnChange} />
                </Stack>
                <FormInputField formData={formData} fieldType={inputFieldType.Country} handleOnChange={handleOnChange} />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Stack>
        </form>
    );
};