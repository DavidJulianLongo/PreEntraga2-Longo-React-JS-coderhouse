import { CartWidget } from "../CartWidget/CartWidget";
import { LogoComponent } from '../LogoComponent/LogoComponent';
import { Link } from 'react-router-dom';
import { NavItem } from '../NavItem/NavItem';
import './NavBar.css';


export const NavBar = () => {
    const models = ['motorola razr', 'motorola edge', 'moto g', 'moto e'];

    return (
        <>
            <nav className="nav">
                <div className='logo-container'>
                    <Link to={'/'}>
                        <LogoComponent imgSrc='/src/assets/img/header/mlogo-black.png' text='M-park' />
                    </Link>
                </div>
                <div className="navbar">
                    <ul className="products-list">
                        {models.map((model, index) => (
                            <Link to={`/category/${model}`} key={index}>
                                <NavItem text={model} />
                            </Link>
                        ))}
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
};



