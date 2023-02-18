
import './App.css';
import Home from './Components/Home';
import SideBar from './Components/SideBar';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Liked from './Components/Liked';
import ReduxUndo from 'redux-undo';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  
   < Route element={  <Home />} path="/"/>


  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
