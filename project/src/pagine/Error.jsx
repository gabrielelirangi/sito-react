import "./Error.css"
import error from "./immagini/error/error1.jpg"


export default function Error(){
    return(
        <div className="errore" style={{backgroundImage: `url(${error})`}}>

        </div>
    )
}