import React from 'react';
import { Switch } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

const App = (props) => {

  let [checked, setChecked] = React.useState(true);

  return (
    <ThemeProvider >
      <Switch color="primary" checked={checked} onChange={() => setChecked(!checked)} />
    </ThemeProvider>
  );
}

export default App;
