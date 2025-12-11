import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function App1(){
    const[listaDocentes, setListaDocentes]=useState([]);

    //UseEffect para que aparezcan al cargar la página:
    useEffect(()=>{
        const mostrarDocentes = () =>{
            Axios.get("http://localhost:3002/docentes").then((res)=>{
                setListaDocentes(res.data);
            })
        }
        mostrarDocentes();
    }, [])

    return (
        <div className="container p-2">
            <div className="row">
                <div className="col-12 col-md-12 col-xl-12">
                    <h5 className="text-center fs-3">Lista de docentes</h5>
                    <table class="table table-hover">
                        <thead className="table-danger">
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Ver horas</th>
                                <th>Registrar horas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaDocentes.map((doc, index)=>(
                                <tr key={index}>
                                    <td>{doc.COD_doc}</td>
                                    <td>{doc.nom_doc}</td>
                                    <td>{doc.cat_doc}</td>
                                    <td><Link className="btn btn-success" to={`/detalle/${doc.COD_doc}`}>Ver</Link></td>
                                    <td><Link className="btn btn-secondary" to={`/registrarHoras/${doc.COD_doc}`}>Registrar horas</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}