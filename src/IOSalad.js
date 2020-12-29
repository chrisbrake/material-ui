import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Switch, Button, TextField} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';




const IOSalad = (props) => {

  let [primaryChecked, setPrimaryChecked] = React.useState(true);
  let [secondaryChecked, setSecondaryChecked] = React.useState(true);

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
    </div>
  );
}

export default IOSalad;
