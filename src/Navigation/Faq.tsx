import { createStyles, makeStyles, Typography } from "@material-ui/core";
import Section from "../Components/Section";
import faqQuestions from "../faqQuestions";
import FaqQuestion from "../Components/FaqQuestion";
import Hero from "../Components/Hero";
import { useEffect } from "react";
import imageSources from "../assets/imageSources";

function Faq() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {},
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero
        lessHeight
        label=""
        title="FAQ"
        bgImg={imageSources.faqPageHero}
        center
      />
      <Section>
        <Typography variant="h5" component="h1" gutterBottom>
          Frequently asked questions
        </Typography>
        {faqQuestions.map(({ id, question, answer }) => (
          <FaqQuestion key={id} id={id} question={question} answer={answer} />
        ))}
      </Section>
    </div>
  );
}

export default Faq;
