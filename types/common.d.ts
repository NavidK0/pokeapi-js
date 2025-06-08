/*
 * This file provides common types used across the PokeAPI.
 */

/**
 * ResourceList represents a list of resources returned by the PokeAPI.
 */
export interface ResourceList<T> {
  /**
   * The total number of resources available.
   */
  count: number;

  /**
   * The URL to the next page of results, or null if there are no more pages.
   */
  next: string | null;

  /**
   * The URL to the previous page of results, or null if this is the first page.
   */
  previous: string | null;

  /**
   * The list of resources returned in this page.
   */
  results: T[];
}

/**
 * Generic resource with a name, url, and optional extra fields.
 */
export interface NamedResource {
  /**
   * The name of the resource.
   */
  name: string;

  /**
   * The URL to the resource.
   */
  url: string;
}

/**
 * Name represents a localized name for a resource.
 * See: https://pokeapi.co/docs/v2#names
 */
export interface Name {
  /**
   * The localized name for an API resource in a specific language.
   */
  name: string;

  /**
   * The language this name is in.
   */
  language: NamedResource;
}
