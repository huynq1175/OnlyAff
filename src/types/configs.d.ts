declare module 'react-native-config' {
  export interface NativeConfig {
    PERSISTENT_KEY_STORE: string;
    PERSISTENT_KEY_ENCRYPTION: string;

    STOREFRONT_API_VERSION: string;
    STOREFRONT_PERSISTENT_KEY_STORE: string;
    STOREFRONT_PERSISTENT_KEY_ENCRYPTION: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
