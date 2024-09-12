// Botão "Sim"
document.getElementById('sim').addEventListener('click', function() {
    const numeroWhatsApp = '31996512842';
    const mensagem = 'Oi! Eu aceito sair com você! Qual a data do nosso encontro?';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});

// Botão "Não" se mexe ao passar o mouse
const botaoNao = document.getElementById('nao');

botaoNao.addEventListener('mouseover', function() {
    // Faz o botão "Não" se mexer aleatoriamente
    const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
    botaoNao.classList.add('nao-moving'); // Torna o botão absoluto para que possa se mover
});
