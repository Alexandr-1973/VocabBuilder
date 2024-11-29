
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import css from "./ActionsBtn.module.css"

const ActionsBtn=()=> {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={css.genDiv}>
      <Button aria-describedby={id} className={css.ActionsBtn} onClick={handleClick}>
        ...
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography >The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}

export default ActionsBtn;
