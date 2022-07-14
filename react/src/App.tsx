import { memo, useCallback, useState, useTransition } from "react";
import classes from "./App.module.css";
import { Item } from "./components/Item";
import { SearchBox } from "./components/SearchBox";
import { itemMap } from "./data/items";

function App() {
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [, startTransition] = useTransition();
  const onChange = useCallback((input: string) => {
    setInput(input);
    startTransition(() => {
      setSearchQuery(input.toLowerCase());
    });
  }, []);

  return (
    <>
      <PokemonList searchQuery={searchQuery} />
      <footer className={classes.footer}>
        <p>
          Data is obtained from{" "}
          <a href="https://pokeapi.co/" rel="external">
            PokéAPI
          </a>
          .
        </p>
      </footer>
      <div className={classes.searchBox}>
        <SearchBox input={input} onChange={onChange} />
      </div>
    </>
  );
}

const PokemonList: React.FC<{
  searchQuery: string;
}> = memo(({ searchQuery }) => {
  return (
    <div className={classes.pokemonList}>
      {Array.from(itemMap.keys()).map((id) => {
        return <Item key={id} id={id} searchQuery={searchQuery} />;
      })}
    </div>
  );
});

export default App;
