import React, { Component, PropTypes } from 'react'
import Country from './CountryItem'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { countries } = this.props

    return (
      <section className="main">
        <ul className="country-list">
          {countries.map(country =>
            <Country name={country.name}
                     key={country.name}
                     gold={country.gold}
                     silver={country.silver}
                     bronze={country.bronze} />
          )}
        </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  countries: PropTypes.array.isRequired
}

export default MainSection
