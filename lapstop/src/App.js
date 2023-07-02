import './App.css';
import Home from './home';
import Products from './products';
import AppBar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import InputPage from './AddLap';
import Result from './Search_Results';
import EditLap from './EditLAptop';
import AdminAllLaptop from './AdminAllLaptop';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<AppBar />}>
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<InputPage />} />
          <Route path="/AdminallLap" element={<AdminAllLaptop />} />
          <Route path="/EditLaptop/:laptopId" element={<EditLap />} />
          <Route path="/search" element={<Result />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
