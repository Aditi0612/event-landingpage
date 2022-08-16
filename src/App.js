import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Introduction from "./MyComponents/Introduction";
import About from "./MyComponents/About";
//import Carousal from "./MyComponents/Carousal";
import Footer from "./MyComponents/Footer";

function App() {
  return (
    <div classNameName="App">
      <Header/>
      <Introduction/>
      <About/>
      <Footer/> 
    </div>
  );
}

export default App;
