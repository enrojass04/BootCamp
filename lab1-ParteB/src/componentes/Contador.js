import React, {useState} from "react";
import '../estilos/Contador.css';


export default function Contador(props) {
    const [numero, setNumero] = useState(0);

    const aumentar = (url) => {
        setNumero(numero + 1);
        window.open(url, 'blank');
    }

    const disminuir = () => {
        setNumero(numero - 1);
    }
    
    return (
        <div className="botones">
            <p>Seguidores en {props.networkName} {numero}</p>
            <button onClick={()=>aumentar(props.urlRed)}>seguir</button>         

            {/* <button onClick={disminuir}>Disminuir </button> */}
        </div>
    )
}
