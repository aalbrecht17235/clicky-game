import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="www.espn.com">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            Bootstrap
            </a>
        </nav>
    );
  }
}
