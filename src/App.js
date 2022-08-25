import { Box } from "@mui/system";
import "./App.css";
import Exercises from "./components/Exercises";
import HeroBanner from "./components/HeroBanner";
import NavBar from "./components/navBar/NavBar";
import SearchExercises from "./components/SearchExercises";


function App() {
  return (
    <Box width={'400px'} sx={{width:{xl:'1488px'}}} m='auto'>
      <NavBar />
      {/* <Footer/> */}
    </Box>
  );
}

export default App;
