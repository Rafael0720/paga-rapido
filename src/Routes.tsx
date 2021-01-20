import { BrowserRouter, Route, Switch } from "react-router-dom";
import Boleto from "./Boleto";
import CreditCard from "./CreditCard";
import Footer from "./Footer";
import GridHome from "./GridHome";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

function Routes () {
    return (
       <BrowserRouter>
       <>
        <Navbar />        
        </>
        <Switch>                          
            <Route path="/">
                <>
                <Home />
                <GridHome />
                </>
            </Route> 
            <Route path="/boleto">
                <>
                <Home />
                <Boleto />
                <GridHome />
                </>
            </Route> 
            <Route path="/card">
                <>
                <Home />
                <CreditCard />
                <GridHome />
                </>
            </Route>
            <Route path="/orders">
                <>
                <Orders />
                </>
            </Route>                                        
        </Switch>
        <Footer />
       </BrowserRouter>
    )
 }

export default Routes;