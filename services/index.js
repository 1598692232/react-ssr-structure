import fetch from 'isomorphic-unfetch';

export default async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log(`Show data . Count: ${data.length}`);
    
    return {
      shows: data
    };
  }