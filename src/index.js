import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Assets/styles/main.scss';
import App from './App';
import ReactGA from 'react-ga4';

const TRACKING_ID = '1';//process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
	<React.StrictMode>
		<MemoryRouter>
			<App />
		</MemoryRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
