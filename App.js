import React from 'react';

import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import 'react-bootstrap'
import RestaurantList from './component/RestaurantList'
import RestaurantCreate from './component/RestaurantCreate'
import RestaurantSearch from './component/ResturantSearch';
import RestaurantDetail from './component/RestaurantDetail'
import AddServices from './component/AddServices'
import RestaurantUpdate from './component/RestaurantUpdate';
import Home from './component/Home'
import NavItems from './component/NavItems'
import Cards from './component/Cards';
import Services from './component/Services';
import Profile from './component/Profile';
import Login from './component/Login';
import Private from './component/Private';

function App() {
return(
  <div >
    <BrowserRouter>
          
      <NavItems/>
      
       <Routes>
       <Route element={<Private/>}>

       <Route  path='/' element={<Home/>}/>
      <Route  path='/RestaurantList' element={<RestaurantList/>}/>
      <Route  path='/RestaurantCreate' element={<RestaurantCreate/>}/>
      {/* <Route  path='/RestaurantSearch' element={<RestaurantSearch/>}/>
      <Route  path='/RestaurantDetail' element={<RestaurantDetail/>}/> */}
      <Route  path='/RestaurantUpdate' element={<RestaurantUpdate/>}/>
      <Route  path='/AddServices' element={<AddServices/>}/>
       <Route  path='/Services' element={<Services/>}/> 
       {/* <Route  path='/profile' element={<Profile/>}/>  */}

       </Route>
       <Route  path='/Login' element={<Login/>}/> 


      </Routes> 
      
      
    </BrowserRouter>
    
    
    </div>
    
)
}
export default App;
