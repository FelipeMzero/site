<?php
// Verifica se o parâmetro de pesquisa foi enviado
if (isset($_GET['search'])) {
  $searchTerm = $_GET['search']; // Obtém o termo de pesquisa

  // Diretório onde estão armazenados os arquivos HTML das plantas
  $plantsDirectory = 'plants';

  // Obtém uma lista de todos os arquivos HTML das plantas
  $plantFiles = glob($plantsDirectory . '/*.html');

  // Array para armazenar os resultados da pesquisa
  $searchResults = array();

  // Percorre cada arquivo HTML das plantas
  foreach ($plantFiles as $plantFile) {
    // Lê o conteúdo do arquivo HTML
    $htmlContent = file_get_contents($plantFile);

    // Verifica se o termo de pesquisa está presente no conteúdo do arquivo
    if (stripos($htmlContent, $searchTerm) !== false) {
      // Obtém o nome da planta a partir do nome do arquivo HTML
      $plantName = basename($plantFile, '.html');

      // Adiciona o nome da planta e o link para os resultados da pesquisa
      $searchResults[] = array(
        'name' => $plantName,
        'link' => $plantsDirectory . '/' . $plantName . '.html'
      );
    }
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Your+Custom+Font">
  <style>
    /* Estilo base */
    body {
      font-family: 'Your Custom Font', sans-serif;
      margin: 0;
      padding: 0;
    }

    /* Estilo para o cabeçalho */
    header {
      background-color: #00b894;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      color: #fff;
      margin: 0;
      font-size: 24px;
    }

    /* Estilo para a navegação */
    header nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    header nav ul li {
      margin-right: 20px;
    }

    header nav ul li a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
    }

    /* Estilo para os resultados da pesquisa */
    .search-results {
      margin: 20px;
    }

    .search-results h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .search-results ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .search-results li {
      margin-bottom: 10px;
    }

    .search-results a {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      background-color: #00b894;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .search-results a:hover {
      background-color: #00987c;
    }
  </style>
  <title>Resultado da Pesquisa</title>
</head>

<body>
  <header>
    <h1>Plantas Medicinais</h1>
    <nav>
      <ul>
        <li><a href="index.html">Página Principal</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  </header>

  <section class="search-results">
    <?php if (isset($searchResults) && count($searchResults) > 0) : ?>
      <h2>Resultados da Pesquisa:</h2>
      <ul>
        <?php foreach ($searchResults as $result) : ?>
          <li><a href="<?php echo $result['link']; ?>"><?php echo $result['name']; ?></a></li>
        <?php endforeach; ?>
      </ul>
    <?php else : ?>
      <h2>Nenhum resultado encontrado.</h2>
    <?php endif; ?>
  </section>

</body>

</html>
