import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Home from "./pages/Home/Page";
import GetInTouch from "./components/common/GetinTouch";
import FrequentlyAskedQ from "./components/common/FrequentlyAskedQ";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";  


function App() {
  

  return (
   <div>
    {/* <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />          
        </Routes>
        </BrowserRouter> */}
        <Navbar/>
   </div>
  )
}

export default App
