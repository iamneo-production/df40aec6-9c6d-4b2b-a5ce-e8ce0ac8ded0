import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Land from './components/Land';
import AdminRouting from './AdminRouting';
import StudentRouting from './StudentRouting';
import AdminSignup from './components/AdminSignUp';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Forgotpass from './components/forgotpass';
import Setpassword from './components/Setpass';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [role, setRole] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getRoles = () => {
      const dataString = localStorage.getItem('data');
      const data = JSON.parse(dataString);
      if (data && data.user && data.user.roles && data.user.roles.length > 0) {
        const roless = data.user.roles[0].name;
        setRole(roless);
      }
    }

    getRoles();
  }, [location]); // Run the effect whenever the route changes

  return (
      <Routes>
        <Route path='/admin-signup' element={<AdminSignup />} />
        <Route path='/' element={<Land />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/setpass" element={<Setpassword />} />
        {/* <Route path="/user" element={<Privateroute />}> */}
        {role === 'ROLE_ADMIN' && <Route path="/main/*" element={<AdminRouting />} />}
        {role === 'ROLE_NORMAL' && <Route path="/main/*" element={<StudentRouting />} />}
        {/* </Route> */}
      </Routes>

  );
}

export default App;