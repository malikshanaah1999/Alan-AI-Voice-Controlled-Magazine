import React, {useState, useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './Components/NewsCards/NewsCards';

const alanKey = '29ee32de4916668c580f5060db3698e92e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = ()=> {
   const [newsArticles, setNewsArticles] = useState([])

    useEffect(()=>{  // To Manage side effects !
      alanBtn({
        key: alanKey,
        onCommand:({command, articles})=>{
          if(command === 'newsHeadlines'){
           setNewsArticles(articles)
          }
        }
      })
    }, [])

    

    return(
      <NewsCards articles ={newsArticles}/>

    )
}

export default App;
