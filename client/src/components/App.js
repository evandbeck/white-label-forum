import '../App.css'
import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';

import Forum from './Forum';
import Subforum from './Subforum';
import Post from './Post';

function App() {
  const [currentUser, setCurrentUser] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    fetch('/authorized_user')
    .then(resp => {
      if(resp.ok) {
        resp.json()
        .then(user => setCurrentUser(user))
      }
    })
  }, [])

  function onLogin(user) {
    setCurrentUser(user);
  }

  function onLogout() {
    setCurrentUser('');
  }

  function loginToSignup() {
    setIsLogin(isLogin => !isLogin)
  }

  if (!currentUser && isLogin) return <Login setCurrentUser={setCurrentUser} loginToSignup={loginToSignup} onLogin={onLogin}/>
  if (!currentUser && !isLogin) return <Signup setCurrentUser={setCurrentUser} loginToSignup={loginToSignup}/>

  return (
    <div className="App">
      <Header />
      <NavBar {...currentUser} onLogout={onLogout} />
      <Switch>
        <Route exact path='/'>
          {/* A Forum Component holds Select Posts, or SubforumItems */}
          <Forum />
        </Route>
        <Route exact path='/subforums/:subforum_id/posts'>
          {/* A Subforum Component holds Select Posts, or SubforumItems */}
          <Subforum currentUser={currentUser}/>
        </Route>
        <Route exact path='/posts/:post_id/comments'>
          {/* A Post Component holds Select Comments, or PostItems */}
          <Post currentUser={currentUser}/>
        </Route>
        <Route exact path='/myprofile'>
          <Profile currentUser={currentUser}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
