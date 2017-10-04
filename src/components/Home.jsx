import React from 'react';

// Components
import Navbar from './Navbar';
import Product from './Product';
import MatchingList from '../containers/MatchingList';

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <Product />
      <MatchingList />
    </div>
  );
};
export default Home;
