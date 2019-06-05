import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import cs from 'classnames';

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
    let iconLevel = cs({
      fa: true,
      'fa-chevron-up': isLevelOpen,
      'fa-chevron-down': !isLevelOpen
    });

    return (
      <div key={item.name}>
        <div onClick={this.handleItemMenu.bind(this, item.name)}>
          {this.hasItemChildren(item) ? <i className={iconLevel} style={{marginRight: 5}}></i> : null}
          {item.name}
        </div>
        <Collapse id={item.name} isOpened={isLevelOpen} hasNestedCollapse={true}>
          <div style={{marginLeft: 25}}>
          {this.hasItemChildren(item) ? item.sublevels.map(level => this.renderlevel(level)) : null}
          </div>
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
        <div className="category-menu__title">Categories</div>
        <div className="category-menu__body">
          {data.map((category,i) => {
            return (
              <div key={i}>
                {this.renderlevel(category)}
              </div>
            )
          })}
        </div>
      </div>
    );
  };
};

export default CategoriesMenu;
