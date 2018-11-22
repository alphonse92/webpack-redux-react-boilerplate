import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import Bootstrap from './bootstrap';
import RoutesBootstrap from './routes';

// import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(<Bootstrap routes={RoutesBootstrap}></Bootstrap>, document.getElementById('app'));