import Axios, { formToJSON } from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

export default function App2(){
    const {coddoc} = useParams();
    const[listaDetalle, setListaDetalle] = useState([]);
    const[existeCursos, setExisteCursos] = useState(false);

    useEffect(()=>{
        const detalleDoc = (coddoc) =>{
            Axios.get(`http://localhost:3002/detalle/${coddoc}`).then((res)=>{
                setListaDetalle(res.data);
                setExisteCursos(true);
            })
        }
        detalleDoc(coddoc);
    }, [coddoc]);

    //Suma de horas de cada docente:
    const totalHoras = () =>{
        let suma=0;
        for (let i = 0; i < listaDetalle.length; i++) {
            suma+=parseInt(listaDetalle[i].horas);
        }
        return suma;
    }

    return(
        <div className="container p-2">
            <div className="row">
                <div className="col-12 col-md-6 col-xl-6">
                    <h5>Detalle de las horas</h5>
                    {/*[0]? es para la parte superior (cabecera).*/}
                    <p>Nombre del docente: <span>{listaDetalle[0]?.nom_doc}</span></p>
                    <p>Categoría: <span>{listaDetalle[0]?.cat_doc}</span></p>
                </div>
                <div className="col-12 col-md-6 col-xl-6">
                    <img src={`/doctores/${coddoc}.jpg`} className="img-fluid"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-xl-12">
                    {listaDetalle.length > 0 ? (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Curso</th>
                                    <th>Hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaDetalle.map((det, index)=>(
                                    <tr key={index}>
                                        <td>{det.fecha}</td>
                                        <td>{det.NomCurso}</td>
                                        <td>{det.horas}</td>
                                    </tr>
                                ))}
                                <tr className="table-warning fw-bold">
                                    <td colSpan="2" className="text-end">TOTAL DE HORAS:</td>
                                    <td>{totalHoras()}</td>
                                </tr>
                            </tbody>
                        </table>
                    ):(
                        existeCursos && (
                            <p>Este profesor no tiene cursos registrados.</p>
                        )
                    )}
                    <Link to={'/'}>Volver</Link>
                </div>
            </div>
        </div>
    )
}