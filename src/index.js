import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import './index.css';
import CardList from './CardList';
import Card from './Card';
import { giraffes } from './giraffes';

ReactDOM.render( <CardList giraffes={giraffes} /> , document.getElementById("root"));

reportWebVitals();