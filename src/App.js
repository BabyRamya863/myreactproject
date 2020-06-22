import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import logo1 from './images/profileicon.svg';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume.js';


function App(){

  return(
   <BrowserRouter>
    <Route exact path='/' component={Home}/>
    <Route exact path='/resume' component={Resume}/> 
   </BrowserRouter>
  );
  }

  //Home

  let Home=() =>{
      let profiles=data .profile;
      console.log(profiles);

      return(
        <container>
        <div className="row" >
          {profiles.map((values,index)=>(
            <div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={index}>
          <div className="card" style={{backgroundColor:"#A9A9A9"}}>
              <div className="card-body text-center">
                <img src={logo1} alt="profileicon" style={{width:"30%"}}/>
                <h2>{values.basics.name}</h2>
                <h4 className="text-secondary">{values.basics.role}</h4>
          <a href={"tel:"+values.basics.phone}><h4 style={{color:"white"}}>{values.basics.phone}</h4></a>
                <a href={"mailto::"+values.basics.email}><h4 style={{color:"white"}}>{values.basics.email}</h4></a>
                <Link to={{pathname:'/resume' ,data:{id:index}}} className="btn btn-primary">View Profile</Link>
              </div>
          </div>
          </div> 
          )
          )}
        </div>
        </container>

      )
  }

export default App;