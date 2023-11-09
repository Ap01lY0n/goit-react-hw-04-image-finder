import React, { useState } from 'react';
import { Search, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled";
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ getValue }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (evt) => {
    evt.preventDefault();
    getValue(inputValue);
  };

  const onInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <Search className="searchbar">
      <SearchForm onSubmit={onSubmit} className="form">
        <SearchFormButton type="submit" className="button">
          <span className="button-label"> <FaSearch /></span>
        </SearchFormButton>
        <SearchFormInput
          className="input"
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={onInputChange}
        />
      </SearchForm>
    </Search>
  );
};

export default Searchbar;
