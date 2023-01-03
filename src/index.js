import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "swiper/css/bundle";
import './styles/global.css'
import commerce from './lib/commerce';

console.log(commerce
)
const container = document.getElementById('root');

const root = createRoot(container)

root.render(<><BrowserRouter><App /></BrowserRouter></>)