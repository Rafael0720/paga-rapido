import { BrowserRouter, Route, Switch } from "react-router-dom";
import Boleto from "./Boleto";
import CreditCard from "./CreditCard";
import Footer from "./Footer";
import GridBoleto from "./GridBoleto";
import GridHome from "./GridHome";
import Home from "./Home";
import Navbar from "./Navbar";

function Routes () {
    return (
       <BrowserRouter>
       <>
        <Navbar />        
        </>
        <Switch>            
            <Route path="/boleto">
                <>
                <Home />
                <Boleto />
                <GridBoleto />
                </>
            </Route>
            <Route path="/card">
                <>
                <Home />
                <CreditCard />
                </>
            </Route>
            <Route path="/">
                <>
                <Home />
                <GridHome />
                </>
            </Route>            
        </Switch>
        <Footer />
       </BrowserRouter>
    )
 }

export default Routes;