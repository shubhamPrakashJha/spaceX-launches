import React from 'react';
import PropTypes from 'prop-types';
import { SiteHeader, SiteSidebar, SiteFooter } from '../../organisms';
import { MainSection } from '../../molecules';

function Layout({
  children,
  title = '',
}) {
  return (
    <>
      <SiteHeader title={title}/>
      <MainSection>
        <div>
          <div >
            <SiteSidebar />
            <div>
              {children}
            </div>
          </div>
        </div>
      </MainSection>
      <SiteFooter />
    </>
  );
}

Layout.propTypes = {
  showSidebar: PropTypes.bool,
  children: PropTypes.any,
  url: PropTypes.string,
  images:PropTypes.array,
  title: PropTypes.any,
  description: PropTypes.string
};

export default Layout;