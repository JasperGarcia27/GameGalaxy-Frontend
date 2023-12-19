import {Container} from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';

// CSS
import './App.css';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProductView from './components/ProductDetailsView';
import Error from "./pages/Error"

// UserContext
import {UserProvider} from './UserContext';

// Components
import AppNavbar from './components/AppNavBar';

// Envents
import AddProduct from './events/AddProduct';



function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })
  const unsetUser = () =>{
    localStorage.clear();
  }
  
  useEffect(() => {
    console.log(user);
    fetch(`https://gamegalaxy-backend.onrender.com/users/getUserDetails`, {
      header: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(typeof data._id !== "undefined") {
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        })
      }
      else {
        setUser({
          id: null,
          isAdmin: null
        })
      }
    })
  }, [])

  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <Container fluid>
            {/* <AppNavbar /> */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/addProduct" element={<AddProduct/>} />
                <Route path="/products/:productId" element={<ProductView/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/profile" element={<Profile/>} /> 
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Container>
        {/* <Footer /> */}
      </Router>
    </UserProvider> 
  );
}

export default App;
