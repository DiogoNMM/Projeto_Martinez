let perguntas = [ 


{
    titulo: 'O baião de dois é típico de qual estado brasileiro?',
    alternativas: ['São paulo','Ceará','Rio De Janeiro', 'Amapá'],
    correta: 1
},

{
    titulo: 'Qual a cidade com o maior número de pizzarias no Brasil?',
    alternativas: ['São paulo','Belo Horizonte','Jacareí', 'Caxias do Sul'],
    correta: 0
},

{
    titulo: 'O arroz carreteiro é comum em qual estado brasileiro?',
    alternativas: ['Paraná','Sergipe','Minas Gerais', 'Rio Grande Do Sul'],
    correta: 3
}
];


let app = { 
start: function(){
    this.Atualpos = 0;
    this.Totalpontos = 0;
    let alts = document.querySelectorAll('.alternativa')
    alts.forEach((element,index)=>{  
        element.addEventListener('click', ()=>{
           this.checaResposta(index)
        })
    })
    this.atualizaPontos(); 
    app.mostraquestao(perguntas[this.Atualpos]);
},

mostraquestao: function(q){
    this.qatual = q;
    // mostrando o titulo
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;
    // mostrando as alternativas
    let alts = document.querySelectorAll('.alternativa')
    alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
    })
},

Proximaperg: function(){
    this.Atualpos++;
    if (this.Atualpos == perguntas.length) {
        this.Atualpos = 0;
    }
},

checaResposta: function(user){
    if (this.qatual.correta == user) {
        console.log ("Correta")
        this.Totalpontos ++;
    }else{
        console.log("Errada") 
    }
    this.atualizaPontos();
    // console.log("Corrigida!")
    this.Proximaperg();
    this.mostraquestao(perguntas[this.Atualpos]);

},

atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
}


}

app.start();
 