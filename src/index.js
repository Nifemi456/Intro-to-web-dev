import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "../src/components/app/App";
import reportWebVitals from './reportWebVitals';
import Main from './components/Main/Main';
import MyForm from './components/Form/Form';
import NoPage from "./components/NoPage/NoPage";
import Api from './components/Api-content/Api-content';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>

      <Route path="/" element={<App />}>

        <Route index element={<Main />} />
        <Route path="form" element={<MyForm />} />
        <Route path='api' element={<Api />} />
        <Route path="*" element={<NoPage />} />


      </Route>

    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
