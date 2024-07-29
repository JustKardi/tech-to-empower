import logo from './assets/logo.png';

function Header() {
    const styles = {
        header: {
            backgroundColor: '#030303',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0px 4px 4px #020202'
        },
        headerNavText: {
            color: '#1A7ADE',
            fontFamily: '"Comfortaa", sans-serif',
            display: 'flex',
            listStyleType: 'none',
            padding: 0,
            margin: 0
        },
        headerNavItem: {
            marginLeft: '20px'
        },
        headerText: {
            color: '#1A7ADE',
            fontFamily: '"Comfortaa", sans-serif',
            margin: 0,
            textAlign: 'center'
        },
        headerImage: {
            width: '70px',
            height: '70px'
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
                        <li style={styles.headerNavItem}>Services</li>
                        <li style={styles.headerNavItem}>About</li>
                        <li style={styles.headerNavItem}>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
