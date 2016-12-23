import React, {Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import classnames from 'classnames'
import { GridTile } from 'material-ui/GridList'
import Flag from "react-flags"


class CountryItem extends Component {
  constructor(props, context) {
    super(props, context)
  }

   componentDidMount() {
    const img = ReactDOM.findDOMNode(this);
   img.addEventListener('mouseover', this.props.onCountryMouseover)
   img.addEventListener('mouseout', this.props.onCountryMouseout)
  }

  componentWillUnmount() {
    const img = ReactDOM.findDOMNode(this);
    img.removeEventListener('mouseover', this.props.onCountryMouseover)
    img.removeEventListener('mouseout', this.props.onCountryMouseout)
  }

  render() {
    const { name, gold, silver, bronze } = this.props
    const countryCode = /\(([^)]+)\)/.exec(name)[1]
    return (
      <GridTile>
        <Flag pngSize={64} format="png" name={countryCode}></Flag>
      </GridTile>
    )
  }
}

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
  gold: PropTypes.number.isRequired,
  silver: PropTypes.number.isRequired,
  bronze: PropTypes.number.isRequired
}

export default CountryItem
