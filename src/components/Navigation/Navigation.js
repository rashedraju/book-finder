import { useLocation } from 'react-router-dom';
import { Link, Nav } from './Navigation.styled';

const Navigation = () => {
    const location = useLocation();
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/" active={location.pathname === '/' ? 1 : 0}>
                        Home{' '}
                    </Link>
                </li>
                <li>
                    <Link to="/explore" active={location.pathname === '/explore' ? 1 : 0}>
                        {' '}
                        Explore{' '}
                    </Link>
                </li>
                <li>
                    <Link to="/myshelf" active={location.pathname === '/myshelf' ? 1 : 0}>
                        {' '}
                        My Shelf{' '}
                    </Link>
                </li>
            </ul>
        </Nav>
    );
};

export default Navigation;
