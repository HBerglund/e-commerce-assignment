import {
  Box,
  Button,
  createStyles,
  FormControl,
  FormHelperText,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Footer from "../Components/Footer";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

function Contact() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        width: "100%",
        display: "flex",
        flexDirection: matchesMd ? "row" : "column-reverse",
      },
      address: {
        width: matchesMd ? "40%" : "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      form: {
        width: matchesMd ? "60%" : "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      button: {
        maxWidth: "8rem",
        marginTop: "1rem",
      },
    })
  );
  const classes = useStyles();
  return (
    <div>
      <Hero
        lessHeight
        label=''
        title='Contact Us'
        bgImg={imageSources.contactPageHero}
        center
      />
      <Section>
        <div className={classes.root}>
          <Box className={classes.address} mt={2}>
            <Typography variant='h5' component='h2' gutterBottom>
              Address
            </Typography>
            <Typography variant='h6' component='h4'>
              Queen Street 1
            </Typography>
            <Typography variant='h6' component='h4'>
              411 15 Gothenburg
            </Typography>
            <Typography variant='h6' component='h4' gutterBottom>
              Sweden
            </Typography>
            <Typography variant='h5' component='h2'>
              Email
            </Typography>
            <Typography variant='h6' component='h4' gutterBottom>
              support@bhagwan.com
            </Typography>
            <Typography variant='h5' component='h2'>
              Phone
            </Typography>
            <Typography variant='h6' component='h4' gutterBottom>
              +46 701 111 222
            </Typography>
            <Typography variant='h5' component='h2'>
              Social
            </Typography>
            <Typography variant='h6' component='h4'>
              <Facebook />
              <Twitter />
              <LinkedIn />
              <Instagram />
            </Typography>
          </Box>
          <Box className={classes.form}>
            <FormControl margin='normal'>
              <TextField label='Name' color='secondary'>
                Name
              </TextField>
            </FormControl>
            <FormControl margin='normal'>
              <TextField label='Last Name' color='secondary'>
                Last Name
              </TextField>
            </FormControl>
            <FormControl margin='normal'>
              <TextField label='Email' color='secondary'>
                Email
              </TextField>
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl margin='normal'>
              <TextField
                color='secondary'
                id='filled-multiline-static'
                label='Message'
                multiline
                rows={4}
                variant='filled'
              />
              <Button
                color='secondary'
                className={classes.button}
                variant='outlined'
              >
                Send
              </Button>
            </FormControl>
          </Box>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default Contact;
