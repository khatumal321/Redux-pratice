import React from 'react';
import BasicRouter from './Config/Router'
import Appbar from './component/Appbar'
import {Provider} from 'react-redux'
import Store from './Store'

export default class App extends React.Component {
  render(){
  return (
    <div>
      <Provider store={Store}>
      <Appbar/>
      <BasicRouter/>
      </Provider>
    </div>
  )
}
}


