import React from 'react';
import NavbarA from './component/NavbarA/NavbarA';
import FooterA from './component/FooterA/FooterA';

const PublicLayout = ({children, ...rest}) => {
    return (
      <div className="page page-login">
        <NavbarA />
        <div className="container-fluid">
          <div className="area-home"></div>
          <div>{children}</div>
        </div>
        <FooterA/>
        {/* <Footer /> */}
      </div>
    )
  }

export default PublicLayout;