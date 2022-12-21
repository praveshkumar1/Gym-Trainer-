export const exerciseOptions  = {
    method: 'GET',

    headers: {
      'X-RapidAPI-Key': '59107623bbmsh4c898d2e67ae94bp103ce7jsnb218c8764b67',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };


export const fetchData=async(url,options)=>{
 const response =await fetch(url,options);
 const data= await response.json();
return data;
}


