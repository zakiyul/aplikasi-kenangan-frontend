import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import gambar from "./images/memories.png";
import useStyles from "./styles";

function App() {
  const kelas = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={kelas.appBar} position="static" color="inherit">
        <Typography className={kelas.heading} variant="h2" align="center">
          Kenangan
        </Typography>
        <img className={kelas.image} src={gambar} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
