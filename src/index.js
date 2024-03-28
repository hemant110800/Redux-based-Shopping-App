import ReactDOM from 'react-dom/client';
import { storeItems } from './store/index';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={storeItems}><App /></Provider>);
