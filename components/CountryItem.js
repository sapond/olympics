import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class CountryItem extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { name, gold, silver, bronze } = this.props
    return (
      <li>
          <span>{name}</span>
          <span>Gold: </span>
          <span>{gold}</span>
          <span>Siver: </span>
          <span>{silver}</span>
          <span>Bronze: </span>
          <span>{bronze}</span>
      </li>
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
