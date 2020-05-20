import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'foundation-sites/dist/css/foundation.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('root'));
registerServiceWorker();
