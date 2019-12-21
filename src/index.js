import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";   // Here in createStore we are storing a new state that is provided by reducer. 
                                        //In simple words it holds the data that we recive from reducer and distribute it 
                                      // among the App and its components.
import reducers from "../src/Reducers/reducers";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Provider store={createStore(reducers)}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
