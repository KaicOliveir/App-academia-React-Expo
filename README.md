📱 App Academia
📌 Sobre o Projeto

Este projeto consiste em um aplicativo de academia desenvolvido utilizando React Native com Expo, com o objetivo de organizar exercícios físicos por grupos musculares e facilitar o acesso a vídeos demonstrativos de cada exercício.

A aplicação permite que o usuário navegue entre diferentes categorias de treino e visualize informações importantes sobre cada exercício, como nome, número de séries, repetições e vídeo explicativo.

O projeto foi desenvolvido com foco em organização de código, navegação entre telas e estruturação de dados, aplicando conceitos fundamentais do desenvolvimento mobile.

🚀 Tecnologias Utilizadas

As principais tecnologias utilizadas no desenvolvimento do projeto foram:

React Native
Expo
JavaScript
React Navigation
YouTube (vídeos demonstrativos)

Essas ferramentas permitem o desenvolvimento de aplicações modernas, rápidas e multiplataforma.

📂 Estrutura do Projeto

O projeto foi organizado em diferentes arquivos e componentes para facilitar a manutenção e evolução da aplicação.
Principais partes do projeto:

Tela de categorias
Exibe os grupos musculares disponíveis, como peito, pernas e glúteos.

Tela de exercícios
Mostra os exercícios relacionados à categoria selecionada.

Arquivo de dados de exercícios
Contém a lista de exercícios organizados por grupo muscular.

⚙️ Funcionalidades

O aplicativo possui as seguintes funcionalidades:

Navegação entre telas de categorias e exercícios

Exibição de exercícios organizados por grupo muscular

Informações sobre cada exercício:

Nome

Séries

Repetições

Integração com vídeos demonstrativos do YouTube

Interface simples e intuitiva

🧠 Estrutura de Dados

Os exercícios são armazenados em um objeto JavaScript chamado exercicios, onde cada grupo muscular possui uma lista de exercícios.

Exemplo simplificado da estrutura:

export const exercicios = {
  Peito: [
    {
      id: "1",
      nome: "Supino reto",
      series: "3 séries",
      reps: "12 reps",
      video: "rT7DgCr-3pg"
    }
  ]
}

Essa organização permite adicionar novos exercícios facilmente.

🔧 Funcionamento do Código

Para exibir os exercícios na tela, o projeto utiliza funções que recebem a categoria selecionada e retornam a lista de exercícios correspondente.

A renderização dos exercícios é feita utilizando o método .map(), que percorre a lista e cria os componentes dinamicamente.

Também foram utilizados componentes do React Native, como:

View

Text

TouchableOpacity

ScrollView

Esses componentes ajudam na construção da interface e interação do usuário.

🎯 Objetivo do Projeto

O principal objetivo deste projeto foi praticar conceitos de desenvolvimento mobile, incluindo:

Estruturação de projetos em React Native

Navegação entre telas

Organização de dados

Criação de funções

Renderização dinâmica de componentes

🔮 Melhorias Futuras

Algumas melhorias que podem ser implementadas no futuro incluem:

Adicionar mais grupos musculares

Incluir imagens dos exercícios

Criar treinos personalizados

Salvar histórico de treinos

Integração com banco de dados

👨‍💻 Autor

Projeto desenvolvido por Kaic Bispo.
