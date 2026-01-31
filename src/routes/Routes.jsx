import { createBrowserRouter, Outlet } from 'react-router-dom'; // ১. Outlet ইমপোর্ট করুন
import Root from '../layout/Root';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Awards from '../pages/Awards';
import Login from '../pages/Login';
import Register from '../pages/Registar';
import PrivateRoute from '../routes/PrivateRoutes';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {

                element: (
                    <PrivateRoute>
                        <Outlet /> 
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: '/about',
                        element: <About />
                    },
                    {
                        path: '/awards',
                        element: <Awards />
                    },
                ]
            }
        ]
    }
]);

export default Routes;