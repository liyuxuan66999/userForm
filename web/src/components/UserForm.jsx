import React, { useCallback, useState, useContext } from 'react';
import { Stack, Button } from '@mui/material';
import { FormInputField } from './userFormComponents/FormInputField';
import { inputFieldType } from './utils/enums';
import { SearchResultsContext } from '../provider/SearchResultsContext';
import { useNavigate  } from 'react-router-dom';
import { isValidDate } from './utils/formUtils';

export const UserForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        birthDay: ''
    });
    const {setSearchResults, setSearchError} = useContext(SearchResultsContext);
    const navigate = useNavigate();
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        const { firstName, lastName, country, birthDay } = formData;
        if (!firstName.length || !lastName.length || !country.length || !birthDay.length) {
            alert('Please fill out all fields.');
            return;
        }

        if (!isValidDate(birthDay)) {
            alert('Please enter a valid date in yyyy-mm-dd format.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/validateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    country,
                    birthDay
                })
            });
            if(response.ok){
                const {matchSummaries} = await response.json();
                setSearchResults([...matchSummaries]);
            } else {
                const {error} = await response.json();
                setSearchError(error);
            }
            
            navigate('/searchResults');
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
                <FormInputField formData={formData} fieldType={inputFieldType.BirthDay} handleOnChange={handleOnChange} />
                <FormInputField formData={formData} fieldType={inputFieldType.Country} handleOnChange={handleOnChange} />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Stack>
        </form>
    );
};