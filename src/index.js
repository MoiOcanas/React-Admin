import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Router
import { HashRouter as Router, Route } from 'react-router-dom';

//Styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Components
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Nav from './components/Nav';

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <div>
            <Nav />
            <Route path={process.env.PUBLIC_URL + '/'} component={App} />
            <Route path={process.env.PUBLIC_URL + '/edit/:id'} component={Edit} />
            <Route path={process.env.PUBLIC_URL + '/create'} component={Create} />
            <Route path={process.env.PUBLIC_URL + '/show/:id'} component={Show} />
        </div>
    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();
