import React, { Component } from 'react';
import {Collapse} from 'react-collapse';

class CategoriesMenu extends Component{
  constructor(props) {
   super(props);
   this.state = {}
  }
  handleItemMenu = (name) => {
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }
  renderlevel = item => {
    let isLevelOpen = this.state[item.name] === true;

    return (
      <div key={item.name}>
        <div onClick={this.handleItemMenu.bind(this, item.name)}>
          {/*<i className={`fa fa-arrow-${isLevelOpen ? 'up' : 'down'}`}></i>*/}
          {`${item.name}`}
        </div>
        <Collapse id={item.name} isOpened={isLevelOpen} hasNestedCollapse={true} >
          {this.hasItemChildren(item) ? item.sublevels.map(level => this.renderlevel(level)) : null}
        </Collapse>
      </div>
    )
  }
  hasItemChildren = item => {
    return item.hasOwnProperty('sublevels');
  }

  render(){
    let { data } = this.props;
    return (
      <div className="category-menu">
        {data.map((category,i) => {
          return (
            <div key={i} style={{borderBottom: '1px solid grey'}}>
              {this.renderlevel(category)}
            </div>
          )
        })}
      </div>
    );
  };
};

export default CategoriesMenu;
