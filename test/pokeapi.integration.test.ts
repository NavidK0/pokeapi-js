/*
  Integration tests for PokeAPIClient.
 */

import { PokeAPIClient } from "../lib";

describe("PokeAPIClient pokemon", () => {
  const client = new PokeAPIClient();

  it("should fetch data for a known pokemon (pikachu)", async () => {
    const data = await client.getPokemon("pikachu");
    expect(data.name).toBe("pikachu");
    expect(data.species.name).toBe("pikachu");
    expect(data.id).toBe(25);
  });

  it("should fetch data for a known pokemon by ID (60)", async () => {
    const data = await client.getPokemon(60);
    expect(data.name).toBe("poliwag");
  });

  it("should fetch data for a known pokemon with special characters (nidoran♀)", async () => {
    const data = await client.getPokemon("nidoran-f");
    expect(data.name).toBe("nidoran-f");
    expect(data.id).toBe(29);

    expect(
      data.sprites.versions["generation-v"]["black-white"].front_default
    ).toBeDefined();
  });

  it("should throw an error for an unknown pokemon", async () => {
    await expect(client.getPokemon("unknownpokemon")).rejects.toThrow();
  });

  it("should throw an error for an invalid ID", async () => {
    await expect(client.getPokemon(-1)).rejects.toThrow();
  });
});

describe("PokeAPIClient generation", () => {
  const client = new PokeAPIClient();

  it("should fetch data for a known generation (generation i)", async () => {
    const data = await client.getGeneration("generation-i");
    expect(data.name).toBe("generation-i");
  });

  it("should fetch data for a known generation by ID (1)", async () => {
    const data = await client.getGeneration(1);
    expect(data.name).toBe("generation-i");
  });

  it("should throw an error for an unknown generation", async () => {
    await expect(client.getGeneration("unknowngeneration")).rejects.toThrow();
  });

  it("should throw an error for an invalid ID", async () => {
    await expect(client.getGeneration(-1)).rejects.toThrow();
  });
});

describe("PokeAPIClient list pokemon", () => {
  const client = new PokeAPIClient();

  it("should fetch a paginated list of pokemon (10)", async () => {
    const data = await client.listPokemon(0, 10);
    expect(data.results.length).toBeLessThanOrEqual(10);
    expect(data.count).toBeGreaterThan(0);
  });

  it("should fetch an empty list when offset is beyond available data", async () => {
    const data = await client.listPokemon(100000, 10);
    expect(data.results.length).toBe(0);
  });

  it("should handle default pagination parameters", async () => {
    const data = await client.listPokemon();
    expect(data.results.length).toBeLessThanOrEqual(20); // Default limit is 20
  });
});

describe("PokeAPIClient error handling", () => {
  const client = new PokeAPIClient("https://invalid-url.com");

  it("should throw an error for network issues", async () => {
    await expect(client.getPokemon("pikachu")).rejects.toThrow();
  });

  it("should throw an error for invalid base URL", async () => {
    const invalidClient = new PokeAPIClient("https://invalid-url.com");
    await expect(invalidClient.getGeneration(1)).rejects.toThrow();
  });
});
