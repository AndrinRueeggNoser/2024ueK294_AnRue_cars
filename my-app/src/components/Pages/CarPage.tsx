

 function CarPage() {

    type Car = {
        Name: string,
        Miles_per_Gallon: number,
        Cylinders: number,
        Displacement: number,
        Horsepower: number,
        Weight_in_lbs: number,
        Acceleration: number,
        Year: string,
        Origin: string,
        id: number
    }

 
    let cars : Car[] = [
        {
            "Name": "chevrolet chevelle malibu",
            "Miles_per_Gallon": 18,
            "Cylinders": 8,
            "Displacement": 307,
            "Horsepower": 130,
            "Weight_in_lbs": 3504,
            "Acceleration": 12,
            "Year": "1970-01-01",
            "Origin": "USA",
            "id": 1
        },
        {
            "Name": "buick skylark 320",
            "Miles_per_Gallon": 15,
            "Cylinders": 8,
            "Displacement": 350,
            "Horsepower": 165,
            "Weight_in_lbs": 3693,
            "Acceleration": 11.5,
            "Year": "1970-01-01",
            "Origin": "USA",
            "id": 2
        }]

        
 
    return (
     <div id="app">
         {cars.map((car, index) => (
          <p className="center" key={index}>
              Car Name: {car.Name} <br></br>
              Miles per Gallon: {car.Miles_per_Gallon} <br></br>
              Cylinders: {car.Cylinders} <br></br>
              Displacement: {car.Displacement} <br></br>
              Horsepower: {car.Horsepower} <br></br>
              Weight in lbs: {car.Weight_in_lbs} <br></br>
              Acceleration: {car.Acceleration} <br></br>
              Year: {car.Year} <br></br>
              Origin: {car.Origin} <br></br>
              ID: {car.id} <br></br>
          </p>
         ))}
     </div>
    );
}


   


export default CarPage;