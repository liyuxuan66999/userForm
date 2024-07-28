export const isClear = (searchResults)=>{
    return searchResults.length === 0 || (searchResults.length === 1 && searchResults[0] === null);
}