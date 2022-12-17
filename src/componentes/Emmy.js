import React from "react";


function Emmy(props) {
    const emmy = props.contacto.wonEmmy;
    if (emmy) {
      return <h1>Emmy!</h1>;;
    }
    return <h1></h1>;;
  }


export default Emmy