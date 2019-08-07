import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import NavBar from './components/layout/NavBar.js';
import User from './components/users/User.js'
import Alert from './components/layout/Alert.js';
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './App.css';


const App = () => {
 

  // async componentDidMount(){
  //   //console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({ loadning: true })
  //   const res = await axios
  //     .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //     //.then(res => console.log(res.data)) ;
  //     //console.log(res.data);
  //     this.setState({ users: res.data, loading: false })
  // }

    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className='App'>
        <NavBar title='Github Finder' icon='fab fa-github'/>
        <div className='container'>
          <Alert/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' component={User}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
