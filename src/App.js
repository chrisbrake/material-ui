import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Switch, Button, CssBaseline, TextField } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


import FolderIcon from '@material-ui/icons/Folder';

import { RecipeReviewCard } from './ComplexInteraction.js'
import { PrimarySearchAppBar } from './AppBar.js'
import { BottomAppBar } from './BottomAppBar.tsx'

import IOSalad from './IOSalad'

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
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>My Test Page</h1>
      <br />
      <br />
      <br />
      <BottomAppBar />
      <br />
      <br />
      <br />
      <PrimarySearchAppBar />
      <br />
      <br />
      <br />
      <RecipeReviewCard />
      <br />
      <br />
      <br />
      <IOSalad />
      <br />
      <br />
      <br />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
      <br />
      <br />
      <br />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}

export default App;
