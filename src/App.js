import React from 'react';
import { Switch } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

const App = (props) => {
  let [checked, setChecked] = React.useState(true);

  const toggleChecked = () => {
    window.console.log(`Setting checked to ${!checked}`)
    setChecked(!checked)
  };

  return (
    <ThemeProvider >
      <Switch color="primary" checked={checked} onChange={toggleChecked} />
    </ThemeProvider>
  );
}

export default App;
