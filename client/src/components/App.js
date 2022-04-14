import '../App.css'
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Profile from './Profile';
import CreatePost from './CreatePost';
import Edit from './EditPost';
import Login from './Login';
import Signup from './Signup';

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
          <Subforum postArray={postArray} setPostArray={setPostArray} handleUpdatePost={handleUpdatePost} onDelete={onDelete}/>
        </Route>
        <Route exact path='/posts/:post_id/comments'>
          <Post />
        </Route>
        <Route path='/create'>
          <CreatePost postArray={postArray} setPostArray={setPostArray} handleNewPost={handleNewPost}/>
        </Route>
        <Route path='/edit'>
          <Edit />
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
