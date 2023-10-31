import React, { useEffect } from 'react'

function About() {

    useEffect(() => {

    }, [])
    
    const logCapitalByCountryName = (name) => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error))
    }
    
    const callback = (data) => {
        if(data[0]){
            console.log(`Captial: ${data[0].capital[0]}`)
            let arrOfBorderCountries = ''
            console.log(data[0])
            for (let index = 0; index < data[0].borders.length; index++) {
                const element = data[0].borders[index];
                arrOfBorderCountries += element
                if(index !== data[0].borders.length -1){
                    arrOfBorderCountries += ", "
                }
            }
            console.log(`Border Countries: ${arrOfBorderCountries}`)
        } else {
            console.log(`Entered Country does not exist`)
        }

    }

    
    logCapitalByCountryName("brazil")
    logCapitalByCountryName("sdf")
  return (
    <div>About</div>
  )
}

export default About