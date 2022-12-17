import './App.css';
import contacts from './contacts.json'
import { useState } from 'react';

function App() {
  const [contactos, setContactos] = useState([contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]])
  function addContact() {
    const randomContact = contacts[Math.floor(Math.random() * ((contacts.length - 1) - 5 + 1)) + 5]
    const newContact = [...contactos, randomContact]
    setContactos(newContact);
  }
  function SortByName() {
    const sortContactosName = [...contactos].sort((a, b) => a.name > b.name ? 1 : -1,);
    setContactos(sortContactosName)
  }
  function SortByPopularity() {
    const sortContactosPopularity = [...contactos].sort((a, b) => b.popularity - a.popularity);
    setContactos(sortContactosPopularity)
  }
  function deleteContact(e) {
    e.target.parentElement.parentElement.remove()
    // const newContact = contactos.filter(contact => contact !== {deletedContact}) 
    // setContactos(newContact)

  }
  return (
    <div className="App">
  
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={SortByPopularity}>Sort by popularity</button>
      <button onClick={SortByName}>Sort by name</button>
      <table className='box'>
        {
          contactos.map(contacts => (
            <thead key={contacts.id}>
              <tr >
                <th>Picture <br></br><img className='img' src={contacts.pictureUrl} alt={'human'}></img></th>
                <th>Name<br></br>{contacts.name}</th>
                <th>Popularity<br></br>{contacts.popularity.toFixed(2)}</th>
                <th>Won Oscar<br></br>{contacts.wonOscar ? <i className="fas fa-trophy"></i> : null}</th>
                <th>Won Emmy<br></br>{contacts.wonEmmy ? <i className="fas fa-star-christmas"></i> : null}</th>
                <th><button onClick={deleteContact}>Delete</button></th>
              </tr>
            </thead>

          ))
        }

      </table>
    </div>
  );
  
}


export default App;









// import './App.css';
// import contact from "./contacts.json";
// import Nombre from './componentes/Name'
// import Imagen from './componentes/Card';
// import Popularity from './componentes/Popularity'
// import Oscar from './componentes/Oscar';
// import Emmy from './componentes/Emmy';
// import Delete from './componentes/Delete'

// function App() {
//   // const [contact, setContact] = useState(contact4)
//   const contact4 = contact[1]

//   const contact5 = contact.slice(0, 5)
// // console.log(contact5)
//     ;
//   return (
//     <div className="App">
    

//       <div className='hatBox'>
//        <h1>Picture</h1>
//         <h1>Name</h1>
//         <h1>Popularity</h1>
//         <h1>Won Oscar</h1>
//         <h1>Won Emmy</h1>
//         <h1>Actions</h1>
//       </div>
      
//       {contact5.map((element) => {
//         return (
//           <div className='motherBox'>
//             <Imagen className='indBox' contacto={element} />
//             <Nombre className='indBox' contacto={element} />
//             <Popularity className='indBox' contacto={element} />
//                <Oscar className='indBox'contacto={element} />
//                <Emmy className='indBox' contacto={element} />
//                <Delete className='indBox' contacto={element} />

//             {/* <Nombre className='indBox' contacto={element} />
        
            
//             <Delete contacto={element} />  */}
//           </div>
//         )
//       })}
//     </div>
//   );
// }

// export default App;
