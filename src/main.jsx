import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './pages/Layout/Layout.jsx'
import { BrowserRouter } from 'react-router-dom';
import "./styles/index.sass"
import { store } from "./reducers";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Provider>
)
