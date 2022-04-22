import "./style.modules.css"
import Visa from "../../assets/images/visa.png"
import MasterCard from "../../assets/images/master-card.svg"

export function CreditCard(props) {

    const bandeira = props.type === 'Visa' ? Visa : MasterCard

    const divStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
}


    return ( 

        

            <div style={divStyle} className="card">

                <div className="container">
                    <img className="bandCard" src={bandeira} alt="Bandeira"/>
                </div>
            
                <div>
                    <p className="numCard"><strong>{props.number}</strong></p>
                </div>

                <div className="infosNum">
                    <span className="expCard">Expires 0{props.expirationMonth}/{props.expirationYear}</span>
                    <span className="bankCard">{props.bank}</span>
                </div>

                <div>
                    <p className="ownCard">{props.owner}</p>
                </div>
            
            
            </div>
        

     );
}

export default CreditCard;