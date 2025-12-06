async function carregarPagina(pagina) {
    const conteudo = document.getElementById("conteudo");

    try {
        const resposta = await fetch(`pages/${pagina}.html`);
        
        if (!resposta.ok) {
            conteudo.innerHTML = "<h1>Erro 404</h1><p>Vixi, o bagúio num tá lá!</p>";
            return;
        }

        const html = await resposta.text();
        conteudo.innerHTML = html;
        
        // Remove classe 'active' de todos os menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Adiciona classe 'active' ao menu item clicado
        const menuItemAtivo = document.querySelector(`[data-pagina="${pagina}"]`);
        if (menuItemAtivo) {
            menuItemAtivo.classList.add('active');
        }

    } catch (erro) {
        conteudo.innerHTML = "<h1>Erro</h1><p>Deu zica lendo o trêm.</p>";
        console.error("Num foi:", erro);
    }
}

// Carrega a página inicial quando o site abre
document.addEventListener('DOMContentLoaded', function() {
    carregarPagina('home');
});