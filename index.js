import React from 'react';
import ReactDOM from 'react-dom';
import RootIndex from './app/components/rootIndex.jsx';
import HorseIndex from './app/components/horseIndex.jsx';

document.getElementById('root') ? ReactDOM.render(<RootIndex />, document.getElementById('root')) : null;
document.getElementById('horseContainer') ? ReactDOM.render(<HorseIndex />, document.getElementById('horseContainer')) : null;