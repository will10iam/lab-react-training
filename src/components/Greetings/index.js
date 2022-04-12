import "./style.modules.css"

export function Greetings(props) {
   if ( props.lang === "de") {
       return (
        <p className="firstP">Hallo Ludwig</p>
       )
   } else if (props.lang === "fr") {
       return (
           <p className="secondP">Bonjour François</p>
       )
   } else {
       return (
           <p className="secondP">Hello English</p>
       )
   }
}

