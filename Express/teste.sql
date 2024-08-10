 CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
    ); 
 /*INTRODUZINDO VALORES*/

 INSERT INTO usuarios(nome, email, idade) VALUES(

    "Antonio Fernando Júnior",
    "email@teste10.com",
    29
 ); 
 /*Pegando dados especficos*/

 SELECT * FROM usuarios WHERE idade =29;
