drop database if exists BdDocente;
create database BdDocente;
use BdDocente;
CREATE TABLE Docente (
	COD_doc  char (4) NOT NULL Primary Key ,
	nom_doc  varchar(30) ,
	cat_doc    int 
   );

create table Categoria(
cat_doc  int not null primary key,
tarifa  numeric(5,1)
);

insert into categoria values(1,25);
insert into categoria values(2,28);
insert into categoria values(3,32);
insert into categoria values(4,38);


CREATE TABLE Curso (
       codcur              char(4) NOT NULL primary key,
       NomCurso             varchar(35) NOT NULL,
       credito              int 
);


create table horario(
 cod_doc  char(4),
 fecha    date,
 codcur   char(4),
 horas    numeric(3,1)
);

Insert Into horario Values('D001','2025/02/03','C001',5);
Insert Into horario Values('D001','2025/03/13','C002',4);
Insert Into horario Values('D001','2025/04/13','C003',6);
Insert Into horario Values('D001','2025/06/11','C004',3);
Insert Into horario Values('D002','2025/06/08','C002',4);
Insert Into horario Values('D002','2025/04/09','C004',3);
Insert Into horario Values('D002','2025/08/10','C003',5);
Insert Into horario Values('D002','2025/07/13','C005',6);
Insert Into horario Values('D003','2025/06/11','C003',4);
Insert Into horario Values('D003','2025/06/12','C002',5);
Insert Into horario Values('D003','2025/05/14','C003',6);
Insert Into horario Values('D003','2025/02/13','C002',7);
Insert Into horario Values('D004','2025/04/03','C002',3);
Insert Into horario Values('D004','2025/06/08','C003',4);
Insert Into horario Values('D004','2025/01/07','C004',6);
Insert Into horario Values('D004','2025/04/06','C005',5);
Insert Into horario Values('D004','2025/05/09','C006',4);

Insert Into horario Values('D001','2025/04/04','C005',4);
Insert Into horario Values('D001','2025/04/07','C007',5);
Insert Into horario Values('D001','2025/05/08','C008',3);
Insert Into horario Values('D001','2025/05/14','C009',3);
Insert Into horario Values('D002','2025/06/11','C002',6);
Insert Into horario Values('D002','2025/06/08','C004',5);
Insert Into horario Values('D002','2025/06/09','C003',2);
Insert Into horario Values('D002','2025/06/10','C005',7);
Insert Into horario Values('D003','2025/04/04','C003',5);
Insert Into horario Values('D003','2025/05/14','C002',4);
Insert Into horario Values('D003','2025/05/10','C003',7);
Insert Into horario Values('D003','2025/05/12','C002',4);
Insert Into horario Values('D004','2025/06/13','C002',5);
Insert Into horario Values('D004','2025/05/11','C003',2);
Insert Into horario Values('D004','2025/05/21','C004',6);
Insert Into horario Values('D004','2025/05/24','C005',3);
Insert Into horario Values('D004','2025/03/14','C006',5);


Insert Into Curso Values('C001','Matematica Basica',3);
Insert Into Curso Values('C002','Filosofia I',6);
Insert Into Curso Values('C003','Psicologia Industrial',5);
Insert Into Curso Values('C004','Alritmica',4);
Insert Into Curso Values('C005','Software de Aplicacion',5);
Insert Into Curso Values('C006','Lenguaje de Programacion I',5);
Insert Into Curso Values('C007','Lenguaje Java ',4);
Insert Into Curso Values('C008','Matematica II',3);
Insert Into Curso Values('C009','Ingles Tecnico',5);
Insert Into Curso Values('C010','Lenguaje de Programcion III',3);
Insert Into Curso Values('C011','Aplicaciones Cliente/Servidor',4);

 
	
INSERT INTO Docente VALUES ('D001','MORENO LEE, Ana ',1);
INSERT INTO Docente VALUES ('D002','ROJAS GONZALES, Eva ',2);
INSERT INTO Docente VALUES ('D003','CACERES LEE, Victor',1);
INSERT INTO Docente VALUES ('D004','Banda Quispe, Luis',1);
INSERT INTO Docente VALUES ('D005','PERCY OBANDO, Ana',2);
INSERT INTO Docente VALUES ('D006','Guevara Diaz, Alex',2);
INSERT INTO Docente VALUES ('D007','MIGUEL NARVA, Alejandra',2);
INSERT INTO Docente VALUES ('D008','CLAUDIO PARDO, Norma',3);
INSERT INTO Docente VALUES ('D009','MONICA GONZALES, Claudia',2);
INSERT INTO Docente VALUES ('D010','MONTES DIAZ, Martha',2);
INSERT INTO Docente VALUES ('D011','JHON MORALES, Amparo',1);
INSERT INTO Docente VALUES ('D012','FERNANDO REDONDO, Consuelo',2);
INSERT INTO Docente VALUES ('D013','GABRIELA ZAPATA,Cecilia',2);
INSERT INTO Docente VALUES ('D014','PEREZ VERA, ANA  ',2);
INSERT INTO Docente VALUES ('D015','SANDRA CAMPOS, EVA',2);
INSERT INTO Docente VALUES ('D016','MIGUEL RAMIREZ,DIANA',1);
INSERT INTO Docente VALUES ('D018','RAUL MORIENTES, EVA',3);
INSERT INTO Docente VALUES ('D019','EUGENIO CAMPOS,LAURA',2);
INSERT INTO Docente VALUES ('D020','GRANDE PARDO,JOSE',2);
INSERT INTO Docente VALUES ('D021','ROBERTO BAGGIO, LUIS',1);

CALL datosDoc('D012');

-- Para ver el procedimiento:
SELECT ROUTINE_DEFINITION 
FROM INFORMATION_SCHEMA.ROUTINES 
WHERE ROUTINE_SCHEMA = 'BdDocente' 
AND ROUTINE_NAME = 'datosDoc';

