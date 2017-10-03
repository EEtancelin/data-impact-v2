import React from 'react';
import { Image } from 'semantic-ui-react'

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

const Product = (props) => (
  <div className="h-f fx-ac fx-fs">
    <div className="blue">
      <Image src='http://ouionatousledroitdebienmanger.fr/img/bleublanccoeur/produits/200/Casino-Jambon-superieur.jpeg'
       className='match-thumbnail'/>
    </div>
    <div className="">
      {Attribute('Marque', 'Casino')}
      {Attribute('Cat. ensg.', 'Fraicheur | Produit de la mer')}
      {Attribute('Ean', '1121212121222112121')}
      {Attribute('Ref. ensg.', '721712892')}
    </div>
  </div>
)
export default Product ;
