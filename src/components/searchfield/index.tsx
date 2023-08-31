import { FC } from 'react';
import './searchfield.css';

interface SearchFieldProps {
  count: number;
  search: string;
  searchFunc: React.Dispatch<React.SetStateAction<string>>;
}

const SearchField: FC<SearchFieldProps> = ({ count, search, searchFunc }) => {
  return (
    <span className="wrap">
      <input
        autoFocus
        className="search"
        type="text"
        placeholder="Search jokes..."
        value={search}
        onChange={(e) => searchFunc(e.target.value)}
      />
      <p className="found" hidden={count === null || count === 0}>
        Found jokes: {count}
      </p>
    </span>
  );
};

export default SearchField;
