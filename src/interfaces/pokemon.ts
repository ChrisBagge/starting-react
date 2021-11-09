export interface Name {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

export interface Base {
  HP: number;
  Attack: number;
  Defense: number;
  "Sp. Attack": number;
  "Sp. Defense": number;
  Speed: number;
}

export interface IPokemon {
  id: number;
  name: Name;
  type: string[];
  base: Base;
}
