import React from 'react';
import { colors, Switch } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const App = (props) => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.purple[500],
      },
      secondary: {
        main: colors.green[500],
      },
    },
  });

  let [checked, setChecked] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Switch color="primary" checked={checked} onChange={() => setChecked(!checked)} />
    </ThemeProvider>
  );
}

export default App;
