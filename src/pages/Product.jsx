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
import Slider from '../components/Slider';
import CategorySlider from '../components/CategorySlider';
import ProductSidebar from '../components/ProductSidebar';

function Product() {
  return (
<>
  <Slider />
   <CategorySlider />
   <ProductSidebar />
   

   
</>

  );
}

export default Product;
