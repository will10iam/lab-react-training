import "./style.modules.css"

export function Random(props) {

    const randomNum = Math.floor(Math.random() * (props.max - props.min) + props.min);
    
    return (
            
        <div>
            <p className="numRandom">Random value between {props.min} and {props.max} is: {randomNum} </p>
        </div>
    ) 
}
    

