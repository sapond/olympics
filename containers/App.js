import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as CountryActions from '../actions'

class App extends Component {
  render() {
    const { countries } = this.props
    return (
      <div>
        <MainSection countries={countries} />
      </div>
    )
  }
}

App.propTypes = {
  countries: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    countries: state.countries
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CountryActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
