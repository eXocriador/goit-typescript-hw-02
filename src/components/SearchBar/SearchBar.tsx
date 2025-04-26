import { FormEvent, useState } from "react";

interface SearchbarProps {
  onSubmit: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query.trim());
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Searchbar;
