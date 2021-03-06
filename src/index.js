import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './components/App'; 
import {StateProvider} from './stateProvider/StateProvider';
import reducer, {initialState} from './stateProvider/reducer';
ReactDOM.render(

<StateProvider initialState = {initialState} reducer={reducer}>
  <App/> 
</StateProvider>
, document.querySelector('#root'))