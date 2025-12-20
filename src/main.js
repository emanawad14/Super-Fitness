import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './App/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './App/Navbar';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsxs(BrowserRouter, { children: [_jsx(Navbar, {}), _jsx(App, {}), _jsx(Footer, {})] }) }));
