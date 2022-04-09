import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import {Grid, Grow, Typography} from '@mui/material'
import useStyles from './Styles.js'



const NewsCards = (props) => {
    console.log(props)
    const news = props.articles
    var count = 0
  
  return (
<Grow in>
      <Grid  container alignItems='stretch' spacing={3}>
         {
             Object.keys(news).map( i =>(
                 <Grid key={i} item xs={12} sm ={6} md ={4} lg ={3} style={{display:'flex'}}>
                        <NewsCard article={news} count ={count} />
                        {count++}
                 </Grid>
             ))
         }
      </Grid>
</Grow>
 
  )
}

export default NewsCards