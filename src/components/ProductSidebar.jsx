import React from "react";
import SidebarFilter from "./SidebarFilter";
import ShopControl from "./ShopControl";
import ArtificialJewelleryBox from "./ArtificialJewelleryBox";

const ProductSidebar = () => {
  return (
    <div className="flat-spacing-3 pb-0">
      <div className="container">
        <div className="row">
          <SidebarFilter />
          <div className="col-xl-9">
            <ShopControl />
            <ArtificialJewelleryBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
