import logo from './assets/logo.png';
import bg from './assets/header-bg.png';
import './Header.css';

function Header() {
    const styles = {
        header: {
            backgroundImage: `url(${bg})`,
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0px 4px 4px #a8a8a8',
            height: '100px'
        },
        headerNavText: {
            color: '#1A7ADE',
            fontFamily: '"Poppins", sans-serif',
            display: 'flex',
            listStyleType: 'none',
            padding: 0,
            margin: 0
        },
        headerNavItem: {
            marginLeft: '20px',
            cursor: 'pointer',
        },
        headerText: {
            color: '#1A7ADE',
            fontFamily: '"Poppins", sans-serif',
            margin: 0,
            position: 'relative',
            left: '-10%'
        },
        headerImage: {
            width: '480px',
            height: '200px',
            position: 'relative',
            left: '-20%'
        }
    };

    return (
        <div className="header" style={styles.header}>
            <div className="header__logo">
                <img src={logo} alt="logo" style={styles.headerImage} />
            </div>
            <h1 style={styles.headerText}>Tech to Empower</h1>
            <div className="header__nav">
                <nav>
                    <ul style={styles.headerNavText}>
                        <li style={styles.headerNavItem} className='headerNavItem'><a>The Team</a></li>
                        <li style={styles.headerNavItem} className='headerNavItem'><a>Initiatives</a></li>
                        <li style={styles.headerNavItem} className='headerNavItem'><a>Get Involved</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
