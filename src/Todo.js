import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import { 
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography
} from '@material-ui/core';
  
import { 
  ReactComponent as DeleteIcon
} from './mui-delete-icon.svg';

const useStyles = makeStyles((theme) => ({
  '@keyframes fadeInAnimation': { 
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  todo: {
    display: 'inline-block',
    width: 'fit-content',
    borderRadius: 3,
    padding: '5px 10px',
    margin: 0,
    animation: '$fadeInAnimation ease-in 0.25s',
    animationIterationCount: 1, 
    animationFillMode: 'forwards',
  },
  description: {
    marginRight: 5,
    color: 'black',
  },
  remove: {
    padding: 2,
    background: '#94880a',
    color: '#ffffff',
    borderRadius: 3,
    width: 16,
    height: 16,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s ease',
  }
}));

const Todo = ({ id, description, handleRemove }) => { 
  const classes = useStyles();
  return (
    <ListItem className={classes.todo} disableGutters>
      <ListItemText
        className={classes.desciption}
        primary={
          <Typography variant="body1">
            {description}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton 
          aria-label="remove-btn"
          onClick={() => handleRemove(id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
};

export default Todo;