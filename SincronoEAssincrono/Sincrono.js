function tarefaDemorada(){
    const agora = new Date();
    const futuro = agora.getTime() + 3000 //adiciona 3 segundos
    while(new Date().getTime() < futuro){} //espera 3 segundos
}

console.log("Iniciando o programa...")
console.log("Executando tarefa 1")
tarefaDemorada()
console.log("Tarefa 1 concluída")

console.log("Executando tarefa 2")
tarefaDemorada()
console.log("Tarefa 2 concluída")
console.log("Programa finalizado")