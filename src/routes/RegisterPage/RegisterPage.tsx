import * as React from "react";
import useBem from "../../hooks/useBem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./RegisterPage.scss";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import { useState } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { register } from "../../store/auth/actions";
import { ROUTE_LOGIN } from "../index";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: `#fff`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  size: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  paper: {
    margin: theme.spacing(2, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function RegisterPage() {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const { bemBlock, bemElement } = useBem("LoginPage");
  const dispatch = useDispatch();

  function formSubmit(e: any) {
    e.preventDefault();
    dispatch(register(name, surname, email, age, password))
      .then(() => {
        console.log("Amanbek the best");
        window.location.href = "/login";
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <Grid container component="main" className={classes.root}>
          <Grid
            className={classes.size}
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={1}
            square
          >
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Создайте аккаунт
              </Typography>
              <form className={classes.form} noValidate onSubmit={(e) => formSubmit(e)}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Имя"
                  name="name"
                  value={name}
                  autoFocus
                  onChange={(e: any) => setName(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="surname"
                  label="Фамилия"
                  name="surname"
                  value={surname}
                  autoFocus
                  onChange={(e: any) => setSurname(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="age"
                  label="Возраст"
                  name="age"
                  value={age}
                  autoFocus
                  onChange={(e: any) => setAge(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Почта"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Запомнить меня"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Создать аккаунт
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href={ROUTE_LOGIN} variant="body2">
                      Уже есть аккаунт? Войдите
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </ContentContainer>
    </SectionContainer>
  );
}
