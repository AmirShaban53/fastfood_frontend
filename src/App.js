import React, { useEffect, useState } from 'react';
import './styles/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import axios from 'axios';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Auth from './pages/Auth';
import User from './pages/User';

library.add(fas);
export const FoodContext = React.createContext();
const FASTFOOD_LOCAL = 'react_fastfood_local_key';

function App() {
  const[user, setUser] = useState('');
  const[token, setToken] = useState('');
  const[searchTerm, setSearchTerm] = useState('');

  const[foodList, setFoodList] = useState([]);
  const[orderList, setOrderList] = useState([]);
  const[userOrders, setUserOrders] = useState([]);
  const[selectedFood, setSelectedFood]= useState({});
  const[selectedOrder, setSelectedOrder]= useState({});

  const getFoodList = async() => {
    try {
      const foodlist = await axios.get('/menu');
      if(foodlist.data) setFoodList(foodlist.data);
    } 
    catch (error) {
      console.log(error.message);
    }
  }
  const getOrderList = async() =>{
    try {
      const headers = {'authorization': `bearer ${token}`}
      const orderlist = await axios.get('/orders', {headers: headers})
      if(orderlist.data) setOrderList(orderlist.data);
    } 
    catch (error) {
      console.log(error.message);
    }
  }
  const getUserOrders = async() => {
    try {
      const headers = {'authorization': `bearer ${token}`}
      const userorders = await axios.get('/users/orders', {headers: headers})
      if(userorders.data) setUserOrders(userorders.data);
    } 
    catch (error) {
      console.log(error.message);
    }
  }
  const getUserData = async() => {
    try {
      const userData =await jwt.verify(token, process.env.REACT_APP_JWT_KEY);
      if(userData){
        setUser(userData);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  const handleEditFood = (id) => {
    const food = foodList.filter(item=> item.id === id);
    if(food){
      setSelectedFood(food[0]);
    }
  }
  const handleEditOrder = (id) => {
    const order = orderList.filter(item=> item.id === id);
    if(order){
      setSelectedOrder(order[0]);
    }
  }
  const handleAddOrder = async(food) => {
    try {
      const headers = {'authorization': `bearer ${token}`}
      await axios.post('/users/orders', {name: food}, {headers: headers});
      getOrderList();
    } 
    catch (error) {
      console.log(error.message);
    }
  }
  const handleDeleteFood = async(id) => {
    try {
      const headers = {'authorization': `bearer ${token}`}
      await axios.delete(`/menu/${id}`, {headers: headers});
      getFoodList();
    }
    catch (error) {
      console.log(error.message);
    }
  }
  const handleConfrimOrder = async(id) => {
    try {
      const headers = {'authorization': `bearer ${token}`}
      await axios.patch(`/orders/${id}`,{status: true}, {headers: headers});
      getOrderList();
    } 
    catch (error) {
      console.log(error.message);
    }
  }
  const handleUserLogout = async() => {
    try {
      await localStorage.setItem(FASTFOOD_LOCAL, '');
      setToken('');
      window.location.reload(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getFoodList();
    const tokenJSON = localStorage.getItem(FASTFOOD_LOCAL);
    if(tokenJSON !== null || typeof token !== 'undefined'){
      setToken(JSON.parse(tokenJSON));
    } 
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    localStorage.setItem(FASTFOOD_LOCAL, JSON.stringify(token));
    if(typeof token !== 'undefined'){
      getUserOrders();
      getOrderList();
      getUserData();
    }
    // eslint-disable-next-line
  }, [token])

  const ContextValue = {
    selectedOrder,
    selectedFood,
    userOrders,
    searchTerm,
    orderList,
    foodList,
    token,
    user,
    handleConfrimOrder,
    handleDeleteFood,
    handleUserLogout,
    handleEditOrder,
    handleAddOrder,
    handleEditFood,
    setSearchTerm,
    getFoodList,
    setToken,
    setUser
  }

  return (
    <div>
      <div className="container-fluid p-0">
        <FoodContext.Provider value={ContextValue}>
          <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact render={props=><Home/>}/>
                <Route path='/menu' exact render={props=><Menu list = {foodList}/>}/>
                <Route path='/user' exact render={props=><User/>}/>
                <Route path='/auth' exact render={props=><Auth/>}/>
            </Switch>
            <Footer/>
          </Router>
        </FoodContext.Provider> 
      </div>
    </div>

  );
}

export default App;
