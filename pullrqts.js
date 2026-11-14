/*const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = "DEMO_KEY" //config.NASA_API_KEY


const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    const bkgd = document.getElementById("background");
    bkgd.setAttribute("background-image", data.hdurl)
  } catch (error) {
    console.log(error)
  }
}


fetchNASAData()*/

//Temp
const bkgd = document.getElementById("background");
bkgd.setAttribute("background-image", "https://assets.science.nasa.gov/dynamicimage/assets/science/cds/apod/apod/2026/september/M83_Final2_1x.jpg?w=3828&h=3798&fit=clip&crop=faces%2Cfocalpoint")
