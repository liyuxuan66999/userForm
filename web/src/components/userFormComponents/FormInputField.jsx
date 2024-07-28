import React, {useMemo} from 'react';

import { FormControl, TextField } from '@mui/material';
import { getFieldLabel } from '../utils/formUtils';

export const FormInputField = ({formData, fieldType, handleOnChange}) => {
    const fieldLabel = getFieldLabel(fieldType);
    return(
        <FormControl fullWidth>
          <TextField
            label={fieldLabel}
            required
            variant="outlined"
            name={fieldType}
            value={formData[fieldType]}
            onChange={handleOnChange}
          />
        </FormControl>
    );
};