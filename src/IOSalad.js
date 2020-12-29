import React from 'react';

import { Switch, Button, TextField } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import RouterIcon from '@material-ui/icons/Router';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import PortableWifiOffIcon from '@material-ui/icons/PortableWifiOff';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';


const IOSalad = (props) => {

  let [primaryChecked, setPrimaryChecked] = React.useState(true);
  let [secondaryChecked, setSecondaryChecked] = React.useState(true);
  let [oneWayTrip, setOneWayTrip] = React.useState(false);

  return (
    <div>
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
      {/* disabling prevents clicks from registering */}
      <IconButton disabled={oneWayTrip} onClick={() => setOneWayTrip(!oneWayTrip)}>
        <SettingsRemoteIcon />
      </IconButton>

      <IconButton aria-label="router">
        <RouterIcon />
      </IconButton>
      <IconButton onClick={() => setPrimaryChecked(!primaryChecked)}>
        {/* Icon swap based on state */
          (primaryChecked) ? <WifiTetheringIcon /> : <PortableWifiOffIcon />}
      </IconButton>

      <IconButton aria-label="remove">
        <RemoveIcon />
      </IconButton>
      <IconButton aria-label="add">
        <AddIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete">
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
      <Button variant="contained"> Default </Button>
      <Button variant="contained" color="primary"> Primary </Button>
      <Button variant="contained" color="secondary"> Secondary </Button>
      <Button variant="contained" disabled> Disabled </Button>
      <Button variant="contained" color="primary" href="#contained-buttons"> Link </Button>
      <br />
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary"> Primary </Button>
      <Button variant="outlined" color="secondary"> Secondary </Button>
      <Button variant="outlined" disabled> Disabled </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons"> Link </Button>
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
    </div>
  );
}

export default IOSalad;
