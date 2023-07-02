import { Router, Routes,Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './component/footer/Footer'
import CatalogFetchApi from './component/navbar/CatalogFetchApi' 
import Catalogs from './pages/contact/catalogs'
import NotFound from './component/NotFound'
import BaseApiImage from './pages/home/BaseApiImage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogs' element={<Catalogs/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/images' element={<BaseApiImage/>}/>
      </Routes>
    </>
  );
}

export default App;
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import Navbar from "./component/navbar/Navbar"
// import Footer from "./component/footer/Footer";
// import Home from "./pages/home/Home";
// import Interests from "./pages/Contacts";
// import Top25 from "./pages/Contacts";
// import Seasons from "./pages/Contacts";
// import Rooms from "./pages/Contacts";
// import Colors from "./pages/Contacts";
// import Nature from "./pages/Contacts";
// import Plants from "./pages/Contacts";
// import Graphics from "./pages/Contacts";
// import Phrase from "./pages/Contacts";
// import Minimal from "./pages/Contacts";
// import Animals from "./pages/Contacts";
// import Foods from "./pages/Contacts";
// import Cards from "./pages/Contacts";
// import Cities from "./pages/Contacts";




// function App() {
//   return (
// 		<>
// 			<Router>
// 				<Navbar />
// 				<Routes>
// 					<Route path="/" element={<Home />} />
// 					{/* <Route path="/Seasons" element={<Seasons />} />
// 					<Route path="/Seasons/:id" element={<Seasons />} />
// 					<Route path="/Interests" element={<Interests />} />
// 					<Route path="/Top25" element={< Top25/>} />
// 					<Route path="/Rooms" element={< Rooms/>} />
// 					<Route path="/Colors" element={< Colors/>} />
// 					<Route path="/Nature" element={< Nature/>} />
// 					<Route path="/Plants" element={< Plants/>} />
// 					<Route path="/Graphics" element={< Graphics/>} />
// 					<Route path="/Phrase" element={< Phrase/>} />
// 					<Route path="/Minimal" element={< Minimal/>} />
// 					<Route path="/Animals" element={< Animals/>} />
// 					<Route path="/Foods" element={< Foods/>} />
// 					<Route path="/Cards" element={< Cards/>} />
// 					<Route path="/Cities" element={< Cities/>} /> */}
// 				</Routes>
// 				<Footer />
// 			</Router>
// 		</>
//   );
// }

// export default App;
