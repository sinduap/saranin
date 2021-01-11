import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';
import logo from './saranin-logo.png';

const renderContent = auth => {
  switch (auth) {
    case null:
      return null;
    case false:
      return (
        <li>
          <a href='/auth/google'>Login with Google</a>
        </li>
      );
    default:
      return [
        <li key={1} style={{ margin: '0 1rem' }}>
          <div className='btn grey'>Credit: {auth.credits}</div>
        </li>,
        <li key={2}>
          <Payments />
        </li>,
        <li key={3}>
          <a href='/api/logout' className='btn red'>
            Logout
          </a>
        </li>,
      ];
  }
};

const Header = ({ auth }) => {
  return (
    <nav>
      <div className='light-blue darken-4 nav-wrapper'>
        <Link to={auth ? '/surveys' : '/'} className='left brand-logo'>
          <div style={{ height: 'auto', marginLeft: '1rem' }}>
            <img
              src={logo}
              alt='saranin'
              style={{ maxHeight: '3rem', marginTop: '0.5rem' }}
            />
          </div>
        </Link>
        <ul id='nav-mobile' className='right'>
          {renderContent(auth)}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
