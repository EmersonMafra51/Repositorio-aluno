function scrollToSection(conteudo) {
    const element = document.getElementById(conteudo);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
