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
      description: 'n faço a minima ideia mas depois coloco.',
      detailsLink: 'plants/vick.html'
    }
    
  ];

  const featuredPlantsSection = document.querySelector('.featured-plants');

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
