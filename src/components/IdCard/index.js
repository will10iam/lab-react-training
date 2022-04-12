import "./styles.modules.css"
export function IdCard(props) {
    return (
        <div className="firstIteration">
            <div>
                <img src={props.picture} alt={props.name}/>
                </div>
            <div>
                <p><strong>First Name:</strong> {props.firstName}</p>
                <p><strong>Last Name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}</p>
                <p><strong>Birth:</strong> {props.birth.toString()}</p>
            </div>
        </div>
    )
}