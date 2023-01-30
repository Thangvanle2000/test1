
import "./App.css";
import Tab from "./components/Tab";
import Gallery from "./components/Gallery";
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="container mx-auto h-screen  px-24 mt-[108px]  introResponse">
      <Routes>
      <Route path='/' element={<Tab />} />
      <Route path='/tab' element={<Tab />} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
    </div>
  );
}

export default App;
