import React from "react";
import cars from "../cars.json";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Chip } from "@material-ui/core";
// import material ui components here //
// Container, Paper, Chip //

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
    flexWrap: "wrap",
    width: 300,
    padding: 10,
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
    gap: 10,
  },
}));

const Car = (props) => {
  const carId = props.match.params.id - 1;
  const carInfo = cars[carId];
  const classes = useStyles();

  console.log(carInfo);
  return (
    <div className={classes.root}>
      <Paper elevation={3} display="flex" flex>
        <h1 justifyContent="center">{carInfo.Name}</h1>
        <div className={classes.chip}>
          <Chip label={`MPG: ${carInfo.Miles_per_Gallon}`} />
          <Chip label={`Cylinders: ${carInfo.Cylinders}`} />
          <Chip label={`Displacement: ${carInfo.Displacement}`} />
          <Chip label={`Horsepower: ${carInfo.Horsepower}`} />
          <Chip label={`Weight: ${carInfo.Weight_in_lbs}`} />
          <Chip label={`Acceleration: ${carInfo.Acceleration}`} />
          <Chip label={`Year: ${carInfo.Year}`} />
          <Chip label={`Origin: ${carInfo.Origin}`} />
        </div>
      </Paper>
    </div>
  );
};

export default Car;
