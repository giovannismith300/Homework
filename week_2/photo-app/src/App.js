
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ImagePage from './components/ImagePage';
import AddProfile from './components/AddProfile';
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<AddProfile/>}></Route>
    <Route path="image-display" element = {<ImagePage/>}></Route>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
