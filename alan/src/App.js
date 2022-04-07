import React, { useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = '29ee32de4916668c580f5060db3698e92e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = ()=> {
    useEffect(()=>{
      alanBtn({
        key: alanKey,
        onCommand:({command, articles})=>{
          if(command === 'newsHeadlines'){
            console.log(articles)
          }
        }
      })
    }, [])
}

export default App;
