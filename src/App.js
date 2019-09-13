import React from 'react';
import BasicRouter from './Config/Router'
import Appbar from './component/Appbar'
import {Provider} from 'react-redux'
import Store from './Store'

export default class App extends React.Component {
  constructor(){
    super()
  }
  render(){
  return (
    <div>
      <Provider store={Store}>
      <Appbar/>
      <h1>hello</h1>
      <BasicRouter/>
      </Provider>
    </div>
  )
}
}

