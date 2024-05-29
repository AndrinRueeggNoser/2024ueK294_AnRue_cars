import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import CarDataService from "../../Service/CarDataService";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';


const ViewPage = () => {
  const carId = Number(useParams().id)

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [Miles_per_Gallon, setMiles_per_Gallon] = useState("");
  const [Cylinders, setCylinders] = useState("");
  const [Displacement, setDisplacement] = useState("");
  const [Horsepower, setHorsepower] = useState("");
  const [Weight_in_lbs, setWeight_in_lbs] = useState("");
  const [Acceleration, setAcceleration] = useState("");
  const [Origin, setOrigin] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carData = await CarDataService.getCarById(carId)
        setName(carData.Name);
        setYear(carData.Year);
        setMiles_per_Gallon(carData.Miles_per_Gallon);
        setCylinders(carData.Cylinders);
        setDisplacement(carData.Displacement);
        setHorsepower(carData.Horsepower);
        setWeight_in_lbs(carData.Weight_in_lbs);
        setAcceleration(carData.Acceleration);
        setOrigin(carData.Origin);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [carId]);

  return (
    <>
      <Typography>
        <h1>Detailed version</h1>
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" style={{ backgroundColor: '#00008B', padding: '20px', borderRadius: '10%' }}>
    <Grid item xs={6}>
      <Typography align="center">
        Name: {name}
      </Typography>
      <Typography align="center">
        Year: {year}
      </Typography>
      <Typography align="center">
        Miles per Galoon: {Miles_per_Gallon}
      </Typography>
      <Typography align="center">
        Cylinders: {Cylinders}
      </Typography>
      <Typography align="center">
        Displacement: {Displacement}
      </Typography>
      <Typography align="center">
        Horsepower: {Horsepower}
      </Typography>
      <Typography align="center">
        Weight in lbs: {Weight_in_lbs}
      </Typography>
      <Typography align="center">
        Acceleration: {Acceleration}
      </Typography>
      <Typography align="center">
        Origin: {Origin}
      </Typography>
    </Grid>
  </Box>
    </>
  );
};

export default ViewPage;
