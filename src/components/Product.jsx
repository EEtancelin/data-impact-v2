import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Icon, Button, Image } from 'semantic-ui-react'

const Attribute = (attr, value) => {
  return (
    <div className='mb-s'>
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
      <Card className="m-s mh-l">
            <Image src='http://ouionatousledroitdebienmanger.fr/img/bleublanccoeur/produits/200/Casino-Jambon-superieur.jpeg'
             className='match-thumbnail'/>
          <Card.Content>
            {Attribute('Marque', product.marque)}
            {Attribute('Cat. ensg.', product.categorieenseigne)}
            {Attribute('Ean', product.ean)}
            {Attribute('Ref. ensg.', product.refproduitenseigne)}
          </Card.Content>
      </Card>
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
