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
import { useCallback, useState } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { register } from "../../redux/auth/actions";
import { ROUTE_LOGIN } from "../index";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

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
    justifyContent: "center",
  },
  size: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    margin: theme.spacing(2, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [image, setImage] = useState("");
  const [skinTypeId, setSkinTypeId] = useState(0);
  const [locationId, setLocationId] = useState(0);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCosmeticBagAvailable, setIsCosmeticBagAvailable] = useState(true);

  const classes = useStyles();

  const { bemBlock, bemElement } = useBem("LoginPage");
  const dispatch = useDispatch();

  function formSubmit(e: any) {
    e.preventDefault();
    dispatch(
      register(
        username,
        password,
        firstName,
        birthday,
        image,
        skinTypeId,
        locationId,
        email,
        phoneNumber,
        isCosmeticBagAvailable
      )
    )
      .then(() => {
        alert("CHECK YOUR EMAIL");
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
              <form
                className={classes.form}
                noValidate
                onSubmit={(e) => formSubmit(e)}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  value={username}
                  autoFocus
                  onChange={(e: any) => setUsername(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e: any) => setFirstName(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="birthday"
                  label="birthday"
                  name="birthday"
                  value={birthday}
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                  onChange={(e: any) => setBirthday(e.target.value)}
                  defaultValue={"2017-05-24"}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="image"
                  label="image"
                  name="image"
                  value={image}
                  onChange={(e: any) => setImage(e.target.value)}
                />
                <InputLabel id="demo-simple-select-label">Тип кожи</InputLabel>
                <Select
                  variant="outlined"
                  required
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="skinTypeId"
                  value={skinTypeId}
                  onChange={(e: any) => setSkinTypeId(e.target.value)}
                >
                  <MenuItem value={2}>Жирная кожа</MenuItem>
                </Select>
                <InputLabel id="demo-simple-select-label1">Локация</InputLabel>
                <Select
                  variant="outlined"
                  required
                  fullWidth
                  labelId="demo-simple-select-label1"
                  id="demo-simple-select1"
                  name="locationId"
                  value={locationId}
                  onChange={(e: any) => setLocationId(e.target.value)}
                >
                  <MenuItem value={1}>Алматы</MenuItem>
                  <MenuItem value={2}>Астана</MenuItem>
                </Select>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  value={email}
                  autoFocus
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  autoFocus
                  onChange={(e: any) => setPhoneNumber(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="isCosmeticBagAvailable"
                  label="isCosmeticBagAvailable"
                  name="isCosmeticBagAvailable"
                  value={isCosmeticBagAvailable}
                  autoFocus
                  onChange={(e: any) =>
                    setIsCosmeticBagAvailable(e.target.value)
                  }
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
                <Box mt={5}></Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </ContentContainer>
    </SectionContainer>
  );
}
