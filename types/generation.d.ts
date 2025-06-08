/*
 * This file provides types for the Generation-related resources in the PokeAPI.
 */

import { Name, NamedResource } from "./common";

/**
 * Generation represents a generation of Pokémon games and the resources introduced in it.
 * See: https://pokeapi.co/docs/v2#generation
 */
export interface Generation {
  /**
   * The identifier for this resource.
   */
  id: number;

  /**
   * The name for this resource.
   */
  name: string;

  /**
   * A list of abilities that were introduced in this generation.
   */
  abilities: NamedResource[];

  /**
   * The name of this resource listed in different languages.
   */
  names: Name[];

  /**
   * The main region travelled in this generation.
   */
  main_region: NamedResource;

  /**
   * A list of moves that were introduced in this generation.
   */
  moves: NamedResource[];

  /**
   * A list of Pokémon species that were introduced in this generation.
   */
  pokemon_species: NamedResource[];

  /**
   * A list of types that were introduced in this generation.
   */
  types: NamedResource[];

  /**
   * A list of version groups that were introduced in this generation.
   */
  version_groups: NamedResource[];
}
