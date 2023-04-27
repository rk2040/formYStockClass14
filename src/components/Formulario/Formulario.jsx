import { useState } from "react"
import { db } from "../../services/firebase/config"
import { collection, addDoc,  } from "firebase/firestore"
import './Formulario.css';

//1- importamos los archivos/funciones necesarias y las referencias a nuestra base de dattos en Firestore.

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    //2- Creamos los 3 estados para trabajar con los valores del formulario.

    //3- Creamos una funcion manejadora del formulario.

    const handelForm = (event)=> {
        event.preventDefault(); //Evita que recargue la pagina

        addDoc(collection(db, 'usuarios'), {
            nombre: nombre,
            apellido:apellido,
            telefono:telefono,
        })
        // addDoc es una funcion que me permite agregar un documento nuevo en mi coleccion

        setNombre("");
        setApellido("");
        setTelefono("");
    }

    return (
        <form onSubmit={handelForm}>
            <label htmlFor="">Nombre</label>
            <input type="text" value={nombre} onChange={(event)=> setNombre(event.target.value)} required/>
            
            <label htmlFor="">Apellido</label>
            <input type="text" value={apellido} onChange={(event)=> setApellido(event.target.value)} required/>

            <label htmlFor="">Celular</label>
            <input type="text" value={telefono} onChange={(event)=> setTelefono(event.target.value)} required/>

            <button>Enviar</button>
        </form>
    )
}

export default Formulario