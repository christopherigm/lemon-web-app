import React from 'react';
import CategoriesMenu from 'src/modules/nav-bar/categories-menu';

const SideMenu = ( props: any ): React.ReactElement => {
  return (
    <ul
      className='sidenav grey darken-4'
      id='mobile-demo'
      ref={props.sideNavRef}
      onClick={props.closeSideNav}>
      <CategoriesMenu items={props.categories.data}/>
    </ul>
  );
};

export default SideMenu;
