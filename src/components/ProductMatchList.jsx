import React from 'react';
import ProductMatch from '../productMatch/ProductMatch.jsx'

const ProductMatchList = (props) => {
  return (
    <div className="fx-sa fx-wrap mt-m">
      { props.products.map( product => {
        return (
          <ProductMatch product={product}/>
        )
      })}
    </div>
  )
};

export default ProductMatchList;
