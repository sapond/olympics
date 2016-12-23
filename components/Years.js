import React, {Component, PropTypes } from 'react'


class Years extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const content = this.props.years.map((year, index) =>
        <a key={index} href="#">{year}</a>) 
    return (<div className="years">{content}</div>)
  }
}

Years.propTypes = {
  years: PropTypes.array.isRequired
}

export default Years
