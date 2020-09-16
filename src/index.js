import './index.html';
import ReactDOM from 'react-dom';
import { StrictMode, createElement, } from 'react';
import App from './pages/App';

ReactDOM.render(<StrictMode>{ App }</StrictMode>, /* container */ window.app);