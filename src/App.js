
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import About from './components/About/About';
import Trainers from './components/Trainers/Trainers';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Servicedetail from './components/Servicedetail/Servicedetail';
import DetailedService from './components/DetailedService/DetailedService';
import Contact from './components/Contact/Contact';
import Schedule from './components/Schedule/Schedule';
import Trainer from './components/Trainer/Trainer';
import Membership from './components/Membership/Membership';
import Member from './components/Member/Member';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/services'>
        <Services></Services>
        </Route>
        <Route path='/servicedetail'>
          <Servicedetail></Servicedetail>
        </Route>
        <PrivateRoute path='/detailsservice/:serviceId'>
          <DetailedService></DetailedService>
        </PrivateRoute>
        <Route path='/Trainers'>
        <Trainers></Trainers>
        </Route>
        <PrivateRoute path="/trainer">
          <Trainer></Trainer>
        </PrivateRoute>
        <PrivateRoute path="/shop">
          <Shop></Shop>
        </PrivateRoute>
        <Route path='/about'>
        <About></About>
        </Route>
        <Route path='/login'>
        <Login></Login>
        </Route>
        <Route path='/register'>
        <Register></Register>
        </Route>
        
        <Route path='/contact'>
        <Contact></Contact>
        </Route>
        <Route path='/schedule'>
        <Schedule></Schedule>
        </Route>
        <PrivateRoute path="/members">
          <Membership></Membership>

        </PrivateRoute>
        <PrivateRoute path="/member">
          <Member></Member>
        </PrivateRoute>
        <Route path='*'>
        <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
     
      
      
      
      
      
      
      
    </div>
  );
}

export default App;
