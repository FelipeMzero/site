window.addEventListener('DOMContentLoaded', () => {
  const plants = [
    // Adicione mais plantas aqui conforme necessário
  ];

  const searchForm = document.querySelector('form');
  const searchInput = document.querySelector('#search-input');
  const searchButton = document.querySelector('#search-button');
  const searchResult = document.querySelector('.search-result');

  // Função para buscar a planta pelo nome
  const searchPlant = (name) => {
    // Verificar se a planta existe nos arquivos
    const plant = plants.find((plant) => plant.name.toLowerCase() === name.toLowerCase());

    if (plant) {
      // Redirecionar para a página de detalhes da planta encontrada
      window.location.href = plant.detailsLink;
    } else {
      // Exibir mensagem de "Estamos Trabalhando Nisso"
      window.location.href = 'erro.html';
    }
  };

  // Função para lidar com o clique no botão "Buscar"
  const handleSearch = () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
      searchPlant(searchTerm);
    }
  };

  // Evento de envio do formulário de busca
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSearch();
  });

  // Evento de clique no botão "Buscar"
  searchButton.addEventListener('click', () => {
    handleSearch();
  });
});
