import Main from './Main';
import Detail from './views/Detail';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className= "App">
    <BrowserRouter >
      <h1 className="App"> Product Manager </h1>
        <Switch>
        <Route exact path="/people/">
          <Main />
          
        </ Route>
        
        <Route path="/people/:id"> 
        <Detail />
        </ Route >
        </ Switch> 
      

    </ BrowserRouter  > 
    </div>
  );
}
    
export default App;

