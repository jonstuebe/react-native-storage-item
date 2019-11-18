# React Native Storage Item

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
