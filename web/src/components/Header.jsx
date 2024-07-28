import React from 'react';
import { Typography, Stack } from '@mui/material';

export const Header = () => {
    return (
        <Stack sx={{padding: '10px'}}>
            <Typography variant="h4" component="h1">
                UserForm
            </Typography>
        </Stack>
    )

};