import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div className='flex flex-col min-h-screen justify-between'>
            <div>
                <Header />
                <Outlet />
            </div>
            <Footer />

        </div>
    );
};

export default Root;