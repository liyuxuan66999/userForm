import React, { useState, useMemo } from "react";

import { SearchResultsContext } from "./SearchResultsContext";

export const SearchResultsProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    console.log('searchResults', searchResults);
    const context = useMemo(
        () => ({ searchResults, setSearchResults }),
        [searchResults, setSearchResults]
    );

    return <SearchResultsContext.Provider value={context}>{children}</SearchResultsContext.Provider>
};