//
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/User/JSX/Navbar';
import Hero from './Components/User/JSX/Hero';
import AboutRestaurant from './Components/User/JSX/AboutRestaurant';
import Menu from './Pages/JSX/Menu';
import Cart from './Pages/JSX/Cart';
import ItemDisplay from './Components/User/JSX/ItemDisplay';
import Categories from './Components/User/JSX/Categories';
import AboutUs from './Pages/JSX/AboutUs';
import Special from './Pages/JSX/Special';
import Footer from './Components/User/JSX/Footer';
import SignUp from './Pages/JSX/SignUp';
import Logout from './Pages/JSX/Logout';
import AdminNavbar from './Components/Admin/JSX/AdminNavbar';
import AdminMenu from './Components/Admin/JSX/AdminMenu';
import ModifyItem from './Components/Admin/JSX/ModifyItem';
import DeleteItem from './Components/Admin/JSX/DeleteItem';
import Dashboard from './Components/Admin/JSX/Dashboard';
import Order from './Components/Admin/JSX/order';
import Inventory from './Components/Admin/JSX/Inventory';
import VoiceToText from './Components/User/JSX/VoiceToText';
//hey this is good
function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState(null);
  const [showSignupForm, setShowSignupForm] = useState(true);
  const [name, setName] = useState(null);
  const [restaurant, setRestaurant] = useState('Foodies')
  console.log(121, restaurant);

  const setUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/getuser', {
        withCredentials: true,
      });
      if (response.data.username) {
        setName(response.data.username);
        setShowSignupForm(false);
      } else {
        setShowSignupForm(true);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  //it is comment

  useEffect(() => {
    setUserData();
    const intervalId = setInterval(() => {
      setUserData();
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <div className="App">
        {name === 'admin' ? (
          <AdminNavbar             showLoginOrLogout={showSignupForm ? 'Login/Signup' : 'Logout'}
          />
        ) 
        
        : (
          <Navbar
            setCategory={setCategory}
            setRestaurant={setRestaurant}
            restaurant={restaurant}
            name={name ? `Welcome ${name}` : null}
            showLoginOrLogout={showSignupForm ? 'Login/Signup' : 'Logout'}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <>
              
               {/* <VoiceToText/> */}
                <Hero restaurant={restaurant} />
                <AboutUs restaurant={restaurant} />
                <Special />
                <Categories setItem={setCategory} />
                <Footer restaurant={restaurant} />
              </>
            }
          />
          <Route path="/about" element={<AboutRestaurant />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-orders" element={<Order />} />
          <Route path="/manage-inventory" element={<Inventory />} />
          <Route path="/addItem" element={<AdminMenu />} />
          <Route path="/deleteItem" element={<DeleteItem/>} />
          <Route path="/modifyItem" element={<ModifyItem />} />

          <Route path="/special" element={<><Special /><Footer /></>} />
          <Route path="/menu" element={<><Menu setItem={setSelectedItem} /><Footer /></>} />
          <Route path="/cart" element={<><Cart /><Footer /></>} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/cuisine" element={<><Menu category={category} setItem={setSelectedItem} /><Footer /></>} />
          <Route path="/categories" element={<><Menu category={category} setItem={setSelectedItem} /><Footer /></>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/logout' element={<Logout setName={setName} />} />
          <Route path="/productshow" element={<><ItemDisplay item={selectedItem} setItem={setSelectedItem} /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
