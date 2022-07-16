import { useEffect, useState } from "react";

export const useCharacters = url => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, [url]);
  return characters;


};
