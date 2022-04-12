import '../App.css'
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Profile from './Profile';
import CreatePost from './CreatePost';
import Edit from './EditPost';

import Subforum from './Subforum';
import Post from './Post';

function App() {
  const [postArray, setPostArray] = useState([])

  function onDelete(id) {
    const deletePost = postArray.filter(postObj => postObj.id !== id)
    setPostArray(deletePost)
  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Subforum postArray={postArray} setPostArray={setPostArray} onDelete={onDelete}/>
        </Route>
        <Route exact path='/posts/:post_id/comments'>
          <Post />
        </Route>
        <Route path='/create'>
          <CreatePost postArray={postArray} setPostArray={setPostArray}/>
        </Route>
        <Route path='/edit'>
          <Edit />
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
