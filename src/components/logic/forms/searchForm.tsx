import { Input } from "@/components/ui/input"

interface iSearchProps {
    query: string;
    setQuery: () => void;
    onSubmit: () => void;
}


const SearchForm = ({ query, setQuery, onSubmit }: iSearchProps) => {
    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        setQuery(query.trim());
        if (query.trim().length > 0) {
          onSubmit();
        }
      }
    };
  
    return (
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={onKeyPress}
        autoComplete="off"
        placeholder="Поиск"
      />
    );
  };
  

export default SearchForm