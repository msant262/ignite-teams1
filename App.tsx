import Groups from '@screens/Groups';
import {ThemeProvider} from 'styled-components';
import theme from '@theme/index';
import { ActivityIndicator } from 'react-native';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Groups />
   </ThemeProvider>
  );
}