import React, { useState } from "react";
import { UserForm } from "./components/UserForm";
import { Header } from "./components/Header";
import { Stack, } from "@mui/material";
import { SearchResultsProvider } from "./provider/SearchResultsProvider";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { SearchResults } from "./components/SearchResults";

function App() {
  return (
    <Stack direction="column" justifyContent="center" >
      <Header />
      <Router>
        <Routes>

          <Route path="/searchResults" element={<SearchResults />} />
          <Route path="/" element={<UserForm />} />

        </Routes>
      </Router>
    </Stack>
  );
}

export default App;
