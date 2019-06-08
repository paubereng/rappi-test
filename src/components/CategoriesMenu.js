import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import cs from 'classnames';

class CategoriesMenu extends Component{
  constructor(props) {
   super(props);
   this.state = {}
  }
  handleCollapseItemMenu = (name, ev) => {
    ev.preventDefault();
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }
  handleClickItemMenu = (category, ev) => {
    ev.preventDefault();
    this.props.handleClickCategory(category);
  }
  renderlevel = item => {
    let isLevelOpen = this.state[item.name] === true;
    let iconLevel = cs({
      'collapse-icon fa': true,
      'fa-chevron-up': isLevelOpen,
      'fa-chevron-down': !isLevelOpen
    });

    return (
      <div key={item.name}>
        <div className="menu-category__item">
          {this.hasItemChildren(item) ?
            <i className={iconLevel}
              onClick={this.handleCollapseItemMenu.bind(this, item.name)}>
            </i>
            : null
          }
          <span className="menu-category__title" onClick={this.handleClickItemMenu.bind(this, item)}>{item.name}</span>
        </div>
        {this.hasItemChildren(item) ?
          (<Collapse id={item.name} isOpened={isLevelOpen} hasNestedCollapse={true}>
            <div className="menu-category__children">
            {item.sublevels.map(level => this.renderlevel(level))}
            </div>
          </Collapse>)
          : null
        }
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
              <div key={category.id}>
                {this.renderlevel(category)}
              </div>
            )
          })}
        </div>
      </div>
    );
  };
};

CategoriesMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handleClickCategory: PropTypes.func.isRequired
};

export default CategoriesMenu;
