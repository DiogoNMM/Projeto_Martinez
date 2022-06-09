create database MartinezFamily;
use MartinezFamily;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(50),
fkPrato int,
foreign key (fkPrato) references pratos(idPrato)
);

create table pratos(
idPrato int primary key auto_increment,
nomePrato varchar(45)
);

insert into pratos values 
(null,'feijoada'),
(null,'baiaodedois'),
(null,'galinhada'),
(null,'caldodemocoto'),
(null,'arrozcarreteiro'),
(null,'viradopaulista');


select * from usuario;
select * from pratos;     

-- Join simples entre tabelas
select * from usuario join pratos on fkPrato = idPrato;


select pratos.nomePrato, count(usuario.fkPrato) as temperatura from pratos join usuario on idPrato = fkPrato group by pratos.nomePrato;

select pratos.nomePrato, count(usuario.fkPrato) as temperatura from usuario join pratos on idPrato = fkPrato group by pratos.nomePrato;

insert into usuario(fkPrato) values
(1);