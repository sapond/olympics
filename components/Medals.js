import React, {Component, PropTypes } from 'react'
import BronzeImg from '../img/bronze.png';
import SilverImg from '../img/silver.png';
import GoldImg from '../img/gold.png';


class Medals extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let medalImg;
    if ('gold' in this.props) medalImg = GoldImg;
    if ('silver' in this.props) medalImg = SilverImg;
    if ('bronze' in this.props) medalImg = BronzeImg;

    const lis =
        Array(this.props.qty).fill(null).map(
            (k, i) => <li key={i}><img src={medalImg} /></li>);
    return (
      <ul className="medals">{lis}</ul>
    )
  }
}

Medals.propTypes = {
  gold: PropTypes.bool,
  silver: PropTypes.bool,
  bronze: PropTypes.bool,
  qty: PropTypes.number
}

export default Medals
