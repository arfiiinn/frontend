import Login from './Components/Login/Login';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Verifyuser from './Components/Login/Verifyuser';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <BrowserRouter> 
    <Routes>   
       <Route exact path='/' element={<Login/>}/> 
       <Route path='/verify' element={<Verifyuser/>}/>
        </Routes> 
       </BrowserRouter>
       {/* <Footer/> */}
    </div>
  );
}

export default App;
