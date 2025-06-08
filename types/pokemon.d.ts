/*
 * This file contains types for Pokémon-related resources as defined by the PokeAPI.
 */

import { Name, NamedResource } from "./common";

/**
 * Pokémon represents a single Pokémon with all its details as returned by the PokeAPI.
 * See: https://pokeapi.co/docs/v2#pokemon
 */
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  cries: PokemonCry;
  forms: PokemonForm[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_abilities: PastAbility[];
  past_types: PastType[];
  species: NamedResource;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
}

/**
 * Abilities provide passive effects for Pokémon in battle or in the overworld.
 * Pokémon have multiple possible abilities but can have only one ability at a time.
 * Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 */
export interface PokemonAbility {
  /**
   * The ability the Pokémon may have.
   * Reference to an Ability resource.
   */
  ability: NamedResource;

  /**
   * Whether or not this is a hidden ability for the referenced Pokémon.
   */
  is_hidden: boolean;

  /**
   * The slot this ability occupies in this Pokémon species.
   * Pokémon have 3 ability 'slots' which hold references to possible abilities they could have.
   */
  slot: number;
}

/**
 * PokemonForm represents a specific form of a Pokémon, such as its different appearances or variations.
 * Forms can include different appearances, like regional forms or alternate forms.
 * See: https://pokeapi.co/docs/v2#pokemonforms
 */
export interface PokemonForm {
  /**
   * The identifier for this Pokémon form resource.
   */
  id: number;

  /**
   * The name for this Pokémon form resource.
   */
  name: string;

  /**
   * The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name.
   */
  order: number | null;

  /**
   * The order in which forms should be sorted within a species' forms.
   */
  form_order: number | null;

  /**
   * True for exactly one form used as the default for each Pokémon.
   */
  is_default: boolean;

  /**
   * Whether or not this form can only happen during battle.
   */
  is_battle_only: boolean;

  /**
   * Whether or not this form requires mega evolution.
   */
  is_mega: boolean;

  /**
   * The name of this form.
   */
  form_name: string;

  /**
   * The Pokémon that can take on this form.
   * Reference to a Pokémon resource.
   */
  pokemon: NamedResource;

  /**
   * A set of sprites used to depict this Pokémon form in the game.
   * Keyed by sprite type, value is the URL or null if not available.
   */
  sprites: Record<string, string | null>;

  /**
   * The version group this form belongs to.
   * Reference to a Version Group resource.
   */
  version_group: NamedResource;

  /**
   * The names of this form in different languages.
   */
  form_names: Name[];

  /**
   * The names of this form in different languages.
   */
  names: Name[];

  /**
   * The types this Pokémon form has.
   */
  types: PokemonFormType[];
}

/**
 * PokemonFormType represents the type of a Pokémon form.
 */
export interface PokemonFormType {
  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;

  /**
   * The type the referenced Form has.
   */
  type: NamedResource;
}

/**
 * VersionGameIndex represents a specific game index for a Pokémon in a particular version.
 */
export interface VersionGameIndex {
  /**
   * The internal id of an API resource within game data.
   */
  game_index: number;

  /**
   * The version relevant to this game index.
   */
  version: NamedResource;
}

/**
 * Represents a Pokémon's held item and the details for each version.
 */
export interface PokemonHeldItem {
  /**
   * The item the referenced Pokémon holds.
   */
  item: NamedResource;

  /**
   * The details of the different versions in which the item is held.
   */
  version_details: PokemonHeldItemVersion[];
}

/**
 * Details for a held item in a specific version.
 */
export interface PokemonHeldItemVersion {
  /**
   * How often the item is held.
   */
  rarity: number;

  /**
   * The version in which the item is held.
   */
  version: NamedResource;
}

/**
 * Represents a move that a Pokémon can learn.
 */
export interface PokemonMove {
  /**
   * The move the Pokémon can learn.
   */
  move: NamedResource;
  /**
   * The details of the version in which the Pokémon can learn the move.
   */

  /**
   * The details of the version in which the Pokémon can learn the move.
   */
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  /**
   * The method by which the move is learned.
   */
  move_learn_method: NamedResource;

