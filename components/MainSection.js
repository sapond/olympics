import React, { Component, PropTypes } from 'react'
import Country from './CountryItem'
import Years from './Years'
import Highlight from './Highlight'
import ActionTypes from '../constants/ActionTypes'
import {GridList, GridTile} from 'material-ui/GridList';


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { countries, actions, selected } = this.props
    const { highlightCountry } = actions;
    const years = [2016, 2012];
    return (
      <section className="main">
        <Years years={years}></Years>
        <GridList className="country-list"
            cols={5}
            padding={1}>
          {countries.countries.map(country =>
            <Country
                     onCountryMouseover={() => actions.selectCountry(country)}
                     onCountryMouseout={() => actions.selectCountry(null)}
                     name={country.name}
                     key={country.name}
                     gold={country.gold}
                     silver={country.silver}
                     bronze={country.bronze} />
          )}
        </GridList>
        <Highlight className="highlight" selected={countries.selected}></Highlight>
      </section>
    )
  }
}

MainSection.propTypes = {
  countries: PropTypes.object.isRequired
}

export default MainSection
