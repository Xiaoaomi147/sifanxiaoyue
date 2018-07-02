/*
 * @Author: shifan
 * @Date: 2018-06-05 17:43:01
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-19 09:49:58
 * @功能: {}
 */

import React from 'react';
import { Switch , Route , Redirect} from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/page/Header/index';
import NotFoundPage from './components/NotFoundPage';
import 'normalize.css';
import './styles/commn/commnStyles.css';
    const Main = () => (
        <main>
          <Switch>
            <Route path='/' exact render={()=> true ? (<Redirect to={{pathname: '/Home'}}/>) : (<Redirect to={{pathname: '/Login'}}/>)}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Home' component={Home}/>
            <Route path="*" component={NotFoundPage} />
          </Switch>
          
        </main>
      )
    const App = () => (
        <div>
            <Main />
        </div>
      )
export default App;