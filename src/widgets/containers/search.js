import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit')
    // Al usar connect, dispatch se define como una props
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.input.value,
      }
    });
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

// Solo los componentes inteligentes, con estados usan el Store
export default connect()(SearchContainer);
