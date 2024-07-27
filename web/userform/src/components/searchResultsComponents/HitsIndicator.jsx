import React from "react";

import { Stack } from '@mui/material';
import { SearchResultTypes } from "./utils/enums";
import { HitIcons } from "./HitIcons";

export const HitsIndicator = ({isNameHit, isCountryHit, isBirthdayHit}) => {
    return (
        <Stack direction='row' spacing={2}>
            <HitIcons isHit={isNameHit} resultType={SearchResultTypes.NAME_HIT}/>
            <HitIcons isHit={isCountryHit} resultType={SearchResultTypes.COUNTRY_HIT}/>
            <HitIcons isHit={isBirthdayHit} resultType={SearchResultTypes.BIRTHDATE_HIT}/>
        </Stack>
    )
};