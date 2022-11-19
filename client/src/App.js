import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error'
import Login from './Pages/Login';
import Register from './Pages/Register';
import LandingPage from './Pages/LandingPage';
import Profile from './Pages/Profile/Profile';
import NotFound from './Pages/NotFound';
import NavBarr from './components/NavBarr';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrent} from './redux/action/authAction';

import PrivateRoute from './router/PrivateRoute';
import CoachList from './components/CoachList';
import ClientList from './components/ClientList';

function App() {
 const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getCurrent())
  },[dispatch])


  return (
    <div className="App">
    
     <NavBarr/>
   
     <Error/>
      <Routes>
        <Route  path='/' element={ <LandingPage/> }/>
        <Route  path='/login' element={ <Login/> }/>
        <Route  path='/register' element={ <Register/> }/>
        <Route path='/coachlist' element={<CoachList/>}/>
        <Route path='/clientlist' element={<ClientList/>}/>
        <Route  path='/profile' element={<PrivateRoute>
        <Profile/>   
        </PrivateRoute>
        }/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;

