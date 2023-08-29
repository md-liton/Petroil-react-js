import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Bllog from "./Components/Bllog/Bllog"
import Company from "./Components/Company/Company"
import Header from "./Components/Header/Header"
import Imag from "./Components/Imag/Imag"
import Logo from "./Components/Logo/Logo"
import Navbar from "./Components/Navbar/Navbar"
import Service from "./Components/Servics/Service"
import Map  from "./Components/Map/Map"
import Footer from "./Components/Footer/Footer"
import Copyright from "./Components/Copyright/Copyright"


function App() {

  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <Banner></Banner>
    <About></About>
    <Imag></Imag>
    <Service></Service>
    <Company></Company>
    <Logo></Logo>
    <Bllog></Bllog>
    <Map></Map>
    <Footer></Footer>
    <Copyright></Copyright>
    </>
  )
}

export default App
