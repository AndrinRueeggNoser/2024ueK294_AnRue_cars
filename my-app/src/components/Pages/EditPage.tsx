import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useParams, useNavigate } from "react-router-dom";
import CarDataService from "../../Service/CarDataService";

const EditPage = () => {
  const { id } = useParams();
  const carId = Number(id);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [milesPerGallon, setMilesPerGallon] = useState("");
  const [cylinders, setCylinders] = useState("");
  const [displacement, setDisplacement] = useState("");
  const [horsepower, setHorsepower] = useState("");
  const [weightInLbs, setWeightInLbs] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carData = await CarDataService.getCarById(carId);
        setName(carData.Name);
        setYear(carData.Year);
        setMilesPerGallon(carData.Miles_per_Gallon);
        setCylinders(carData.Cylinders);
        setDisplacement(carData.Displacement);
        setHorsepower(carData.Horsepower);
        setWeightInLbs(carData.Weight_in_lbs);
        setAcceleration(carData.Acceleration);
        setOrigin(carData.Origin);
      } catch (error) {
        console.error("Error fetching car details", error);
      }
    };
    fetchData();
  }, [carId]);

  const handleSubmit = async () => {
    if (isNaN(year) || isNaN(milesPerGallon) || isNaN(cylinders) || isNaN(displacement) || isNaN(horsepower) || isNaN(weightInLbs) || isNaN(acceleration)) {
      alert("All numeric fields must be valid numbers");
      return;
    }

    const updatedCarData = {
      Name: name,
      Year: year,
      Miles_per_Gallon: milesPerGallon,
      Cylinders: cylinders,
      Displacement: displacement,
      Horsepower: horsepower,
      Weight_in_lbs: weightInLbs,
      Acceleration: acceleration,
      Origin: origin,
    };

    try {
      await CarDataService.updateCar(carId, updatedCarData);
      alert("Car details updated successfully!");
      navigate("/cars");
    } catch (error) {
      console.error("Error updating car details", error);
      alert("Failed to update car details");
    }
  };

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center">Edit Car Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Miles per Gallon"
              value={milesPerGallon}
              onChange={(e) => setMilesPerGallon(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Cylinders"
              value={cylinders}
              onChange={(e) => setCylinders(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Displacement"
              value={displacement}
              onChange={(e) => setDisplacement(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Horsepower"
              value={horsepower}
              onChange={(e) => setHorsepower(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Weight in lbs"
              value={weightInLbs}
              onChange={(e) => setWeightInLbs(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Acceleration"
              value={acceleration}
              onChange={(e) => setAcceleration(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditPage;
