import React from "react";
import classes from "./Navbar.sass";

import AutoComplete from "react-autocomplete";

const Navbar = props => {
  return (
    <header className={classes.Navbar}>
      <div className={classes.LogoBar}>ClimaTempo</div>
      <form className={classes.SearchForm} onSubmit={props.onSearchSubmit}>

        <AutoComplete
          className={classes.SearchInput}
          items={[
            { id: 1, label: "Osasco" },
            { id: 2, label: "São Paulo" }
          ]}
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
          wrapperStyle={{display: 'block'}}
        />

        <button className={classes.SearchButton}>
          <i className="fa fa-search" />
        </button>
      </form>
    </header>
  );
};

export default Navbar;
