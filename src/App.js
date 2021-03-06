import {BrowserRouter, Route} from 'react-router-dom';
import MyMeals from "./Components/MyMeals";
import Homepage from './Components/Homepage';
import CalcBMI from "./Components/CalcBMI.jsx";
import Header from "./Components/Header.jsx";
import Resipes from "./Components/Recipes.jsx";
import Footer from "./Components/Footer";
import './App.css';


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <div> 
          <Header/>
          <Route path="/" exact component={Homepage}/>
          <Route path="/mymeals" exact component={MyMeals}/>
          <Route path="/bmi" exact component={CalcBMI}/>
          <Route path="/recipes" exact component={Resipes}/>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
