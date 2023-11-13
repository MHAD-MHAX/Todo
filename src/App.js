import React, {Component} from 'react';
import './App.css';
import Navigation from './pages/Navigation';




import TodoList from './pages/TodoList';
import Signin  from './pages/Signin';
import Register from './pages/Register';


class App extends Component{
  constructor(){
   super();
   this.state= {
   route: 'signin', 
   isSignedIn: false
   }
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    
    this.setState({route: route});
  }

  render(){ 
    return(
      <div className='app'>
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      { this.state.route === 'home'
     ? <TodoList/>
     :(
      this.state.route === "signin"
      ? <Signin onRouteChange={this.onRouteChange}/>
      : <Register onRouteChange={this.onRouteChange}/>
     )
    }
      </div>
    )
  }
  } 
  
  
  export default App;
  