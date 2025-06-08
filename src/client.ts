import type { Pokemon } from "../types/pokemon";
import type { ResourceList } from "../types/common";

import { logger } from "./utils/logger";
import { validateResponse } from "./utils/response";
import { Generation } from "../types/generation";

/**
 * PokeAPIClient is a simple client for interacting with the PokeAPI.
 * It provides methods to fetch Pokémon and generation data.
 *
 * Features:
 * - Fetch Pokémon by name or ID
 * - Fetch generation by name or ID
 * - List Pokémon with pagination support
 */
export class PokeAPIClient {
  private readonly baseURL: string;

  constructor(baseURL: string = "https://pokeapi.co/api/v2") {
    this.baseURL = baseURL;
  }

  /**
   * Fetches a pokemon by its name or ID.
   * @param nameOrId
   */
  async getPokemon(nameOrId: string | number): Promise<Pokemon> {
    try {
      const res = await fetch(`${this.baseURL}/pokemon/${nameOrId}`);
      validateResponse(res);

      return await res.json();
    } catch (error: unknown) {
      logger.error(
        `Error fetching Pokémon: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      throw error;
    }
  }

  /**
   * Fetches a generation by its name or ID.
   * @param nameOrId
   */
  async getGeneration(nameOrId: string | number): Promise<Generation> {
    try {
      const res = await fetch(`${this.baseURL}/generation/${nameOrId}`);
      validateResponse(res);

      return await res.json();
    } catch (error: unknown) {
      logger.error(
        `Error fetching Generation: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      throw error;
    }
  }

  /**
   * Fetches a paginated list of Pokémon.
   *
   * @param offset The offset of the first Pokémon to return
   * @param limit The maximum number of Pokémon to return
   */
  async listPokemon(
    offset: number = 0,
    limit: number = 20
  ): Promise<ResourceList<Pokemon>> {
    if (offset < 0 || limit <= 0) {
      throw new Error(
        "Offset must be non-negative and limit must be positive."
      );
    }

    logger.log(`Listing Pokémon with offset=${offset} and limit=${limit}`);

    try {
      const url = `${this.baseURL}/pokemon?offset=${offset}&limit=${limit}`;
      const res = await fetch(url);
      validateResponse(res);
      const data = await res.json();
      logger.log(`Received response:`, data);

      return data;
    } catch (error: unknown) {
      logger.error(
        `Error listing Pokémon: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      throw error;
    }
  }
}
