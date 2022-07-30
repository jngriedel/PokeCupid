import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import { ChatModalProvider } from './context/ChatModal';
import { MatchModalProvider } from './context/MatchModal';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <MatchModalProvider>
      <ModalProvider>
        <ChatModalProvider>
          <App />
        </ChatModalProvider>
      </ModalProvider>
     </MatchModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
