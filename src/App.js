import "./App.css";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Searchingbar from "./Searchingbar";
// import {Autocomplete} from '@material-ui/core'
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { Route, Switch } from "react-router";
import HotelsList from "./HotelsList";
import {Box} from '@material-ui/core'
const names = [{ name: "vikas" }];
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Searchbar /> */}
      {/* <Searchingbar /> */}

     <Box marginTop="10px" >

      <Switch>
        <Route exact path="/" component={Searchingbar} />
        <Route exact path='/hotels' component={HotelsList} />
      </Switch>

      </Box>
    </div>
  );
}

export default App;
