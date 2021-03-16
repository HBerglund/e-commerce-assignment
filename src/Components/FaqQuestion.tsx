import {
  createStyles,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";

interface Props {
  id: number;
  question: string;
  answer: string;
}

function FaqQuestion(props: Props) {
  const theme = useTheme();
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        marginBottom: "1rem",
        borderBottom: `1px solid ${theme.palette.grey["400"]}`,
        padding: "1.5rem 0",
      },
      question: { cursor: "pointer" },
    })
  );
  const classes = useStyles();
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className={classes.root}>
      <Typography
        variant="body1"
        className={classes.question}
        onClick={() => {
          setShowAnswer((prevState) => !prevState);
        }}
        gutterBottom
      >
        {props.question}
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        style={{ display: showAnswer ? "block" : "none" }}
      >
        {props.answer}
      </Typography>
    </div>
  );
}

export default FaqQuestion;
