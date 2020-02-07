import React from 'react';


// eslint-disable-next-line react/prefer-stateless-function
const LeftNav = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <aside className="container__box">
    <div className="dotted__box">
      <div className={`dots ${window.location.pathname === '/' ? 'fa' : 'far'} fa-circle  fa-1x`} />
      <div className={`dots ${window.location.pathname.indexOf('products') !== -1 ? 'fa' : 'far'} fa-circle  fa-1x`} />
      <div className={`dots ${window.location.pathname.indexOf('cart') !== -1 ? 'fa' : 'far'} fa-circle  fa-1x`} />
      <div className={`dots ${window.location.pathname.indexOf('checkout') !== -1 ? 'fa' : 'far'} fa-circle  fa-1x`} />
      <div className={`dots ${window.location.pathname.indexOf('contact-us') !== -1 ? 'fa' : 'far'} fa-circle  fa-1x`} />
      <div className={`dots ${window.location.pathname.indexOf('about-us') !== -1 ? 'fa' : 'far'} fa-circle  fa-1x`} />
    </div>
  </aside>
);

export default LeftNav;
