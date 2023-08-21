import React from "react";
import "./Searchbar.css";
import { SearchOutlined } from "@ant-design/icons";


function Searchbar() {
  return (
    <>
      <div className="container">
        <form class="search-form">
          <input class="search-input" type="text" placeholder="Search..." />
          <button class="search-button"  type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Searchbar;
