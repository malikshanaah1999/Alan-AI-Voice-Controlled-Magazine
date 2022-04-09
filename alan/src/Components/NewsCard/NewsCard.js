import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material'

const NewsCard = (props) => {
   

   const a = props.article.articles[props.count].description
   const b = props.article.articles[props.count].title
   const c = props.article.articles[props.count].source.name
   const d = props.article.articles[props.count].publishedAt
   const x = props.article.articles[props.count].urlToImage
   

  return (
    <Card>
        <CardActionArea>
            <CardMedia image={x || 'Error'} />
            <div>
                <Typography variant='body2' color='textSecondary' component='h2' >{(new Date(d)).toDateString()}</Typography>
                <Typography variant='body2' color='textSecondary' component='h2' >{c}</Typography>
            </div>
            <Typography gutterBottom variant='h5' >{b}</Typography>
            <CardContent>
                 <Typography variant='body2' color='textSecondary' component='h2' >{a}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size='small' color='primary' >Learn more</Button>
            <Typography variant='h5' color='textSecondary' >{1+(props.count)}</Typography>
        </CardActions>
    </Card>
  )
}

export default NewsCard