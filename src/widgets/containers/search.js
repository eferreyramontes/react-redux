import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import { searchAsyncEntites } from '../../actions/index'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault();
    // Al usar connect, dispatch se define como una props
    this.props.actions.searchAsyncEntites(this.input.value);

    // En vez de buscar entre los elementos ya pintados en la UI,
    // podríamos hacer un fetch a nuestra API
    // 
    //fetch(`http://miapi.com/buscar/{this.input.value}`).then((data) => {
    //   this.props.actions.setResultadoDeAcción(data);
    // });
    //
    // Aquí puedes usar AJAX, SuperAgent
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
