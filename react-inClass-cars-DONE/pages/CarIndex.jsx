import { CarFilter } from "../cmps/CarFilter.jsx"
import { CarList } from "../cmps/CarList.jsx"
import { carService } from "../services/car.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { getTruthyValues } from "../services/util.service.js"
const { Link, useSearchParams } = ReactRouterDOM

const { useEffect, useState } = React


export function CarIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [cars, setCars] = useState(null)
    const [filterBy, setFilterBy] = useState(carService.getFilterFromSrcParams(searchParams))

    // console.log('cars:', cars)
    

    useEffect(() => {
        setSearchParams(getTruthyValues(filterBy))
        loadCars()
    }, [filterBy])

    function loadCars() {
        carService.query(filterBy)
            .then(cars=>{
                setCars(cars)
                showSuccessMsg('Cars loaded successfully!')
            })
            .catch(err => {
                console.log('Problems getting cars:', err)
            })
    }

    function onRemoveCar(carId) {
        carService.remove(carId + 'zzz')
            .then(() => {
                setCars(cars => cars.filter(car => car.id !== carId))
            })
            .catch(err => {
                console.log('Problems removing car:', err)
                showErrorMsg('Problems removing car')
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }
    
    return (
        <section className="car-index">
            <CarFilter defaultFilter={filterBy} onSetFilter={onSetFilter} />
            <section>
                <Link to="/car/edit">Add Car</Link>
            </section>
            {cars
                ? <CarList
                    cars={cars}
                    onRemoveCar={onRemoveCar}
                />
                : <div>Loading...</div>
            }
        </section>
    )

}