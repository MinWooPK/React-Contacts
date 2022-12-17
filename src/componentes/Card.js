import React from "react";


function Imagen(props) {

    return (
        <div className='contenedor'>

            <img className='imagen-card'
                src={(`${props.contacto.pictureUrl}`)}
                alt='imagen' />
        </div>
    )
}
export default Imagen