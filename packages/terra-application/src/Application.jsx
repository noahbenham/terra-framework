import React from 'react';
import PropTypes from 'prop-types';
import NavigationLayout from 'terra-navigation-layout';


const propTypes = {
  todo: PropTypes.string,
};

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <NavigationLayout
        menuText="Application Menu"
      />
    );
  }
}

Application.propTypes = propTypes;

export default Application;
