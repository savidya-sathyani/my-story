'use client';

const Search = () => {
  return (
    <div className="search-form">
      <input className="search-input" type="text" placeholder="S E A R C H" />
      <button className="search-logo">
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
};

export default Search;
