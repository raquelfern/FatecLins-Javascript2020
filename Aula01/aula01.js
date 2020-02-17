function mudaTexto() { //Definir paramêtros
    console.log('Entrei na função mudaTexto()');
    //alert('Minha função mudaTexto()');
    //como acessar um elemento de nosso HTML?
    //clase DOCUMENT tem acesso a toda estrutura da árvore do DOM do html
    var elementoP = document.getElementById("info");
    console.log('Estrutura do ElementoP ',elementoP);
    elementoP.innerHTML = 'Novo Texto JavaScript JS';

    document.getElementById("infoP").innerHTML = 'TROCADO';
    console.log('Saí da função mudaTexto()');
}