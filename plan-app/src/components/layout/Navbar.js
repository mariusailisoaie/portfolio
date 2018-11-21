import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { authStatus, profile } = props;

  const links = authStatus.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">ProjectManager</Link>

          { links }
        </div>
      </nav>
    </div>
  )
}

const mapPropsToState = state => {
  console.log(state);
  return {
    authStatus: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapPropsToState)(Navbar);