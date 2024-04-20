function showDescription(service) {
    const descriptions = {
        'psicopedagogia': 'A psicopedagogia é uma área de atuação que visa compreender e intervir nos processos de aprendizagem, buscando identificar e solucionar possíveis dificuldades de aprendizagem.',
        'psicanalise': 'A psicanálise é uma abordagem terapêutica que visa explorar os processos mentais inconscientes para entender e tratar problemas emocionais e psicológicos.',
        'terapia_aba': 'A terapia ABA (Análise do Comportamento Aplicada) é uma abordagem terapêutica baseada em evidências que se concentra na análise e modificação do comportamento para promover habilidades sociais e acadêmicas.',
        'reforco_escolar': 'O reforço escolar é um suporte educacional complementar oferecido aos alunos fora do ambiente escolar regular para ajudá-los a melhorar o desempenho acadêmico em áreas específicas.',
        'arteterapia': 'A arteterapia é uma forma de terapia que utiliza a expressão artística (como desenho, pintura, escultura, etc.) como meio de comunicação para explorar questões emocionais e psicológicas.',
        'alfabetizacao': 'A alfabetização é o processo pelo qual uma pessoa adquire a capacidade de ler e escrever. É uma fase fundamental no desenvolvimento educacional de uma criança, pois proporciona as habilidades básicas necessárias para a aprendizagem ao longo da vida.'
    };

    if (descriptions.hasOwnProperty(service)) {
        const descriptionContainer = document.getElementById('descriptions');
        descriptionContainer.innerHTML = `<p>${descriptions[service]}</p>`;
        // Adiciona a classe 'show' para exibir suavemente a descrição
        descriptionContainer.classList.add('show');
    }
}