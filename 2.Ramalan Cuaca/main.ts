var require: any
const apiKey:string = "6c9247533c4d02595be77f0ae8c5cf3b"
const city:string = 'Jakarta';
const axios:any = require('axios')

async function weatherForcast():Promise<void> {
  try {
    const {data} = await axios({
      method:"GET",
      url:`https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric&q=${city}`,
    })
    if(!data){
      throw new Error("failed to get data")
    }
    
    let previousDate:string = "";
    console.log("Weather Forecast:")
    for(let i:number = 0 ; i<data.list.length; i++){
      let temp = data.list[i].main.temp
      const dateWeather:Date = new Date(data.list[i].dt_txt)
      const dateString:string = dateWeather.toISOString().split('T')[0]

      if (dateString !== previousDate) {
        previousDate = dateString; 
        let convertDate:string = dateWeather.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) 
        console.log(`${convertDate}: ${temp}°C`);
      }

    }
   
  } catch (error) {
    console.error(error)
  }
}
weatherForcast()

/*

install --> npm install -g ts-node
run --> ts-node main

*/