  /**
   * The version group in which the move is learned.
   */
  version_group: NamedResource;

  /**
   * The minimum level to learn the move.
   */
  level_learned_at: number;

  /**
   * Order by which the Pokémon will learn the move.
   */
  order: number; // Optional, as not all moves have an order defined
}

/**
 * Represents a Pokémon's stats, including base stats and effort values.
 * See https://pokeapi.co/docs/v2#pokemonstats
 */
export interface PokemonStat {
  /**
   * The stat the Pokémon has.
   */
  stat: NamedResource;

  /**
   * The effort points (EV) the Pokémon has in the stat.
   */
  effort: number;

  /**
   *
   * The base value of the stat.
   */
  base_stat: number;
}

export interface PokemonType {
  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;

  /**
   * The type the referenced Pokémon has.
   */
  type: NamedResource;
}

/**
 * Represents a Pokémon's cry (sound effect) in the game.
 */
export interface PokemonCry {
  /**
   * The latest depiction of this Pokémon's cry.
   */
  latest: string;

  /**
   * The legacy depiction of this Pokémon's cry.
   */
  legacy: string;
}

/**
 * Represents a Pokémon's ability in a previous generation.
 */
export interface PastAbility {
  /**
   * The abilities the referenced Pokémon had up to and including the listed generation.
   */
  abilities: PokemonAbility[];

  /**
   * The last generation in which the referenced Pokémon had the listed abilities.
   */
  generation: NamedResource;
}

/**
 * PastType represents a Pokémon's types in a previous generation.
 */
export interface PastType {
  /**
   * The last generation in which the referenced Pokémon had the listed types.
   */
  generation: NamedResource;

  /**
   * The types the referenced Pokémon had up to and including the listed generation.
   */
  types: PokemonType[];
}

/**
 * Represents a Pokémon's held item and the details for each version.
 */
export interface PokemonHeldItem {
  /**
   * The item the referenced Pokémon holds.
   */
  item: NamedResource;

  /**
   * The details of the different versions in which the item is held.
   */
  version_details: PokemonHeldItemVersion[];
}

/**
 * Details for a held item in a specific version.
 */
export interface PokemonHeldItemVersion {
  /**
   * The version in which the item is held.
   */
  version: NamedResource;

  /**
   * How often the item is held.
   */
  rarity: number;
}

/**
 * Represents a Pokémon's base stat value.
 */
export interface PokemonStat {
  /**
   * The base value of the stat.
   */
  base_stat: number;

  /**
   * The effort points (EV) the Pokémon has in the stat.
   */
  effort: number;

  /**
   * The stat the Pokémon has.
   */
  stat: NamedResource;
}

/**
 * Represents a Pokémon's type and its slot.
 */
export interface PokemonType {
  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;

  /**
   * The type the referenced Pokémon has.
   */
  type: NamedResource;
}

/**
 * Represents a set of sprites used to depict a Pokémon in the game.
 */
export interface PokemonSprites {
  /**
   * The default depiction of this Pokémon from the front in battle.
   */
  front_default: string | null;

  /**
   * The shiny depiction of this Pokémon from the front in battle.
   */
  front_shiny: string | null;

  /**
   * The female depiction of this Pokémon from the front in battle.
   */
  front_female: string | null;

  /**
   * The shiny female depiction of this Pokémon from the front in battle.
   */
  front_shiny_female: string | null;

  /**
   * The default depiction of this Pokémon from the back in battle.
   */
  back_default: string | null;

  /**
   * The shiny depiction of this Pokémon from the back in battle.
   */
  back_shiny: string | null;

  /**
   * The female depiction of this Pokémon from the back in battle.
   */
  back_female: string | null;

  /**
   * The shiny female depiction of this Pokémon from the back in battle.
   */
  back_shiny_female: string | null;

  /**
   * Other sprites for this Pokémon.
   * Should be an object with keys of object PokemonSprites.
   */
  other: Record<string, Omit<PokemonSprites, "other">>;

  /**
   * Versions of this Pokémon's sprites.
   * Keyed by version name, value is an object with keys of sprite type and values of PokemonSprites.
   */
  versions: Record<string, Record<string, Omit<PokemonSprites, "other">>>;
}
