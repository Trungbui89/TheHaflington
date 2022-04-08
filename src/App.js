import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConfigureStore } from './store/reducer/configureStore';
import Main from './components/MainComponent';
import './css/root.css';
import './App.css';
import './css/forMobile.css';

const store = ConfigureStore()

function App()  {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;