import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Forum from './Forum';
import Profile from './Profile';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route path='/forum'>
          <Forum />
        </Route>
        <Route>
          <Profile path='profile'/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
