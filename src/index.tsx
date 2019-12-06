import { useEffect, useState } from 'react';

export interface StorageItemOpts {
  key: string;
  initialValue?: any;
  provider: any;
  transform?: {
    get: (value: any) => any;
    set: (value: any) => any;
  };
  type?: any;
}

export class StorageItem {
  key: string;
  value: any;
  provider: any;
  _inferredType: any;
  getTransform: (value: any) => any;
  setTransform: (value: any) => any;

  constructor(opts: StorageItemOpts) {
    this.key = opts.key;
    this.provider = opts.provider;
    this._inferredType = opts.type
      ? opts.type
      : opts.initialValue
      ? typeof opts.initialValue
      : null;
    this.getTransform =
      (opts.transform && opts.transform.get) || this._defaultGetTransform;
    this.setTransform =
      (opts.transform && opts.transform.set) || this._defaultSetTransform;
    this.value = this.getTransform(
      opts.initialValue === false
        ? this.setTransform(opts.initialValue)
        : this.setTransform(opts.initialValue) || null
    );
  }
  _defaultGetTransform(value: any) {
    switch (this._inferredType) {
      case 'string':
      case 'number':
        return value;
      default:
        return JSON.parse(value);
    }
  }
  _defaultSetTransform(value: any) {
    switch (this._inferredType) {
      case 'string':
      case 'number':
        return value;
      default:
        return JSON.stringify(value);
    }
  }
  async init() {
    const value = await this.provider.getItem(this.key);
    if (value !== null) {
      this.value = this.getTransform(value);
    }
    return;
  }
  set(newValue: any) {
    this.value = this.getTransform(this.setTransform(newValue));
    this.provider.setItem(this.key, this.setTransform(newValue));
    return this.value;
  }
  remove() {
    this.value = undefined;
    this.provider.removeItem(this.key);
  }
}

export const useStorageState = (storageItem: StorageItem) => {
  const [state, setState] = useState(storageItem.value);

  useEffect(() => {
    storageItem.set(state);
  }, [state]);

  return [state, setState];
};

export const createStorageState = (storageItem: StorageItem) => {
  return () => useStorageState(storageItem);
};
