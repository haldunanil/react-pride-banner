# react-pride-banner 🏳️‍🌈

[![npm](https://img.shields.io/npm/v/react-pride-banner)](https://www.npmjs.com/package/react-pride-banner)

A simple pride flag component for React apps

## Installation

To install, run the following command:

```
yarn add react-pride-banner
```

or, if you're using `npm`, run:

```
npm install --save react-pride-banner
```

Note that this package has three `peerDependencies` that also need to be installed in your project for it to work:

- `react`: `v^16.8.0`
- `react-dom`: `v^16.8.0`
- `styled-components`: `v^5.0.0`

## Getting started

To use this library in your React application, you can pull it in as shown in the following example:

```tsx
import React from "react";
import PrideBanner from "react-pride-banner";

const App = () => {
  return (
    <main>
      <PrideBanner />

      <div>my main content here</div>
    </main>
  );
};

export default App;
```

Note that the component should be rendered as close to the root of your application as possible to ensure that it is rendered correctly at the top of the browser.

## Properties

Below are the props that are accepted by the `PrideBanner` component.

| prop           | type                         | defaultValue | required | description                                                                                        |
| -------------- | ---------------------------- | ------------ | -------- | -------------------------------------------------------------------------------------------------- |
| `bannerColors` | object; see below\*          | -            | No       | colors to use for the banner                                                                       |
| `children`     | oneOfType( node, nodeArray ) | -            | No       | children to be rendered inside the banner; if omitted, then the component will NOT expand on hover |
| `className`    | string                       | -            | No       | className to be used in the DOM                                                                    |
| `id`           | string                       | -            | No       | id to be used in the DOM                                                                           |
| `position`     | oneOf( `absolute`, `fixed` ) | `fixed`      | No       | position for the banner on the page                                                                |

### `bannerColors`

The `bannerColors` object must take the shape in the following example:

```ts
const bannerColors = {
  red: "#FF0000",
  orange: "#FFA500",
  yellow: "#FFFF00",
  green: "#008000",
  blue: "#0000FF",
  violet: "#EE82EE",
};
```
