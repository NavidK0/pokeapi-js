# pokeapi-js

A simple JavaScript/TypeScript client for the [PokeAPI](https://pokeapi.co/).

## Design Goals

- **Simplicity**: Easy to use and understand. Similar to the official PokeAPI REST API.
- **Type Safety**: Fully typed with TypeScript for a better developer experience.
- **Lightweight**: Minimal dependencies and small bundle size.
- **Compatibility**: Works in both Node.js and browser environments.
- **No External Dependencies**: Pure JavaScript/TypeScript without any external libraries.

## Caveats

- Caching and rate limiting are not implemented. You should handle these in your application if needed.
- Tests do not cover browser environments. This is to simplify the testing setup and focus on core functionality.
  However, the library is designed to work in browsers as well.
- No additional resource hydration for NamedAPIResource objects. The library returns raw data as provided by the
  PokeAPI.
  - This could be added in the future. But it adds complexity and is not strictly necessary for most use cases.

## Features

- GET Pokemon (Name, ID) - Supports fetching single or multiple Pokémon by name or ID.
- GET Generations (Name, ID) - Fetches all generations of Pokémon.

### Compatibility

This library should support any JS runtime that supports the Fetch API.

- Node.js 18 or later
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Deno
- Bun
- React Native (with polyfills for Fetch)
- and more probably

## Installation (for end users)

<details>
  <summary>npm</summary>

```sh
npm install @navidk0/pokeapi-js
```

</details>

<details>
  <summary>pnpm</summary>

```sh
pnpm add @navidk0/pokeapi-js
```

</details>

<details>
  <summary>yarn</summary>

```sh
yarn add @navidk0/pokeapi-js
```

</details>

## Usage

```typescript
import { PokeApiClient } from "pokeapi-js";

const client = new PokeApiClient();

async function getPokemon() {
  const pikachu = await client.getPokemon("pikachu");
  console.log(pikachu);
}

getPokemon();
```

## Debug Logging

You can enable debug logs for the PokeAPI client by setting the `POKEAPI_DEBUG_LOGS` environment variable to `true`.

For example, create a `.env` file in your project root:

```
POKEAPI_DEBUG_LOGS=true
```

Or set it directly in your shell before running your app:

```
POKEAPI_DEBUG_LOGS=true node your-app.js
```

Or use cross-env to set it across different environments:

```sh
cross-env POKEAPI_DEBUG_LOGS=true node your-app.js
```

When enabled, all debug logs will be logged to the console.
Errors are always logged, regardless of the debug setting.

# Development

## Prerequisites

- [PNPM](https://pnpm.io/)
- [Node.js 18 or later](https://nodejs.org/)

To run tests and modify this repo, you should preferably have [PNPM installed](https://pnpm.io/). If you
don't have it yet, you can install it globally:

```sh
npm install -g pnpm
```

Install dependencies if you haven't already:

```sh
pnpm i
```

## Build

```sh
pnpm build
```

## Testing

Run tests:

```sh
pnpm test
```

## License

MIT

## Additional Resources

- [PokeAPI Documentation](https://pokeapi.co/docs/v2)
- [PokeAPI OpenAPI Specification](https://github.com/PokeAPI/pokeapi/blob/master/openapi.yml)
