import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

const weightValidation = (props, propName, componentName) => {
  if (props[propName] === undefined) {
      return new Error('The `weight` prop is required.');
  }

  const weight = parseInt(props[propName]);

  if (isNaN(weight)) {
    return new Error('The `weight` prop is not a number.');
  }

  if (weight < 80 || weight > 300 || props[propName] === undefined || isNaN(weight)) {
    return new Error('Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.')
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightValidation
}


export default Product;
