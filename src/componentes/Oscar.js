import React from "react";

// function noOscar() {
// 	return <h1></h1>;
// }

// function winOscar() {
// 	return <h1>🏆</h1>;
// }


function Oscar(props) {
    const oscar = props.contacto.wonOscar;
    if (oscar) {

      return <h1>🏆</h1>;;
    }
    return <h1></h1>;
};
  


export default Oscar




