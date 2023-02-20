## Folder structure

```
/android        <- native android directory
/ios            <- native ios directory
/src            <- javascript source code directory
  /api          <- functions calling api
  /components   <- component files
    /__tests__  <- unit tests
  /config       <- defines configurable variables like the api base url
  /factories    <- defines mock data used in jest tests
  /hooks        <- returns the books, loading status and error data from the api on component mount
  /theme        <- defines theme constants (only single theme for now though)
  /types        <- defines the types that are shared across the app
```

## Books render flow

- When `BookList` component is mounted, `useGetBooks` hook calls the api and returns the books list asynchronously.
- `BookList` renders the header and items by `FlatList`.
- While loading the books data, it shows a platform specific loading spinner.
- If there is a network error or other issue else happened, then it displays an error message saying that.
- `BookListHeader` renders the title text and provides user an action to reload the data.

## Packages added
- dependencies for prod: none
- devDependencies for test:
```
    "@testing-library/react-native": "^8.0.0", // testing-library for native
    "jest-fetch-mock": "^3.0.3",               // mocks js `fetch` function
```

## Other changes
- Added `NSAllowsArbitraryLoads: true` to `Info.plist` file in order to allow fetching the books data and the thumbnail images.
- Changed the lint rule `bracketSpacing: true` on .prettierrc.js
- package.json and yarn.lock changes for the testing-library added
