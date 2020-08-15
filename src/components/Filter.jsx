import React from 'react'
import { Input, Menu } from 'semantic-ui-react';


const Filter = ({ setFilter, filterBuy, searchQuery, setSearchQuery}) => {

    return(
        <Menu secondary>
          <Menu.Item
            name='all'
            active={filterBuy === 'all'}
            onClick={setFilter.bind(this, 'all')}
          >Все</Menu.Item>
          <Menu.Item
            name='price_high'
            active={filterBuy === 'price_high'}
            onClick={setFilter.bind(this, 'price_high')}
          >Цена (дорогие)</Menu.Item>
          <Menu.Item
            name='price_low'
            active={filterBuy === 'price_low'}
            onClick={setFilter.bind(this, 'price_low')}
          >Цена (дешевые)</Menu.Item>
          <Menu.Item
            name='author'
            active={filterBuy === 'author'}
            onClick={setFilter.bind(this, 'author')}
          >Автор</Menu.Item>
          <Menu.Item>
            <Input 
            onChange = {e => setSearchQuery(e.target.value)}
            icon="search" 
            value={searchQuery} 
            placeholder="Введите ..."
            ></Input>
          </Menu.Item>
        </Menu>
    );
}

export default Filter;

/*
export default class Filter extends Component {
    state = { activeItem: 'all' }
  
    handleItemClick = (e, { name }) => {
        const { setFilter } = this.props;
        this.setState({ activeItem: name });
        setFilter(name);
    };
  
    render() {
      const { activeItem } = this.state;
  
      return (
        <Menu secondary>
          <Menu.Item
            name='all'
            active={activeItem === 'all'}
            onClick={this.handleItemClick}
          >Все</Menu.Item>
          <Menu.Item
            name='popular'
            active={activeItem === 'popular'}
            onClick={this.handleItemClick}
          >Популярные</Menu.Item>
          <Menu.Item
            name='price_high'
            active={activeItem === 'price_high'}
            onClick={this.handleItemClick}
          >Цена (дорогие)</Menu.Item>
          <Menu.Item
            name='price_low'
            active={activeItem === 'price_low'}
            onClick={this.handleItemClick}
          >Цена (дешевые)</Menu.Item>
          <Menu.Item
            name='author'
            active={activeItem === 'author'}
            onClick={this.handleItemClick}
          >Автор</Menu.Item>
        </Menu>
      )
    }
  }
*/