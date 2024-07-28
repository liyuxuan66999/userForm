import React, {useContext} from "react";

import { Typography, Stack } from '@mui/material';
import { SearchResultsContext } from "../provider/SearchResultsContext";
import { ResultCard } from "./searchResultsComponents/ResultCard";
import { isClear } from "./searchResultsComponents/utils/helpers";

export const SearchResults = () => {
    const {searchResults, searchError} = useContext(SearchResultsContext);
    if(isClear(searchResults)){
        return <Typography variant="h4" align="center">Clear</Typography>
    }
    else if(searchError?.length){
        return <Typography variant="h4" align="center">{searchError}</Typography>
    }

    const searchResultsList = searchResults?.map((result, index) => (
        result?<ResultCard result={result} index={index}/>:null
    ));
    return (
        <Stack direction="column" spacing={2} justifyContent="center" padding="10px">
            <Typography variant="h4" align="center">Search Results</Typography>
           {searchResultsList}
        </Stack>
    );

};
