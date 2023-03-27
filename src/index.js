import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './Login';
import Memories from './Memories';
import ToDoLibrary from './ToDoLibrary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route exact path = "/" element={<Home />}></Route>

        <Route path = "/todos" element={<ToDoLibrary/>}></Route>

        <Route path = "/login" element={<Login/>}></Route>

        <Route path="/memories" element={<Memories/>}></Route>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
