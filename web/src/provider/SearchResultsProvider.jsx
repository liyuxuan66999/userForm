import React, { useState, useMemo } from "react";

import { SearchResultsContext } from "./SearchResultsContext";

export const SearchResultsProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchError, setSearchError] = useState(null);
    console.log('searchResults', searchResults);
    const context = useMemo(
        () => ({ 
            searchResults, 
            searchError, 
            setSearchResults,
            setSearchError 
        }),
        [searchResults, setSearchResults]
    );

    return <SearchResultsContext.Provider value={context}>{children}</SearchResultsContext.Provider>
};