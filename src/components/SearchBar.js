import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class SearchBar extends Component{
  constructor(props) {
   super(props);
   this.state = {
     term_search: ""
   }
  }
  handleChangeInput = ev => {
    let inputValue = ev.target.value;
    this.setState({
      term_search: inputValue
    });
  }
  handleClickButton = ev => {
    ev.preventDefault();
    let { term_search } = this.state;
    this.props.handleSearchProduct(term_search);
  }
  render(){
    let { term_search } = this.state;
    return(
      <InputGroup className="search-bar">
        <FormControl
          type="text"
          placeholder="Search"
          value={term_search}
          onChange={this.handleChangeInput}
        />
        <InputGroup.Append>
          <Button
            onClick={this.handleClickButton.bind(this)}
            variant="outline-secondary">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default SearchBar;
