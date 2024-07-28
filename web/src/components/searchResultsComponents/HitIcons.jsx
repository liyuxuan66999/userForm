import React from "react";

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ClearIcon from '@mui/icons-material/Clear';

import { Stack, Typography } from '@mui/material';

export const HitIcons = ({ isHit, resultType }) => (
    <Stack direction='row'>
        <Typography>{resultType}</Typography>
        {isHit ? <CheckBoxIcon color='success' /> : <ClearIcon color='error' />}
    </Stack>
);