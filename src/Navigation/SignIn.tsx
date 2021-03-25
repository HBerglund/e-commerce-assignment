import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "../Components/Section";
import { ChangeEvent, useState } from "react";
import { isEqual } from "lodash";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const [logInProgress, setLogInProgress] = useState("default");
  const [userInputs, setUserInputs] = useState({
    username: "",
    password: "",
  });

  const validUserDetails = {
    username: "bhagwan",
    password: "bhaggy",
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      maxWidth: "500px",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    errorText: {
      color: "rgba(255, 0, 0, 0.7)",
    },
  }));

  const handleUserInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInputs({
      ...userInputs,
      [e.target.name]: value,
    });
  };

  const history = useHistory();

  const validateLogin = () => {
    if (isEqual(userInputs, validUserDetails)) {
      history.push("/admin");
    } else {
      setLogInProgress("failure");
    }
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      validateLogin();
    }
  });

  const classes = useStyles();

  return (
    <Section>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in as Admin
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
            onChange={handleUserInputs}
            value={userInputs.username}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={userInputs.password}
            onChange={handleUserInputs}
          />
          {logInProgress === "failure" ? (
            <Typography className={classes.errorText}>
              Wrong username or password
            </Typography>
          ) : (
            <div></div>
          )}

          <Button
            onClick={validateLogin}
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Section>
  );
}
