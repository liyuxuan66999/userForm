import React, { useState, useMemo } from "react";

import { Card, CardContent, Typography } from '@mui/material';
import { SearchResultTypes } from "./utils/enums";
import { HitsIndicator } from "./HitsIndicator";

export const ResultCard = ({ result, index }) => {
    const { matchFields=[] } = result;
    const [isNameHit, setIsNameHit] = useState(false);
    const [isCountryHit, setIsCountryHit] = useState(false);
    const [isBirthdayHit, setIsBirthdayHit] = useState(false);

    const matchFieldsList = useMemo(() => matchFields?.map((hit, fieldIndex) => {
        const {fieldName} = hit;
        if(fieldName === SearchResultTypes.NAME_HIT){
            setIsNameHit(true);
        } else if(fieldName === SearchResultTypes.COUNTRY_HIT){
            setIsCountryHit(true);
        } else if(fieldName === SearchResultTypes.BIRTHDATE_HIT){
            setIsBirthdayHit(true);
        }
        return (
            <Card key={fieldIndex} variant="outlined" style={{ marginBottom: '10px' }}>
                <CardContent>
                    {Object.entries(hit).map(([key, value]) => (
                        <Typography key={key} variant="body2"><strong>{key}:</strong> {value}</Typography>
                    ))}
                </CardContent>
            </Card>
        )
    }), [matchFields]);
    return (
        <Card key={index} variant="outlined">
            <HitsIndicator isNameHit={isNameHit} isCountryHit={isCountryHit} isBirthdayHit={isBirthdayHit}/>
            <CardContent>
                {matchFieldsList}
            </CardContent>
        </Card>
    )
};