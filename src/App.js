import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="/Login" element={<Login />}>
      </Route>
      <Route path="/Signup" element={<Signup />}>
      </Route>
    </Routes>
  </BrowserRouter>
  //   <>
  //  <HomePage/> 
  //  </>
  );
}
export default App;
