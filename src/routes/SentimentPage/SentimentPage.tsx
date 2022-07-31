import * as React from "react";
import useBem from "../../hooks/useBem";
import "./SentimentPage.scss";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Sentiment = require("sentiment");

export default function SentimentPage() {
  const [comment, setComment] = useState("");
  const [result, setResult] = useState("");
  const { bemBlock, bemElement } = useBem("SentimentPage");

  console.log(Sentiment, "Sentiment");

  function getAnalyze() {
    let sentiment = new Sentiment();
    let analyzeResult = sentiment.analyze(comment);
    if (analyzeResult.score > 0) {
      setResult("Позитивный");
    }
    if (analyzeResult.score < 0) {
      setResult("Негативный");
    }
    if (analyzeResult.score === 0) {
      setResult("Нейтральный");
    }
  }

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <div className={bemElement("analysis-container")}>
          <h2>Напишите комментарий на английском</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="comment"
            label="Комментарий"
            type="text"
            id="comment"
            onChange={(e: any) => setComment(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              getAnalyze();
            }}
          >
            Проверить
          </Button>
          <h1>{result}</h1>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
