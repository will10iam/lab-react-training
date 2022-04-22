import "./style.modules.css"

export function DriverCar(props) {
    return ( 

        <div>

            <div>
                <img src={props.img} alt={props.name}/>
            </div>

            <div>
                <h1>{props.name}</h1>
                <p>{props.car.model} - {props.car.licensePlate}</p>

            </div>
        </div>


     );
}

export default DriverCar;