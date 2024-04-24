import {Storage} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';
import Config from 'react-native-config';

const storage = new MMKV({
  id: Config.PERSISTENT_KEY_STORE,
});

export const clientStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};
