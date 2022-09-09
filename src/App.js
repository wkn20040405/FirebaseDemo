import Register from "./Register";
import {
  BrowserRouter as Router,
  /* Switch,  in react-router-dom v6, Switch is replaced by Routes */
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SignInOutContainer from "./container";
import Home from "./components/Home";
import { Container, Grid } from "@mui/material";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import WillingList from "./pages/WillingList";
import SellingItem from "./pages/SellingItem";
import BuyingHistory from "./pages/BuyingHistory";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import "./App.css"
/* comment code: shift + alt + A */
/* auto format: shift + alt + F */

function App() {
  return (
    /*       <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path = "/" element = {<Login/>}/>
        <Route path="home" element={<Home />} />
      </Routes> */
    /*     <main className="App">
      <SignInOutContainer />
    </main> */

    //Continer is a place got by narrowed the left and right margin space
    //What is Grid?
    //By default, our page is divided into 12 rows and 12 columns
    
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <TopBar />
          <Router>
            <Routes>
              <Route path="/" element={<WillingList />}></Route>
              <Route path="/sellingItem" element={<SellingItem />}></Route>
              <Route path="/buyingHistory" element={<BuyingHistory />}></Route>
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
