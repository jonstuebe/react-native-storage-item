import { AsyncStorage } from 'react-native';
import { StorageItem } from '../src';

describe('StorageItem', () => {
  it('value gets set based off of initial value (string)', () => {
    const fooStorage = new StorageItem({
      key: 'foo',
      initialValue: 'bar',
      type: 'string',
      provider: AsyncStorage,
    });

    expect(fooStorage.value).toBe('bar');
  });
  it('setting a new value to storage works', async () => {
    const fooStorage = new StorageItem({
      key: 'foo',
      initialValue: 'bar',
      type: 'string',
      provider: AsyncStorage,
    });

    fooStorage.set('a different value');

    expect(AsyncStorage.getItem('foo')).resolves.toEqual('a different value');
  });
  it('deleting value is successful', () => {
    const fooStorage = new StorageItem({
      key: 'foo',
      initialValue: 'bar',
      type: 'string',
      provider: AsyncStorage,
    });

    fooStorage.remove();

    expect(AsyncStorage.getItem('foo')).resolves.toEqual(null);
  });
});
