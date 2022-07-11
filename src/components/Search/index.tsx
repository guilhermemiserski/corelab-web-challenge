import styles from "./Search.module.scss"

interface ISearch {
  placeholder: string;
  onChange: (e: any) => void;
}

const Search = (props: ISearch) => {


  return (
    <input className={styles.searchInput} type="text" placeholder={props.placeholder} onChange={props.onChange} />
  );
};

export default Search;