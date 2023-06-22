window.addEventListener('DOMContentLoaded', () => {
  const plants = [
    {
      name: 'Alecrim',
      image: 'img/alecrim.jpg',
      description: 'Planta utilizada como estimulante digestivo e expectorante.',
      detailsLink: 'plants/alecrim.html'
    },
    {
      name: 'Boldo',
      image: 'img/boldo.jpg',
      description: 'Planta utilizada para tratar problemas digestivos e hepáticos.',
      detailsLink: 'plants/boldo.html'
    },
    {
      name: 'Camomila',
      image: 'img/camomila.jpg',
      description: 'Planta utilizada para acalmar e aliviar o estresse e a ansiedade.',
      detailsLink: 'plants/camomila.html'
    },
    {
      name: 'Hortelã',
      image: 'img/hortela.jpg',
      description: 'Planta utilizada para melhorar a digestão e aliviar o desconforto gastrointestinal.',
      detailsLink: 'plants/hortela.html'
    },
    {
      name: 'Salsaparrilha',
      image: 'img/salsaparrilha.jpg',
      description: 'Planta utilizada para tratar problemas do sistema urinário e inflamações.',
      detailsLink: 'plants/salsaparrilha.html'
    },
    {
      name: 'Soja',
      image: 'img/soja.jpg',
      description: 'Planta utilizada como fonte de proteína e para melhorar a saúde cardiovascular.',
      detailsLink: 'plants/soja.html'
    },
    {
      name: 'Valeriana',
      image: 'img/valeriana.jpg',
      description: 'Planta utilizada para tratar distúrbios do sono e ansiedade.',
      detailsLink: 'plants/valeriana.html'
    },
    {
      name: 'Gengibre',
      image: 'img/gengibre.jpg',
      description: 'Planta utilizada para tratar problemas digestivos e hepáticos.',
      detailsLink: 'plants/gengibre.html'
    },
    {
      name: 'Vick',
      image: 'img/vick.jpg',
      description: 'É indicado como descongestionante nasal.',
      detailsLink: 'plants/vick.html'
    }
    // Adicione mais plantas aqui conforme necessário
  ];

  const featuredPlantsSection = document.querySelector('.featured-plants');
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


  // Criação dos cards das plantas
  plants.forEach((plant) => {
    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');

    const plantImage = document.createElement('img');
    plantImage.src = plant.image;
    plantImage.alt = plant.name;
    plantImage.classList.add('plant-icon');

    const plantName = document.createElement('h3');
    plantName.textContent = plant.name;

    const plantDescription = document.createElement('p');
    plantDescription.textContent = plant.description;

    const plantLink = document.createElement('a');
    plantLink.href = plant.detailsLink;
    plantLink.textContent = 'Ver detalhes';

    plantCard.appendChild(plantImage);
    plantCard.appendChild(plantName);
    plantCard.appendChild(plantDescription);
    plantCard.appendChild(plantLink);

    featuredPlantsSection.appendChild(plantCard);
  });
});
