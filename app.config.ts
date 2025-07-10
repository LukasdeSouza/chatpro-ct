import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
<<<<<<< HEAD
    name: 'IuConnect App',
    slug: process.env.EXPO_PUBLIC_APP_SLUG || 'chatwoot-mobile',
=======
    name: 'iuConnect App',
    slug: process.env.EXPO_PUBLIC_APP_SLUG || 'iuConnect-mobile',
>>>>>>> 68472ea177db0f4c1b04e2d12d3211a3d6ff40a3
    version: '4.0.19',
    orientation: 'portrait',
    icon: './assets/logo_iuconnect_jpeg.jpeg',
    userInterfaceStyle: 'light',
    newArchEnabled: false,
    splash: {
      image: './assets/logo_iuconnect_jpeg.jpeg',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
      enableFullScreenImage_legacy: true,
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.chatwoot.app',
      infoPlist: {
        NSCameraUsageDescription:
          'This app requires access to the camera to upload images and videos.',
        NSPhotoLibraryUsageDescription:
          'This app requires access to the photo library to upload images.',
        NSMicrophoneUsageDescription: 'This app requires access to the microphone to record audio.',
        NSAppleMusicUsageDescription:
          'This app does not use Apple Music, but a system API may require this permission.',
        UIBackgroundModes: ['fetch', 'remote-notification'],
        ITSAppUsesNonExemptEncryption: false,
      },
      // Please use the relative path to the google-services.json file
      googleServicesFile: './google-services.json',
      entitlements: { 'aps-environment': 'production' },
      associatedDomains: ['applinks:app.chatwoot.com'],
    },
    android: {
      adaptiveIcon: { foregroundImage: './assets/logo_iuconnect_jpeg.jpeg', backgroundColor: '#ffffff' },
      package: 'com.chatwoot.app',
      permissions: [
        'android.permission.CAMERA',
        'android.permission.READ_EXTERNAL_STORAGE',
        'android.permission.WRITE_EXTERNAL_STORAGE',
        'android.permission.RECORD_AUDIO',
        'android.permission.READ_MEDIA_IMAGES',
      ],
      // Please use the relative path to the google-services.json file
      googleServicesFile: './google-services.json',
      intentFilters: [
        {
          action: 'VIEW',
          autoVerify: true,
          data: [
            {
              scheme: 'https',
              host: 'app.chatwoot.com',
              pathPrefix: '/app/accounts/',
              pathPattern: '/*/conversations/*',
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    extra: {
      eas: {
        projectId: '819f914a-f0c7-4b7e-8547-6ba15cf12a8d',
        storybookEnabled: process.env.EXPO_STORYBOOK_ENABLED,
      },
    },
    owner: 'lukasenvor',
    plugins: [
      'expo-font',
      ['react-native-permissions', { iosPermissions: ['Camera', 'PhotoLibrary', 'MediaLibrary'] }],
      [
        '@sentry/react-native/expo',
        {
          url: 'https://sentry.io/',
          project: process.env.EXPO_PUBLIC_SENTRY_PROJECT_NAME,
          organization: process.env.EXPO_PUBLIC_SENTRY_ORG_NAME,
        },
      ],
      '@react-native-firebase/app',
      '@react-native-firebase/messaging',
      [
        'expo-build-properties',
        {
          // https://github.com/invertase/notifee/issues/808#issuecomment-2175934609
          android: {
            minSdkVersion: 24,
            compileSdkVersion: 35,
            targetSdkVersion: 34,
            enableProguardInReleaseBuilds: true,
          },
          ios: { useFrameworks: 'static' },
        },
      ],
      './with-ffmpeg-pod.js',
    ],
    androidNavigationBar: { backgroundColor: '#ffffff' },
  };
};
