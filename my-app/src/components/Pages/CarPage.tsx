import React, { useEffect, useState } from 'react';
import CarTable from '../molecule/CarTable';
import CarService from '../../Service/CarDataService';

const CarPage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarService.getCarData()
            .then(response => {
                setCars(response);
                console.log(response);
            })
    }, []);

    

    return (
        <div>
            <CarTable cars={cars} />
        </div>
    );
}

export default CarPage;