import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import Context from './context/context.js';

ReactDOM.render(<Context><App /></Context>, document.getElementById('root'))