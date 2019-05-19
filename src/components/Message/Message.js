import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Person from '@material-ui/icons/Person';
import PropTypes from "prop-types";

const styles = {
  container: {
    width: '100%',
    height: 'min-content'
  },
  paper: {
    width: '40%',
    margin: '5px 10px',
    padding: 10
  },
  answerContainer: {
    width: '100%',
    height: 'min-content',
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

const Message = (props) => {
  const { classes, message, answer } = props;

  let mockMessage;

  if (answer) {
    mockMessage = (
      <div className={classes.answerContainer}>
        <Paper className={classes.paper}>
          <Person/>
          <Typography component="p">
            {answer}
          </Typography>
        </Paper>
      </div>
    )
  }

  return (
    <React.Fragment>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Person/>
          <Typography component="p">
            {message}
          </Typography>
        </Paper>
      </div>
      {mockMessage}
    </React.Fragment>
  );
};

Message.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired
};

export default withStyles(styles)(Message);