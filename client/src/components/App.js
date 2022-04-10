import '../App.css'
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Forum from './Forum';
import Profile from './Profile';

import Subforum from './Subforum';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route path='/'>
          <Forum />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
      <Subforum />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
