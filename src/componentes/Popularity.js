import React from "react";

function Popularity(props) {

    return (
        <div className="contenedor">
            <p> {(`${props.contacto.popularity}`)}</p>
        </div>
    )
}
export default Popularity