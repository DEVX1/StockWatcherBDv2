import React, {Component} from 'react';
import {addStock} from '../actions/stock';
import {connect} from 'react-redux';

class AddStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    }
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.submitStockCode = this.submitStockCode.bind(this);
    this.getValidationCodeState = this.getValidationCodeState.bind(this);
  }

  getValidationCodeState() {
    return this.state.code !== '';
  }

  handleCodeChange(event) {
    this.setState({code: event.target.value.trim()});
  }

  submitStockCode(e) {
    e.preventDefault();
    if (this.getValidationCodeState()) {
      this.setState({code: ''});
      this.props.addNewStock(this.state.code);
    }
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="Stock code e.g. AAPL" value={this.state.code} onChange={this.handleCodeChange}/>
          <button onClick={this.submitStockCode}>Add</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addNewStock: (code) => {
    dispatch(addStock(code))
  }
})

const AddStockContainer = connect(null, mapDispatchToProps)(AddStock);

export default AddStockContainer;