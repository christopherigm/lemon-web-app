import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import Footer from 'src/modules/footer/footer';
import Posts from 'src/modules/post-item/posts';

const Home = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <HorizontalSpace size='large' />
      <Posts/>
      <Footer />
      <SystemCheck />
    </>
  );
};

export default Home;
