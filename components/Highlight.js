import React, { Component, PropTypes } from 'react'
import Medals from './Medals'

class Highlight extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {countries} = this.context.store.getState();
    const {selected} = countries;
    if (!selected) return <div className="highlight"></div>;
    return  ( 
        <div className={this.props.className}>
          <div>
            <h1>{selected.name}</h1>
            <p>Gold: {selected.gold}</p>
            <Medals gold qty={selected.gold} />
            <p>Silver: {selected.silver}</p>
            <Medals silver qty={selected.silver} />
            <p>Bronze: {selected.bronze}</p>
            <Medals bronze qty={selected.bronze} />
          </div>
        </div>
    );
  }
}

Highlight.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.object
}

Highlight.contextTypes = {
  store: PropTypes.object.isRequired
}

export default Highlight
