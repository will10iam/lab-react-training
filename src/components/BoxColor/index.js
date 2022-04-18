import "./style.modules.css"

export function BoxColor(props) {    

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        color: 'white'
    };

    
    return ( 
        <div>

        <p className="boxColor" style={divStyle}>rgb({props.r}, {props.g}, {props.b}) #ff0000</p>

        </div>

     );
}

export default BoxColor;