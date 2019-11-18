# React Native Storage Item
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)<!-- ALL-CONTRIBUTORS-BADGE:END -->

> Crossplatform React hook for enabling persistence with AsyncStorage/LocalStorage

[![npm version](https://badge.fury.io/js/react-native-storage-item.svg)](https://badge.fury.io/js/react-native-storage-item)

## For React Native

### Install

```sh
yarn add react-native-storage-item @react-native-communit/async-storage
```

### Example

Let's take a look at how you can use `react-native-storage-item`. Here's a typical counter example:

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Button, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { StorageItem, createStorageState } from 'react-native-storage-item';

const counterStorage = new StorageItem({
  key: "counter",
  initialValue: 0,
  provider: AsyncStorage
});
const useStorage = createStorageState(counterStorage);

function App() {
  const [counter, setCounter] = useCounter();
  return (
    <View>
      <Button onPress={() => setCounter(counter - 1)>-</Button>
      <Button onPress={() => setCounter(counter + 1)>+</Button>
    </View>
  )
}

async function init() {
  await counterStorage.init();
  render(<App />, document.getElementById("root"));
}

init();
```

## For Web

### Install

```sh
yarn add react-native-storage-item react-native-web
```

### Example

Let's take a look at how you can use `react-native-storage-item`. Here's a typical counter example:

```javascript
import React from 'react';
import { render } from 'react-dom';
import { AsyncStorage, Button, View } from 'react-native';
// AsyncStorage has not been removed from core in `react-native-web` yet
import { StorageItem, createStorageState } from 'react-native-storage-item';

const counterStorage = new StorageItem({
  key: "counter",
  initialValue: 0,
  provider: AsyncStorage
});
const useStorage = createStorageState(counterStorage);

function App() {
  const [counter, setCounter] = useCounter();
  return (
    <View>
      <Button onPress={() => setCounter(counter - 1)>-</Button>
      <Button onPress={() => setCounter(counter + 1)>+</Button>
    </View>
  )
}

async function init() {
  await counterStorage.init();
  render(<App />, document.getElementById("root"));
}

init();
```

## License

**[MIT](LICENSE)** Licensed

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://jonstuebe.com"><img src="https://avatars0.githubusercontent.com/u/156722?v=4" width="100px;" alt="Jon Stuebe"/><br /><sub><b>Jon Stuebe</b></sub></a><br /><a href="https://github.com/jonstuebe/react-native-storage-item/commits?author=jonstuebe" title="Code">💻</a> <a href="#example-jonstuebe" title="Examples">💡</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!