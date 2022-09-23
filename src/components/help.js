
import axios from "axios" 

 export const getData = ()=>{
    const options = {
        method: "GET",
        url: "https://movies-app1.p.rapidapi.com/api/movies",
        headers: {
          "X-RapidAPI-Key": "0b4230c6cfmsh9711580c28626f1p10fcbejsn0193c16c40b5",
          "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
        },
      };
    
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.results[0]);
        })
        .catch(function (error) {
          console.error(error);
        });
}
