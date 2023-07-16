import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <div class="hamburger-menu">
      <input type="checkbox" id="menu-btn-check" />
      <label for="menu-btn-check" class="menu-btn">
        <span></span>
      </label>
      <div class="menu-content">
        <ul>
          <li>
            <a href="#">メニューリンク1</a>
          </li>
          <li>
            <a href="#">メニューリンク2</a>
          </li>
          <li>
            <a href="#">メニューリンク3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
