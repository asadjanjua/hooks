import React from 'react'
import State from './components/State'
import Effect from './components/Effect'
import Ref from './components/Ref'
import Memo from './components/Memo'
import Reducer from './components/Reducer'
import Back from './components/Back'
import Layout from './components/Layout'
import Id from './components/Id'

const App = () => {
  return (
    <div>
      <State/>
      <Effect/>
      <Ref/>
      <Memo/>
      <h1>Reducer</h1>
      <Reducer/>
      <Back/>
      <Layout/>
      <Id/>
    </div>
  )
}

export default App