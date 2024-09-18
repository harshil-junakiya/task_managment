import React from 'react';
import DisplayDropdown from './DisplayDropdown';
import './header.css';

function Header({ grouping, setGrouping, ordering, setOrdering }) {
    return (
      <header>
        <DisplayDropdown grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
      </header>
    );
  }

  export default Header