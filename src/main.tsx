import ReactDOM from 'react-dom/client';
import AppRouter from './presentation/Router/AppRouter';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as Element);
root.render(<AppRouter />);

reportWebVitals(console.log);
