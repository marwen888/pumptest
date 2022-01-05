import {useEffect} from "react"
import {useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter , Route , Switch} from "react-router-dom"
import {getAuthUser} from  "./js/action/authAction"

import AppNavBar from './components/AppNavBar';
import Home from "./components/pages/Home"
import Dashboard from "./components/pages/Dashboard"
import PrivateRoute from "./components/route/PrivateRoute";
import Station from "./components/pages/station";
import User from "./components/pages/users";

function App() {
  const dispatch = useDispatch()
  const getUser = () => dispatch(getAuthUser())
  useEffect(() => {
    console.log("getUser")
    getUser()
  },[])
  return (
  <BrowserRouter >
  <AppNavBar />
  <Switch>
    <Route exact path="/" component={Home} />
    <PrivateRoute   />
  </Switch>
  </BrowserRouter>
  );
}

export default App;
////////////////////////////////nav bar contient les components necessaires pour admin et user
//////////////////////////// is auth et user.role=0 pour allet navbar 1 ou navbar2
//////////////////////////// state.user comme state.auth dans AppNavbar