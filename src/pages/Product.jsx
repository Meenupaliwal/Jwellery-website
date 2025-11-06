// ✅ All imports must be at the top
import React from 'react';

import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styles.css';
import '../css/animate.css';
import '../icon/icomoon/style.css';


// Components
import CategorySlider from '../components/CategorySlider';
import ProductSidebar from '../components/ProductSidebar';
import PageTitleImage from '../components/PageTitleImage';

function Product() {
  return (
<>
 <PageTitleImage
  title="OUR EXCLUSIVE COLLECTION"
  subtitle="JEWELLERY THAT DEFINES YOU"
  image="images/Gold-jwellery/slider-24.jpg"
  buttonText="Shop Now"
  buttonLink="/product"
/>

   <CategorySlider />
   
   <ProductSidebar />
   

   
</>

  );
}

export default Product;
