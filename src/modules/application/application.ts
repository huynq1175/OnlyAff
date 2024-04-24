import {AppStateStatus, NativeEventSubscription} from 'react-native';
import {allSettled} from './util';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import type {Persistor} from 'redux-persist';
import {Store} from '@reduxjs/toolkit';
import {RootState} from '@redux/rootReducer.ts';
import Config from 'react-native-config';
import {MMKVWrapper, persistCache} from 'apollo3-cache-persist';
import {MMKV} from 'react-native-mmkv';

export class Application {
  store: Store<RootState>;
  persistor: Persistor;

  /**
   * current app state
   */
  appState: AppStateStatus | 'unknown' = 'unknown';

  /**
   * subscription for propagating changes to appState
   */
  appStateSubscription: NativeEventSubscription | null = null;

  // @ts-ignore
  apolloClient: ApolloClient<any>;

  isInitialized?: boolean;

  private destroyed = false;

  constructor({store, persistor}: {store: Store; persistor: Persistor}) {
    this.store = store;
    this.persistor = persistor;
  }

  /**
   * Initializes the client plugins, settings and subscribers.
   * Can only be called once.
   */
  async init() {
    try {
      if (this.isInitialized) {
        console.warn('application is initialized');
        return;
      }

      await allSettled([this.reduxStoreReady(), this.initializeApolloClient()]);

      this.isInitialized = true;
    } catch (e: unknown | Error) {
      console.error('Initial error', e);
    }
  }

  private async reduxStoreReady() {
    return new Promise<void>(resolve => {
      if (this.persistor.getState().bootstrapped) {
        resolve();
      } else {
        this.persistor.subscribe(() => {
          const {bootstrapped} = this.persistor.getState();
          if (bootstrapped) {
            resolve();
          }
        });
      }
    });
  }

  private async initializeApolloClient() {
    const cache = new InMemoryCache();

    const storage = new MMKV({
      id: Config.STOREFRONT_PERSISTENT_KEY_STORE,
    });

    await persistCache({
      cache,
      storage: new MMKVWrapper(storage),
      maxSize: false,
    });

    this.apolloClient = new ApolloClient({
      uri: 'https://onlyaff.weebuild.io/rpc/graphql',
      cache,
      headers: {
        'Content-Type': 'application/json',
        // 'X-Shopify-Storefront-Access-Token': storefrontApiToken,
      },
      connectToDevTools: __DEV__,
    });
  }
}
