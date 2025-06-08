import type { Pokemon } from "../types/pokemon";
import type { ResourceList } from "../types/common";
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
export declare class PokeAPIClient {
    private readonly baseURL;
    constructor(baseURL?: string);
    /**
     * Fetches a pokemon by its name or ID.
     * @param nameOrId
     */
    getPokemon(nameOrId: string | number): Promise<Pokemon>;
    /**
     * Fetches a generation by its name or ID.
     * @param nameOrId
     */
    getGeneration(nameOrId: string | number): Promise<Generation>;
    /**
     * Fetches a paginated list of Pokémon.
     *
     * @param offset The offset of the first Pokémon to return
     * @param limit The maximum number of Pokémon to return
     */
    listPokemon(offset?: number, limit?: number): Promise<ResourceList<Pokemon>>;
}
