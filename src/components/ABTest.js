import React, { Component } from 'react';
import PropTypes from 'prop-types';
import optimizely from '../helpers/optimizely';
import _ from 'lodash';



class ABTest extends Component {
  constructor(props, context) {
  	super(props, context)
  	if (!props.name) console.log('No ABtest name provided'); 

    // Mocking a different user on every render of the component. This should be keyed to the
    // Session ID and shouldn't change between re-renders. Ideally it would be fetched from the 
    // store so that unmounting would still keep the userId
    const userId = _.random(0, 1000).toString();

  	this.variationKey = optimizely.activate(props.name, userId);
  }

  render() {
  	const { props } = this;
    if (!this.variationKey) {
      console.log(`No Variation found for ABTest ${props.name}, Check that Optimizely has a running test called ${props.name} and than you've updated optimizely.json`)  
      return null;
    }

    const maybeComponent = _.get(props.variations, this.variationKey, null);
    
    
    if (maybeComponent) {
      return maybeComponent;
    } else {
      console.log(`No Variation '${this.variationKey}' found for ABTest ${props.name}, ABTest component wasn't passed a variant with the correct key`)  
      return null;
    }
  }

}

ABTest.propTypes = {
  name: PropTypes.string,
  variations: PropTypes.object,
};

export default ABTest;