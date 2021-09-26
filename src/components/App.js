import { useEffect, useState } from 'react';
import '../styles/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

//components
import Navbar from './Navbar';
// import Footer from './Footer';

//pages
import Orders from '../pages/Orders';
import About from '../pages/About';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Admin from '../pages/Admin';
import Auth from '../pages/Auth';



function App() {

  const LOCAL_STORAGE_AUTHKEY = 'fastfood.authkey';
  const [foodList, setFoodList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const [authKey, setAuthKey] = useState({});
  
  const foodMenu = async() => {
    try {
      const foodlist  = await axios.get('/menu');
      setFoodList(foodlist.data);
    } 
    catch (error) {
      console.log(error);
    }
  };
  const getOrders = async() => {
    try {
      const headers = {'Authorization': `bearer ${authKey.token}`}
      const orderlist = await axios.get('/orders/', {headers});
      setOrderList(orderlist.data);
    } 
    catch (error) {
      console.log("this is the get orders method", error);
    }
  };
  const postOrder = async(foodName) => {
    try {
      const order = {name: foodName}
      const headers = {'Authorization': `bearer ${authKey.token}`}
      await axios.post('/users/orders/', order, {headers})
      getOrderHistory();
    } 
    catch (error) {
      console.log("this is the get orders method", error);
    }
  };
  const getOrderHistory = async() => {
    try {
      const headers = {'Authorization': `bearer ${authKey.token}`}
      const userorders = await axios.get('/users/orders', {headers});
      setUserOrders(userorders.data);
    } 
    catch (error) {
      console.log("this is the get orders method", error);
    }
  };

  const handleAuthKey = (authObject) => {setAuthKey(authObject)}



  useEffect(() => {
    const authKey = localStorage.getItem(LOCAL_STORAGE_AUTHKEY);
    if (authKey != null && authKey !== JSON.stringify({})) {
      setAuthKey(JSON.parse(authKey));

    }

    foodMenu();
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_AUTHKEY, JSON.stringify(authKey));
    if(JSON.stringify(authKey) !== JSON.stringify({})){
      getOrders();
      getOrderHistory();
      console.log('we have some auth-key data')
    }
    return () => {
      console.log("auth-key successfully stored!");
    }
  }, [authKey])
  

  return (
    <div className="App">
      <Router>
        <div className="container-fluid  p-0">
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/menu' exact render={(props)=><Menu foodList={foodList} postOrder={postOrder}/>}/>
            <Route path='/orders' exact render={props=><Orders userOrders={userOrders}/>}/>
            <Route path='/admin' exact render={props=><Admin foodList={foodList} orderList={orderList}/>}/>
            <Route path='/about' exact component={About}/>
            <Route path='/auth' exact render={props=><Auth  handleAuthKey={handleAuthKey}/>}/>
          </Switch>
          {/* <Footer/> */}
        </div>

      </Router>
    </div>
  );
}

export default App;
