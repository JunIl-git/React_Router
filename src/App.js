import React from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import About from'./Router/About';
import Home from './Router/Home';
import Profile from './Router/Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about?detail=true">소개</Link>
        </li>
        <li>
          <Link to="/profiles"> 프로필</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path={["/about","/info"]} component={About}></Route>
        <Route path="/profiles" component={Profile}></Route>
        {/* <Route render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다:</h2>
            <p>{location.pathname}</p>
          </div>
        )}/> */}
        <Redirect path="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
