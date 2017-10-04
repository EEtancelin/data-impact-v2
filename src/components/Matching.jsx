import React from 'react'
import { Card, Icon, Button, Image } from 'semantic-ui-react'

// Components

const Attribute = (attr, value) => {
  return (
    <div className='mb-xxs'>
      <span className= 'ft-wb'>
        {attr} :
      </span>
      <span className='ml-s'>
        {value}
      </span>
    </div>
  )
}


const Matching = (props) => {
  const product = props.product;
  return (
    <Card className='matching'>
      <Card.Content>
        <Image size='mini' src={product.nomvignette} />
        <Card.Header className='mt-xs'>
          {product.libelle}
        </Card.Header>
        <div className="mt-xs" >
        </div>
        {Attribute('Marque', product.marque)}
        {Attribute('Ean', product.ean)}
        {Attribute('Packaging', product.packaging)}
        {Attribute('Marque', product.marque)}
        {Attribute('Ean', product.ean)}
        {Attribute('Packaging', product.packaging)}

      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Match</Button>
          <Button basic color='red'>UnMatch</Button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default Matching;
