import React, { ReactElement } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: '40px',
    marginTop: '20px',
  },
}));

type Props = {
  children: ReactElement,
}

const Content = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {children}
    </Paper>
  );
};

export default Content;
