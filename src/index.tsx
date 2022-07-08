import ReactDOM from 'react-dom/client';
import './index.module.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Rotas } from './routes/routes'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Rotas />
  </BrowserRouter>
);
reportWebVitals();
