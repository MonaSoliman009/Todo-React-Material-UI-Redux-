
import { Provider } from 'react-redux'
import './App.css'
import ToDo from './views/to-do'
import store from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>

        <ToDo />
      </Provider>

    </>
  )
}

export default App
