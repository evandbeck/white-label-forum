import '../App.css'
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Forum from './Forum';
import Profile from './Profile';
import Create from './Create';

import Subforum from './Subforum';
import Post from './Post';

function App() {
  const [postArray, setPostArray] = useState([])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Subforum postArray={postArray} setPostArray={setPostArray}/>
        </Route>
        <Route path='/posts/:post_id/comments'>
          <Post />
        </Route>
        <Route path='/create'>
          <Create postArray={postArray} setPostArray={setPostArray}/>
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
