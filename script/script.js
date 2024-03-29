function Menu() {
    // Obtém todos os elementos com a classe 'menuHidden'
    let menus = document.getElementsByClassName('menuHidden');
    
    // Verifica se há elementos com a classe 'menuHidden'
    if (menus.length > 0) {
        // Remove a classe 'menuHidden' de todos os elementos
        Array.from(menus).forEach(menu => {
            menu.classList.remove('menuHidden');
        });
    } else {
        // Se nenhum elemento com a classe 'menuHidden' estiver visível, adiciona a classe 'menuHidden' ao elemento com o ID 'teste'
        let a = document.getElementById('teste');
        if (a) {
            a.classList.add('menuHidden');
        }
    }
}
