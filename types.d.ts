type Pokemon = {
  id: number;
  name: string;
  types: Array<{ type: { name: string } }>;
  abilities: Array<Ability>;
  base_experience: number;
  moves: Array<Move>;
  img: string;
};

 type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

 type PokemonListItem = {
  id: number;
  name: string;
  url: string;
};