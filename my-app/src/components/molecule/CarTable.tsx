import React, { useEffect, useState } from 'react';
import CarService from '../../Service/CarDataService';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AddButton from '../atoms/Addbutton';




export default function CarTable() {
    const [cars, setCars] = useState<ResponseType[]>([]);

    useEffect(() => {
        CarService.getCarData()
            .then((response: ResponseType[]) => { 
                setCars(response);
            });
    }, []);

    const handleDelete = async(carId: number) => {
        await CarService.deleteCar(carId);
        const newCars = cars.filter(car => car.id !== carId);
        setCars(newCars);
    }

    return (
        <div>
        <AddButton />
        <ul>
            {cars.map((car, index) => (
                <li key={index}>
                    <div className="car-box">
                        {Object.entries(car).map(([key, value]) => (
                            <div key={key}>{`${key}: ${value}`}</div>
                        ))}
                        <Button component={Link} to={`/edit/${car.id}`} onClick={() => console.log('Button clicked!')}>Edit</Button>
                        <Button component={Link} to={`/cars/${car.id}`} onClick={() => console.log('Button clicked!')}>View</Button>
                        <Button onClick={() => handleDelete(car.id)}>Delete</Button>
                        
                        
                    </div>
                </li>
            ))}
        </ul>
        </div>
    );
}