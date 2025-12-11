const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alonso_24122005_",
    database: "BdDocente"
})

//Primera página de la lista de docentes:
app.get("/docentes", (req, res)=>{
    db.query("SELECT COD_doc, nom_doc, cat_doc FROM Docente", (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: "Error en el servidor."});
        }else{
            res.send(results);
        }
    })
})

//Tabla de detalle:
app.get("/detalle/:coddoc", (req, res)=>{
    const coddoc = req.params.coddoc;
    db.query("CALL datosDoc(?)", [coddoc], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: "Error en el servidor."});
        }else{
            res.send(results[0]);
        }
    })
})

//Agregar un nuevo registro de horas:
app.post("/registrarHoras/:cod_doc", (req, res)=>{
    const cod_doc = req.params.cod_doc;
    const {codcur, horas, fecha} = req.body;
    db.query(`INSERT INTO horario (cod_doc, fecha, codcur, horas)
    VALUES (?, ?, ?, ?)`, [cod_doc, fecha, codcur, horas], (err, results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error: "Error en el servidor."});
        }else{
            res.send(results);
        }
    })
})

//Para llenar el comboBox:
app.get("/comboCursos", (req, res)=>{
    db.query("SELECT codcur, NomCurso FROM Curso", (err, results)=>{
        if(err){
            console.error(err);
        }else{
            res.send(results);
        }
    })
})

//Puerto:
const puerto = 3002;
app.listen(puerto, ()=>{
    console.log("Puerto activado.");
})