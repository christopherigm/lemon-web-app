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
  if ( !categoryParameter ) return <div className='white-text'>Error de categoria</div>;
  const categoryResults = categories.data ?
    categories.data.filter((i: any) => i.attributes.slug === categoryParameter) :
    null;
  if ( !categoryResults.length ) return <div className='white-text'>Error de categoria</div>;
  const category = categoryResults[0];

  return (
    <>
      <NavBar />
      <HorizontalSpace size='large' />
      <div className='white-text'>
        Categoria {category.attributes.title}
      </div>
      <HorizontalSpace size='large' />
      <Footer />
      <SystemCheck />
    </>
  );
};

export default CategoryDetail;
