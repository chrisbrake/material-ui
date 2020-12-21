import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Switch, Button, CssBaseline, TextField } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const App = (props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      primary: { main: "#E87200" },
      secondary: { main: "#004E59" },
      type: prefersDarkMode ? 'dark' : 'light',
    },
  }),
    [prefersDarkMode],
  );

  let [primaryChecked, setPrimaryChecked] = React.useState(true);
  let [secondaryChecked, setSecondaryChecked] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />



      <h1>My Test Page</h1>


      <Switch color="primary" checked={primaryChecked} onChange={() => setPrimaryChecked(!primaryChecked)} />
      <Switch color="secondary" checked={secondaryChecked} onChange={() => setSecondaryChecked(!secondaryChecked)} />


      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>

      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>

      <form>
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>

    </ThemeProvider>
  );
}

export default App;
