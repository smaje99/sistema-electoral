import { render } from 'react-dom';

import { $ } from './utils/dom';

import 'normalize.css';
import './styles/index.css';

import App from './App';

render(<App />, $('#app'));