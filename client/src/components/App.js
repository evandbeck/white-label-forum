import '../App.css'
import React, { useState } from 'react'
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
  const [postArray, setPostArray] = useState([])

  function handleNewPost(newPost) {
    setPostArray((postArray) => [...postArray, newPost]);
  }

  function handleUpdatePost(updatedPost) {
    const updatedPosts = postArray.map((postObj) => {
      if (postObj.id === updatedPost.id) {
        return updatedPost;
      } else {
        return postObj;
      }
    });
    setPostArray(updatedPosts)
  }

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
          {/* A Forum Component holds Select Posts, or SubforumItems */}
          <Forum />
        </Route>
        <Route exact path='/subforums/:subforum_id/posts'>
          {/* A Subforum Component holds Select Posts, or SubforumItems */}
          <Subforum postArray={postArray} setPostArray={setPostArray} handleNewPost={handleNewPost} handleUpdatePost={handleUpdatePost} onDelete={onDelete}/>
        </Route>
        <Route exact path='/posts/:post_id/comments'>
          {/* A Post Component holds Select Comments, or PostItems */}
          <Post />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
