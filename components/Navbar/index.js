import React from 'react';
import style from './style.sass';
import Logo from '../../images/logo-white.png';

import AutoComplete from 'react-autocomplete';

const Navbar = props => {
  const cities = props.cities.map(city => {
    return {
      id: city.id,
      label: city.name
    };
  });

  return (
    <header className={style.Navbar}>
      <div className={style.LogoBar}>
        <img src={Logo} alt="" />
      </div>
      <form className={style.SearchForm} onSubmit={props.onSearchSubmit}>
        <AutoComplete
          className={style.SearchInput}
          items={cities}
          shouldItemRender={(item, value) =>
            item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          getItemValue={item => item.label}
          renderItem={(item, highlighted) => (
            <div key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}>
              {item.label}
            </div>
          )}
          value={props.searchValue}
          onChange={props.searchChangedHandler}
          onSelect={props.selectValueHandler}
          wrapperStyle={{ display: 'block' }}
        />
        <button className={style.SearchButton}>
          <i className="fa fa-search" />
        </button>
      </form>
    </header>
  );
};

export default Navbar;
