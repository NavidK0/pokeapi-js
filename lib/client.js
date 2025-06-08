"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeAPIClient = void 0;
const logger_1 = require("./utils/logger");
const response_1 = require("./utils/response");
/**
 * PokeAPIClient is a simple client for interacting with the PokeAPI.
 * It provides methods to fetch Pokémon and generation data.
 *
 * Features:
 * - Fetch Pokémon by name or ID
 * - Fetch generation by name or ID
 * - List Pokémon with pagination support
 */
class PokeAPIClient {
    constructor(baseURL = "https://pokeapi.co/api/v2") {
        this.baseURL = baseURL;
    }
    /**
     * Fetches a pokemon by its name or ID.
     * @param nameOrId
     */
    getPokemon(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${this.baseURL}/pokemon/${nameOrId}`);
                (0, response_1.validateResponse)(res);
                return yield res.json();
            }
            catch (error) {
                logger_1.logger.error(`Error fetching Pokémon: ${error instanceof Error ? error.message : "Unknown error"}`);
                throw error;
            }
        });
    }
    /**
     * Fetches a generation by its name or ID.
     * @param nameOrId
     */
    getGeneration(nameOrId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${this.baseURL}/generation/${nameOrId}`);
                (0, response_1.validateResponse)(res);
                return yield res.json();
            }
            catch (error) {
                logger_1.logger.error(`Error fetching Generation: ${error instanceof Error ? error.message : "Unknown error"}`);
                throw error;
            }
        });
    }
    /**
     * Fetches a paginated list of Pokémon.
     *
     * @param offset The offset of the first Pokémon to return
     * @param limit The maximum number of Pokémon to return
     */
    listPokemon() {
        return __awaiter(this, arguments, void 0, function* (offset = 0, limit = 20) {
            if (offset < 0 || limit <= 0) {
                throw new Error("Offset must be non-negative and limit must be positive.");
            }
            logger_1.logger.log(`Listing Pokémon with offset=${offset} and limit=${limit}`);
            try {
                const url = `${this.baseURL}/pokemon?offset=${offset}&limit=${limit}`;
                const res = yield fetch(url);
                (0, response_1.validateResponse)(res);
                const data = yield res.json();
                logger_1.logger.log(`Received response:`, data);
                return data;
            }
            catch (error) {
                logger_1.logger.error(`Error listing Pokémon: ${error instanceof Error ? error.message : "Unknown error"}`);
                throw error;
            }
        });
    }
}
exports.PokeAPIClient = PokeAPIClient;
