import React from 'react';
import "./Header.scss";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <h1 className='text-white header-title ls-2'>What is Culinary Tourism ?</h1>
          <p className='text-white my-3 px-5  header-text'>
              Food Tourism, or Culinary Tourism, is traveling to explore and enjoy a
              destination's unique food and drink. It’s about experiencing the culture
              through local dishes, street food, cooking classes, food festivals, and
              markets. From Italian pasta to Thai street food, food tourism connects
              travelers to the heart of a place through its flavors and traditions.
          </p>
          <SearchForm />
      </div>
    </header>
  )
}

export default Header