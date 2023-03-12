import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import ArticleCard from "./ArticleCard";

interface ArticleSummary {
  normal: string;
  explain_like_i_am_5: string;
}

interface Article {
    id: number;
    title: string;
    author: string;
    summary: ArticleSummary;
    tags: string[];
    dewyDecimal: string;
    url: string;
}

function ArticleList(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Fetch articles from the API
    fetch("/test")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
    // or article.content.toLowerCase().includes(searchTerm.toLowerCase())
    || article.tags.join().toLowerCase().includes(searchTerm.toLowerCase())

  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </Grid>
      {filteredArticles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </Grid>
  );
}

export default ArticleList;
