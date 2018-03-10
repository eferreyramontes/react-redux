import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import { searchEntites } from '../../actions/index'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault();
    // Al usar connect, dispatch se define como una props
    this.props.actions.searchEntites(this.input.value);
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value//.replace(' ', '-')
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

// Solo los componentes inteligentes, con estados usan el Store
export default connect(null, mapDispatchToProps)(SearchContainer);
