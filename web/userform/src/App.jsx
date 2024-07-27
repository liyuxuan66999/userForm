import { UserForm } from "./components/UserForm";
import { Header } from "./components/Header";
import { Stack } from "@mui/material";
import { SearchResultsProvider } from "./provider/SearchResultsProvider";
import {BorwserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <SearchResultsProvider>
      <Stack direction="column" justifyContent="center" >
        <Header />
        <UserForm />
      </Stack>
    </SearchResultsProvider>


  );
}

export default App;
