import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Switch, ButtonGroup, Button,Stack,Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyCard = styled(Card)({
    cursor: "pointer",
});

interface ArticleSummary {
    normal: string;
    explain_like_i_am_5: string;
}

interface Article {
    article: {
        id: number;
        title: string;
        author: string;
        summary: ArticleSummary;
        tags: string[];
        dewyDecimal: string;
        url: string;
    };
}

function ArticleCard({ article }: Article): JSX.Element {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>("normal");

    const handleCardClick = () => {
        setExpanded(!expanded);
    };

    const handleLanguageSwitch = (summaryLevel: React.SetStateAction<string>) => {
        setLanguage(summaryLevel);
    };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <MyCard >
                <CardContent>
                    <Typography variant="h5" onClick={handleCardClick} component="h2">
                        {article.title}
                    </Typography>
                    {expanded ? (
                        <div>
                            <ButtonGroup sx={{ py: '1rem' }} variant="outlined" aria-label="outlined button group">
                                <Button color={language == 'normal' ?'secondary':'primary'} onClick={()=>{handleLanguageSwitch('normal')}}>Standard</Button>
                                <Button color={language == 'explain_like_i_am_5' ?'secondary':'primary'} onClick={()=>{handleLanguageSwitch('explain_like_i_am_5')}}>Simplified</Button>
                            </ButtonGroup>
                            <Typography
                                variant="body1"
                                color="textPrimary"
                                component="p"
                                sx={{ py: '1rem' }}
                            >
                                {language === "normal"
                                    ? article.summary.normal
                                    : article.summary.explain_like_i_am_5}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                {article.tags.map((tag) => (
                                    <Chip label={tag} />
                                ))}
                            </Stack>
                            {/* a button that goes to the article.url */}
                            <Button onClick={()=>{window.location.replace(article.url)}} sx={{ my: '1rem' }}>Read More</Button>

                        </div>
                    ) : (
                        ""
                    )}
                </CardContent>
            </MyCard>
        </Grid>
    );
}

export default ArticleCard;
