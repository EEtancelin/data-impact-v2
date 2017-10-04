import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';

// Components
import Matching from '../components/Matching';

function NextArrow(props) {
  const {className, onClick} = props
  return (
    <div
      className=" slick-next arrow"
      style={{ display: 'block'}}
      onClick={onClick}
    >
    </div>
  );
}

function PrevArrow(props) {
  const {className, onClick} = props
  return (
    <div
      className=" slick-prev arrow left"
      style={{ display: 'block'}}
      onClick={onClick}
    >
    </div>
  );
}




class MatchingList extends React.Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <Slider className="container mt-l" {...settings}>
        {this.props.products.map(product =>
          <div><Matching product={product} /></div>
        )}
      </Slider>
    );
  }
}

// Component connection
function mapStateToProps(state) {
  console.log(state);
  return {
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, null)(MatchingList);
