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
  let [primaryChecked, setPrimaryChecked] = React.useState(true);
  let [secondaryChecked, setSecondaryChecked] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />


      <h1>My Test Page</h1>
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
      <Switch color="default" checked={primaryChecked} onChange={() => setPrimaryChecked(!primaryChecked)} />
      <Switch color="primary" checked={primaryChecked} onChange={() => setPrimaryChecked(!primaryChecked)} />
      <Switch color="secondary" checked={secondaryChecked} onChange={() => setSecondaryChecked(!secondaryChecked)} />
      <Switch disabled checked={secondaryChecked} onChange={() => setSecondaryChecked(!secondaryChecked)} />

      <br />
      <br />
      <br />

      <div>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
      </Button>
        {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        <Button
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
        >
          Send
      </Button>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Upload
      </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
      </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
      </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
      </Button>
      </div>
      <br />
      <br />
      <br />
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <br />
      <br />
      <br />
      <Button variant="contained">
        Default
      </Button>
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

      <Button variant="outlined">
        Default
      </Button>
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
      <br />
      <br />
      <br />
      <form>
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>


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
