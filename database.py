import os
import webbrowser

def adicionar_planta(nome, descricao):
    # Caminho para a pasta de plantas
    pasta_plantas = 'plants'
    
    # Criar o diretório das plantas, se não existir
    if not os.path.exists(pasta_plantas):
        os.makedirs(pasta_plantas)
    
    # Nome do arquivo HTML da planta
    arquivo_html = f'{pasta_plantas}/{nome.lower()}.html'
    
    # Modelo do HTML para a planta
    modelo_html = f'''<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/boldo.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Your+Custom+Font">
  <title>Detalhes do {nome}</title>
</head>

<body>
  <header>
    <h1>Plantas Medicinais</h1>
    <nav>
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  </header>

  <section class="plant-details">
    <div class="plant-card">
      <img src="../img/{nome.lower()}.jpg" alt="{nome}">
      <h1>{nome}</h1>
      <p>{descricao}</p>
    </div>
  </section>

  <footer>
    <p>&copy; 2023 Plantas Medicinais. Todos os direitos reservados.</p>
  </footer>

  <script src="../js/main.js"></script>
</body>

</html>'''

    # Salvar o arquivo HTML da planta
    with open(arquivo_html, 'w') as arquivo:
        arquivo.write(modelo_html)
    
    # Abrir o arquivo HTML em uma nova guia do navegador
    webbrowser.open_new_tab(f'file://{os.path.abspath(arquivo_html)}')

# Exemplo de uso
nome_planta = 'Boldo'
descricao_planta = 'Planta utilizada para tratar problemas digestivos e hepáticos.'
adicionar_planta(nome_planta, descricao_planta)
