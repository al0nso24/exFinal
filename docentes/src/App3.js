import Axios from "axios";
import { use, useEffect, useState } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";

export default function App3(){
    const {cod_doc} = useParams();
    const navigate = useNavigate();
    const [fecha, setFecha] = useState("");
    const[listaCursos, setListaCursos] = useState([]); //ComboBox
    const [codcur, setCodcur] = useState("");
    const [horas, setHoras] = useState(0);


    const realizarRegistro = (cod_doc) =>{
        Axios.post(`http://localhost:3002/registrarHoras/${cod_doc}`, {fecha, codcur, horas}).then((res)=>{
            alert("Registro exitoso :D");
            navigate(`/detalle/${cod_doc}`); //Esto me redirecciona a la página detalle.
        })
    }

    //Para el comboBox:
    const traerCursos = () =>{
        Axios.get("http://localhost:3002/comboCursos").then((res)=>{
            setListaCursos(res.data);
        })
    }

    useEffect(()=>{
        traerCursos();
    }, []);

    return(
        <div className="container p-2">
            <div className="row">
                <div className="col-12 col-md-4 col-xl-4">
                    <div class="card">
                        <div class="card-body">
                            <h5>Registro de horas</h5>
                            <hr></hr>
                            <div className="form-group">
                                <label className="form-label">Docente</label>
                                <input value={cod_doc} className="form-control" readOnly></input>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Curso</label>
                                <select
                                    className="form-select"
                                    value={codcur}
                                    onChange={(e) => setCodcur(e.target.value)}
                                >
                                    <option value="">Selecciona un curso</option>
                                    {listaCursos.map((c) => (
                                        <option key={c.codcur} value={c.codcur}>
                                            {c.NomCurso}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group mt-2">
                                <label className="form-label">Horas programadas</label>
                                <input value={horas} onChange={(e)=>setHoras(e.target.value)} className="form-control" type="number"></input>
                            </div>
                            <div className="form-group mt-2">
                                <label className="form-label">Fecha</label>
                                <input value={fecha} className="form-control" type="date" onChange={(e)=>setFecha(e.target.value)}></input>
                            </div>
                            <button className="btn btn-primary mt-2" onClick={()=>realizarRegistro(cod_doc)}>Guardar</button>
                        </div>
                    </div>
                    <Link className="btn btn-success mt-3" to={'/'}>Volver</Link>
                </div>
            </div>
        </div>
    )
}