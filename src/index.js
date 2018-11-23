import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import Bootstrap from './bootstrap';
import RoutesBootstrap from './routes';

// import global styles
import globalcss from './styles.global.css';
import styles from './styles.global.sass'
import styles2 from './styles.global.scss'

render(<Bootstrap routes={RoutesBootstrap}></Bootstrap>, document.getElementById('app'));