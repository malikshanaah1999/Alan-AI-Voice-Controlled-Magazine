import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import {Grid, Grow, Typography} from '@mui/material'




const NewsCards = (props) => {
 
    const news = props.articles
    const newsLength = props.articles.length
    console.log(newsLength)
    var count = 0

    const infoCards = [
        { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
        { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
        { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
        { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
      ];
      
      if(newsLength === 0){
        return(
            <Grid  container alignItems='stretch' spacing={3} style={{padding: '0 5%', width: '100%', margin: 0,}}>
                  {
                      infoCards.map((infoCard)=>(
                             <Grid item xs ={12} sm ={6} md={4} lg={3} style={{display: 'flex', flexDirection: 'column', textAlign: 'center',}}>
                                   <div style={{display: 'flex',flexDirection: 'column',justifyContent: 'space-between',alignItems: 'center',width: '100%',height: '45vh', padding: '10%',borderRadius: 10,color: 'white',backgroundColor:infoCard.color}} >
                                          <Typography variant='h5' >{infoCard.title}</Typography>
                                          {infoCard.info? (<Typography variant='h6' >
                                              <strong>
                                                  {infoCard.title}
                                              </strong>
                                              <br/>
                                             {infoCard.info}
                                           </Typography>) : null}
                                          <Typography variant='h6' ><i>Try saying : <br/> {infoCard.text}</i></Typography>
                                   </div>
                             </Grid>

                      ))
                  }
           </Grid>
            
            
        )
    }
    
  
  return (
<Grow in>
      <Grid  container alignItems='stretch' spacing={3} style={{padding: '0 5%', width: '100%', margin: 0,}}>
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