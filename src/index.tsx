import ReactDOM from 'react-dom/client';
import './index.module.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import { Rotas } from './routes/routes'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Rotas />
  </BrowserRouter>
);
reportWebVitals();
