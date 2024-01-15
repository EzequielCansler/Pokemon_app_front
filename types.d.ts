type Pokemon = {
  id: number;
  params:any;
  name: string;
  types: Array<{ type: { name: string } }>;
  abilities: Array<string>;
  base_experience: number;
  moves: Array<Move>;
  img: string;
  sprites:Array<string>;
  rating:boolean;
  stats:Array<>;
  base_stat:number;
  stat:Array<>
}
type Sprites = {
  front_default?: string,
  other?: { [key: string]: string },
}
type Ability = {
  name:string;
}

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