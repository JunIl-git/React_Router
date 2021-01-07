import React from 'react';
import {Route, Link} from 'react-router-dom';
import About from'./Router/About';
import Home from './Router/Home';
import Profile from './Router/Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about?defail=true">소개</Link>
        </li>
        <li><Link to="/profile/junil">junil 프로필</Link></li>
        <li><Link to="/profile/gildong">gildong 프로필</Link></li>
      </ul>
      <hr/>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path={["/about","/info"]} component={About}></Route>
      <Route path="/profile/:username" component={Profile}></Route>
    </div>
  );
}

export default App;
