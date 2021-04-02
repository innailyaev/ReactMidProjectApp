import {BrowserRouter, Route} from 'react-router-dom';
import Main from "./Components/Main";
import MyMeals from "./Components/MyMeals";
import Homepage from './Components/Homepage';
import Header from "./Components/Header";
import CalcBMI from "./Components/CalcBMI.jsx";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={Homepage}/>
          <Route path="/mymeals" exact component={MyMeals}/>
          <Route path="/bmi" exact component={CalcBMI}/>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
