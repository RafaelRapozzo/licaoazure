# js
Como alternar uma class pelo js
document.[nome do elemento ou id].classList[('{Nome da class}')]


# css
overflow: overlay; para adicionar o scroll na overlay 

# lib
## scroll reveal 

sitte com a documentação completa: https://scrollrevealjs.org

### inicialização da lib

no html: <script src="https://unpkg.com/scrollreveal"></script>

no js: ScrollReveal().reveal('[id, class ou elemento]');

### configuração da lib

ela é configuravel apartir de objetos

documentaçao completa para o scroll reveal: https://scrollrevealjs.org/api/reveal.html


ScrollReveal({
    origin: 'top', 
    distance: '30px',
    duration: 700,
}).reveal('#home');

### Ordem de aparição + multiplos elementos 

para aparição de multiplos elementos em ordem, ultiliza-se [elemento, elemento2]

ScrollReveal().reveal('#home, #home img, #home .stats')