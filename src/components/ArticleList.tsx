import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyCard = styled(Card)({
  cursor: "pointer",
});

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

function ArticleList(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch articles from the API
    fetch("/test")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (id: number) => {
    if (id === expandedId) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

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
        <Grid item xs={12} sm={6} md={4} key={article.id}>
          <MyCard onClick={() => handleCardClick(article.id)}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {article.title}
              </Typography>
              {expandedId === article.id ? (
                <Typography variant="body1" color="textPrimary" component="p">
                  {article.content}
                </Typography>
              ) : (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {article.excerpt}
                </Typography>
              )}
            </CardContent>
          </MyCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default ArticleList;
