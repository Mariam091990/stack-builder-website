
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Technologies from './component/Technologies'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './component/Footer';

function App() {


  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Technologies></Technologies>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
