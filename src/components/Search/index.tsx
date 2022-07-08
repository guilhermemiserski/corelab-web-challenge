import styles from './Search.module.scss'

interface ISearch {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const Search = (props: ISearch) => {
  return (
    <input className={styles.searchInput} type="text" placeholder={props.placeholder}/>
  );
};

export default Search;
