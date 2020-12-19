import React from 'react';
import { Switch } from '@material-ui/core';

function App() {
  let [checked, setChecked] = React.useState(true);

  const toggleChecked = () => {
    window.console.log(`Setting checked to ${!checked}`)
    setChecked(!checked)
  };
  
  return <Switch color="primary" checked={checked} onChange={toggleChecked} />;
}

export default App;
