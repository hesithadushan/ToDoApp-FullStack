import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './src/utils/theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation/>
        <StatusBar
        translucent
        />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

