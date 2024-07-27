import { UserForm } from "./components/UserForm";
import { Header } from "./components/Header";
import { Stack } from "@mui/material";
function App() {
  // create form here
  return (
    <Stack direction="column" justifyContent="center" >
       <Header />
       <UserForm />
    </Stack>
   
  );
}

export default App;
