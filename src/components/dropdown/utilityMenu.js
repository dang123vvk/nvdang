import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import useTrans from '../hooks/useTrans';

export default function UtilityMenu({anchorRef, open, handleClose, handleListKeyDown, onClick}) {
  const t = useTrans()
  return (
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{zIndex: 1}}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList >
                    <MenuItem onClick={e=>onClick(e,'/utilities/resume')}>{t.menu.utility.cv}</MenuItem>
                    <MenuItem onClick={handleClose}>{t.menu.utility.ecommerce}</MenuItem>
                    <MenuItem >{t.menu.utility.testing}</MenuItem>
                    <MenuItem  onClick={e=>onClick(e,'/utilities/toeic')}>{t.menu.utility.toeic}</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
  );
}
