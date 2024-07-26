# Zemingo


### Files structure of `src` catalog
- `api` - contains application requests
- `assets` - application assets, currently contains only images
- `pages` - application pages
- `router` - application routing
- `shared` - application reusable components

### Styling

We use a base `TailwindCSS` config for styling in this application

### API Handling

For handling API calls, we use `axios` for making HTTP requests and `tanstack/react-query`'s `useQuery` and `useMutation` hooks for managing server state and caching.

- **axios**: Promise based HTTP client for the browser and node.js
- **@tanstack/react-query**: A powerful data fetching and state management library for React, which is used here for fetching data with help of `useQuery` and `useMutation` for creating, updating, or deleting data.


### Linter and Formatter

#### ESLint
`ESLint` is used to lint TypeScript and TypeScript React files, ensuring code quality and adherence to coding standards.

#### Prettier
`Prettier` is a code formatter that enforces a consistent code style


### Available Scripts

#### In the project directory, you can run the following scripts:

- `npm run dev`: Runs Vite for development
- `npm run build`: Compiles TypeScript using tsc and then builds the application using Vite for production
- `npm run lint`: Lints the project using ESLint, checking TypeScript and TypeScript React files with no warnings
- `npm run lint:fix`: Lints the project using ESLint, checking TypeScript and TypeScript React files with no warnings and fixing issues that is able to fix
- `npm run preview`: Runs Vite in preview mode
- `npm run typecheck`: Runs TypeScript type checking without emitting any files
