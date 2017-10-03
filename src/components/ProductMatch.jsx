import React from 'react'
import { Card, Icon, Button, Image } from 'semantic-ui-react'

const Attribute = (attr, value) => {
  return (
    <div className='mb-s'>
      <span className= 'fw-m'>
        {attr} :
      </span>
      <span className='ml-s'>
        {value}
      </span>
    </div>
  )
}

const MatchingBadge =(value) => {
  return(
    <div
      className="absolute badge"
      style={{backgroundColor: value > 50 ? '#2ecc71' :  '#e74c3c'}}>
      {value}%
    </div>
  )
}

const ProductMatch = (props) => (
  <Card className="relative">
    <Image src='http://ouionatousledroitdebienmanger.fr/img/bleublanccoeur/produits/200/Casino-Jambon-superieur.jpeg'
     className='match-thumbnail fx-r-sa'/>
    <Card.Content>
      {MatchingBadge(props.product.matching)}
      <Card.Header>
        Miette Surimi 200g
      </Card.Header>

      <Card.Description>
        {Attribute('Marque', props.product.marque)}
        {Attribute('Cat. ensg.',props.product.catEnsg)}
        {Attribute('Ean',props.product.ean)}
        {Attribute('Ref. ensg.', props.product.refEnsg)}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Match</Button>
        </div>
    </Card.Content>
  </Card>
)

export default ProductMatch
