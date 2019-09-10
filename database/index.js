import React from 'react';
import ReactDOM from 'react-dom';
import '/public/CSS/style.css';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.css';
import ChatPage from '/views/components/ChatPage';

ReactDOM.render(<ChatPage />, document.getElementById('root'));
