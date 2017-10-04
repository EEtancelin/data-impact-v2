import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Icon, Button, Image } from 'semantic-ui-react'

const Attribute = (attr, value) => {
  return (
    <div className='mb-xs'>
      <span className= 'ft-wb'>
        {attr} :
      </span>
      <span className='ml-s'>
        {value}
      </span>
    </div>
  )
}

class Product extends React.Component {
  render () {
    const product = this.props.product;
    console.log(product);
    return (
      <div className='container'>

        <div className='row mt-s'>
              <Image src={product.nomvignette}
               className=' col-md-3 match-thumbnail'/>
               <div className="col-md-6 fx-c-sb" >
                <div className="product-title mb-s" >
                  <h3 className='product-title'> {product.libelle} </h3>
                </div>
               <div className="fx-r-sa" >
                 <div >
                   {Attribute('Marque', product.marque)}
                   {Attribute('Ean', product.ean)}
                   {Attribute('Packaging', product.packaging)}
                 </div>
                 <div >
                  {Attribute('Ref. ensg.', product.refproduitenseigne)}
                 {Attribute('Ref. pdt', product.refproduit)}
                  {Attribute('Cat. ensg.', product.categorieenseigne)}
                 </div>
              </div>
               </div>

            <div className="col-md-3">
            
            </div>
            </div>
          </div>
    );
  }
}

// Component connection
  function mapStateToProps(state, ownProps) {
    return {
      product: state.products[0]
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProducts }, dispatch);
  }

export default connect(mapStateToProps, null)(Product);
