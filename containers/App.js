import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as CountryActions from '../actions'
require("../css/main.css");


class App extends Component {
  render() {
    const { countries, actions } = this.props
    return (
      <MuiThemeProvider>
        <MainSection countries={countries} actions={actions} />
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  countries: PropTypes.object.isRequired,
  year: PropTypes.number
}


function mapStateToProps(state, ownProps) {
  return {
    countries: state.countries,
    year: ownProps.params.year
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
