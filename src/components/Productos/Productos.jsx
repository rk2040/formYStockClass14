import { useState, useEffect } from "react"
import { db } from "../../services/firebase/config"
import './Productos.css';
import { collection, doc, query, updateDoc, onSnapshot } from "firebase/firestore";
//


const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect( ()=> { //
        //Creamos una consulta a la coleccion "productos".
        const q = query(collection(db, 'productos'));

        //onSnapShot es una funcion que escucha los cambios en la consulta.
        const modificar = onSnapshot(q, function(querySnaphot){
            const docs = [];
            querySnaphot.forEach(function(doc){
                
                docs.push({id:doc.id, ...doc.data() })
            });
            setProductos(docs);
        });
        return ()=> {
            modificar();
        }
    }, []) // [] array de dependencias

    //funcion para descontar el stock cuando el usuario compra:
    const handelCompra = (id, stock)=> {
        if(stock > 0){
            const productoRef = doc(db, 'productos', id);
            updateDoc(productoRef, {
                stock:stock -1,
            })
            //updateDoc me actualiza el documento (el stock del producto en este caso)
            .then( ()=> {
                console.log("El stock se actualizo correctamente.")
            .catch(error=> (console.log(error)))
            })
        }
    }

    //useEffect


    return (
        <div className="productos">
            {
                productos.map( (producto)=> (
                    <div className="producto" key={producto.id}>
                        <h2> {producto.nombre} </h2>
                        <p> Precio: ${producto.precio} </p>
                        <p> Stock: {producto.stock} </p>
                        <button onClick={()=> handelCompra(producto.id, producto.stock)}>Agregar</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Productos