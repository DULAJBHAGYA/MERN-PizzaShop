import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Promos from '../pages/Promos';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import Users from '../adminPages/Users';
import AddFood from '../adminPages/AddFood';
import AddCategory from '../adminPages/AddCategory';
import AdminOrder from '../adminPages/AddCategory';
import AdminDelivery from '../adminPages/AddCategory';
import AdminFeedback from '../adminPages/AddCategory';


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

            {path: '/admin', element: <Admin/>},
            {path: '/admin/users', element: <Users/>},
            {path: '/admin/addcategory', element: <AddCategory/>},
            {path: '/admin/addfood', element: <AddFood/>},
            {path: '/admin/orders', element: <AdminOrder/>},
            {path: '/admin/deliveries', element: <AdminDelivery/>},
            {path: '/admin/feedback', element: <AdminFeedback/>},


        ]
    },
]);

export default router;