import React from "react";
import classes from "./Navbar.sass";
import logo from '../../images/logo.png';

import AutoComplete from "react-autocomplete";

const Navbar = props => {
  const cities = props.cities.map(city => {
    return {
      id: city.id,
      label: city.name
    };
  });

  return (
    <header className={classes.Navbar}>
      <div className={classes.LogoBar}><img src={logo} alt=""/></div>
      <form className={classes.SearchForm} onSubmit={props.onSearchSubmit}>
        <AutoComplete
          className={classes.SearchInput}
          items={cities}
          shouldItemRender={(item, value) =>
            item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          getItemValue={item => item.label}
          renderItem={(item, highlighted) => (
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
            >
              {item.label}
            </div>
          )}
          value={props.searchValue}
          onChange={props.searchChangedHandler}
          onSelect={props.selectValueHandler}
          wrapperStyle={{ display: "block" }}
        />

        <button className={classes.SearchButton}>
          <i className="fa fa-search" />
        </button>
      </form>
    </header>
  );
};

export default Navbar;
