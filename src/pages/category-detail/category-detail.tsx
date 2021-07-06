import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import Footer from 'src/modules/footer/footer';

const CategoryDetail = (): React.ReactElement => {
  const categories = useSelector((state: any) => state.categories);
  const params: any = useParams();
  const categoryParameter = params.category || null;

  return (
    <>
      <NavBar />
      <HorizontalSpace size='large' />
      <div className='white-text'>
        Categoria {categoryParameter}{categories.length}
      </div>
      <HorizontalSpace size='large' />
      <Footer />
      <SystemCheck />
    </>
  );
};

export default CategoryDetail;
