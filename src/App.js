import {BrowserRouter, Route} from 'react-router-dom';
import MyMeals from "./Components/MyMeals";
import Homepage from './Components/Homepage';
import CalcBMI from "./Components/CalcBMI.jsx";
import MainLogIn from "./Components/MainLogIn.jsx";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <div>
          <MainLogIn/>
          {/* <Route path="/" exact component={MainLogIn}/> */}
          {/* <Header/> */}
          <Route path="/" exact component={Homepage}/>
          <Route path="/mymeals" exact component={MyMeals}/>
          <Route path="/bmi" exact component={CalcBMI}/>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
