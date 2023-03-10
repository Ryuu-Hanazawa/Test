import './App.css'
import Router from './router/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router />
      </PersistGate>
    </Provider>
  )
}

export default App
