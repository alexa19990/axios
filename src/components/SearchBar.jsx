import classes from '../modules/SearchBar.module.scss'

const SearchBar = (props) => {

  return (
    <div className={classes['search-container']}>
      <img src="" alt="" />
      <input
        onChange={(e) => props.setValue(e.target.value)}
        type="text"
        placeholder="Search Github Username..."
      />
      <button onClick={props.clickHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
