import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__hidden">
      <MenuItem title="Model S" />
      <MenuItem title="Model 3" />
      <MenuItem title="Model x" />
      <MenuItem title="Model y" />
      <MenuItem title="solar roof" />
      <MenuItem title="solar panels" />
      <MenuItem title="shop" />
      <MenuItem title="tesla account" />
      </div>
      <MenuItem title="existing inventory" />
      <MenuItem title="used inventory" />
      <MenuItem title="trade-in" />
      <MenuItem title="cybertruck" />
      <MenuItem title="roadster" />
      <MenuItem title="semi" />
      <MenuItem title="charging" />
      <MenuItem title="powerwall" />
      <MenuItem title="commercial solar" />
      <MenuItem title="test drive" />
      <MenuItem title="find us" />
      <MenuItem title="support" />
      <MenuItem title="united states" />
    </div>
  );
}

export default Menu;
