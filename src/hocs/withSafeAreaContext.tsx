import React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

/**
 *
 * @param WrappedComponent
 * @returns Custom Higher Order Component to wrap screens to safe area
 */
const withSafeArea = (WrappedComponent: any) => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  return (props: any) => {
    return (
      <SafeAreaProvider>
        <WrappedComponent {...props} />
      </SafeAreaProvider>
    );
  };
};

export default withSafeArea;
