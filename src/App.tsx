import './App.css'
import Header from './layouts/Header'
import Main from './layouts/Main'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  )
}

export default App;