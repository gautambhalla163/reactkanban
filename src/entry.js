/**
 * Created by root on 23/12/16.
 */

import React from 'react';
import { render } from 'react-dom';
import { Router,Route,IndexRoute,browserHistory} from 'react-router';
import { provider } from 'react-redux';
import { Main } from './components/Main';
import {model} from './model/tasklist.json';

import store,{ history } from './store';


const router=(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={List}/>
            </Route>
        </Router>
    </Provider>
);

 // var MyComponent = React.createClass({
	//       render: function() {
	//         return <div>Hello World</div>;
	//       }
	//     });

render(router, document.getElementById('root'));