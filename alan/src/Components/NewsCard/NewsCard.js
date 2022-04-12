import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material'


const NewsCard = (props) => {
    const styleCard = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
        
    }
    const styleDiv = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    }
    const styleTypo = {
        padding: '0 16px',
    }
    const styleAction = {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      }
    

   const a = props.article.articles[props.count].description
   const b = props.article.articles[props.count].title
   const c = props.article.articles[props.count].source.name
   const d = props.article.articles[props.count].publishedAt
   const x = props.article.articles[props.count].urlToImage
   const z = props.article.articles[props.count].url
   // Styles for the cardMedia must be declared to show the image, otherwise the image won't be  shown

  return (
    <Card style={styleCard}>
        <CardActionArea href={z} target ='_blank'>
            <CardMedia image={x} style={{height:150,}} /> 
            <div  style={styleDiv}>
                <Typography variant='body2' color='textSecondary' component='h2' >{(new Date(d)).toDateString()}</Typography>
                <Typography variant='body2' color='textSecondary' component='h2' >{c}</Typography>
            </div>
            <Typography gutterBottom variant='h5' style={styleTypo} >{b}</Typography>
            <CardContent>
                 <Typography variant='body2' color='textSecondary' component='h2' >{a}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions style={styleAction}>
            <Button href={z} size='small' color='primary' >Learn more</Button>
            <Typography variant='h5' color='textSecondary' >{1+(props.count)}</Typography>
        </CardActions>
    </Card>
  )
}

export default NewsCard