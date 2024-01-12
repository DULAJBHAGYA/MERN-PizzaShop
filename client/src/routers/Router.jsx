import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Promos from '../pages/Promos';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/about', element: <About/>},
            {path: '/menu', element: <Menu/>},
            {path: '/promos', element: <Promos/>},
            {path: '/contact', element: <Contact/>},
        ]
    },
]);

export default router;