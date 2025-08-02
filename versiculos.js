
const versiculos = [
  {
    texto: "Bem-aventurados os que choram, porque eles serão consolados.",
    referencia: "📖 Mateus 5:4",
    explicacao: "Deus vê suas lágrimas e promete consolo aos que sofrem.",
    tema: "Consolo"
  },
  {
    texto: "Lança o teu cuidado sobre o Senhor, e ele te susterá.",
    referencia: "📖 Salmos 55:22",
    explicacao: "Entregue suas preocupações a Deus. Ele cuidará de tudo.",
    tema: "Confiança"
  },
  {
    texto: "No amor não há temor, antes o perfeito amor lança fora o temor.",
    referencia: "📖 1 João 4:18",
    explicacao: "O amor de Deus elimina o medo. Nele há segurança.",
    tema: "Amor"
  },
  {
    texto: "O meu socorro vem do Senhor, que fez o céu e a terra.",
    referencia: "📖 Salmos 121:2",
    explicacao: "Confie naquele que criou tudo. Ele é seu ajudador.",
    tema: "Ajuda"
  },
  {
    texto: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.",
    referencia: "📖 Provérbios 3:5",
    explicacao: "Dependa de Deus, não da sua lógica. Ele sabe o melhor caminho.",
    tema: "Fé"
  },
  {
    texto: "O Senhor é bom, uma fortaleza no dia da angústia.",
    referencia: "📖 Naum 1:7",
    explicacao: "Mesmo nos dias difíceis, Deus é sua proteção e bondade.",
    tema: "Consolo"
  },
  {
    texto: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum.",
    referencia: "📖 Salmos 23:4",
    explicacao: "Deus caminha com você até nos momentos mais escuros.",
    tema: "Coragem"
  },
  {
    texto: "Sede fortes e revigorem o vosso coração, vós todos que esperais no Senhor.",
    referencia: "📖 Salmos 31:24",
    explicacao: "A esperança em Deus fortalece e renova a alma.",
    tema: "Esperança"
  },
  {
    texto: "Em paz me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.",
    referencia: "📖 Salmos 4:8",
    explicacao: "A verdadeira paz e segurança vêm do Senhor.",
    tema: "Paz"
  },
  {
    texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    referencia: "📖 Salmos 46:1",
    explicacao: "Nos momentos de angústia, Deus está com você e é seu abrigo.",
    tema: "Refúgio"
  },
  {
    texto: "Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.",
    referencia: "📖 Salmos 103:2",
    explicacao: "Lembre-se das bênçãos de Deus. Gratidão renova o coração.",
    tema: "Gratidão"
  },
  {
    texto: "Elevo os meus olhos para os montes; de onde me virá o socorro?",
    referencia: "📖 Salmos 121:1",
    explicacao: "Olhe para cima. Seu socorro vem de Deus.",
    tema: "Ajuda"
  },
  {
    texto: "Tudo posso naquele que me fortalece.",
    referencia: "📖 Filipenses 4:13",
    explicacao: "Com a força de Deus, nada é impossível para você.",
    tema: "Força"
  },
  {
    texto: "Guia-me na tua verdade, e ensina-me, pois tu és o Deus da minha salvação.",
    referencia: "📖 Salmos 25:5",
    explicacao: "Deus é seu mestre e salvador. Siga os caminhos dEle.",
    tema: "Direção"
  },
  {
    texto: "O Senhor é a minha luz e a minha salvação; a quem temerei?",
    referencia: "📖 Salmos 27:1",
    explicacao: "Não há motivo para medo. Deus é sua segurança.",
    tema: "Coragem"
  },
  {
    texto: "Espera no Senhor, anima-te, e ele fortalecerá o teu coração.",
    referencia: "📖 Salmos 27:14",
    explicacao: "A espera em Deus traz força e coragem para seguir.",
    tema: "Esperança"
  },
  {
    texto: "Porque eu bem sei os pensamentos que penso de vós, diz o Senhor.",
    referencia: "📖 Jeremias 29:11",
    explicacao: "Deus tem planos de paz e esperança para o seu futuro.",
    tema: "Propósito"
  },
  {
    texto: "O Senhor te abençoe e te guarde.",
    referencia: "📖 Números 6:24",
    explicacao: "A proteção e a bênção de Deus estão sobre sua vida.",
    tema: "Bênção"
  },
  {
    texto: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
    referencia: "📖 Salmos 91:1",
    explicacao: "Há descanso e segurança para quem vive perto de Deus.",
    tema: "Proteção"
  },
  {
    texto: "Sabei que o Senhor é Deus; foi ele, e não nós, que nos fez.",
    referencia: "📖 Salmos 100:3",
    explicacao: "Reconheça que você pertence a Deus. Ele cuida de você.",
    tema: "Identidade"
  },

  // Abaixo os versículos de Apocalipse e os 20 novos adicionados anteriormente

  {
    texto: "E Deus limpará de seus olhos toda lágrima.",
    referencia: "📖 Apocalipse 21:4",
    explicacao: "Não haverá mais dor, tristeza ou morte. Deus enxugará todas as lágrimas com Seu amor eterno.",
    tema: "Esperança"
  },
  {
    texto: "Eis que faço novas todas as coisas.",
    referencia: "📖 Apocalipse 21:5",
    explicacao: "Deus transforma o velho em novo. Há sempre esperança de recomeço em Cristo.",
    tema: "Renovação"
  },
  {
    texto: "Eis que estou à porta, e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa.",
    referencia: "📖 Apocalipse 3:20",
    explicacao: "Jesus deseja entrar no seu coração. Basta abrir a porta.",
    tema: "Relacionamento"
  },
  {
    texto: "Sê fiel até a morte, e dar-te-ei a coroa da vida.",
    referencia: "📖 Apocalipse 2:10",
    explicacao: "A fidelidade a Deus traz recompensa eterna. Não desista!",
    tema: "Fidelidade"
  },
  {
    texto: "Ao que vencer, concederei que se assente comigo no meu trono.",
    referencia: "📖 Apocalipse 3:21",
    explicacao: "Os que perseveram com fé reinarão com Cristo. Há glória reservada para você.",
    tema: "Vitória"
  },
  {
    texto: "Eu sou o Alfa e o Ômega, o princípio e o fim.",
    referencia: "📖 Apocalipse 22:13",
    explicacao: "Deus está no controle do começo ao fim. Confie n’Ele.",
    tema: "Soberania"
  },
  {
    texto: "O Senhor Deus Todo-Poderoso é o seu templo, e o Cordeiro.",
    referencia: "📖 Apocalipse 21:22",
    explicacao: "Deus é a presença constante, não limitada a lugares. Ele habita em você.",
    tema: "Presença"
  },
  {
    texto: "Bem-aventurados aqueles que guardam as palavras desta profecia.",
    referencia: "📖 Apocalipse 22:7",
    explicacao: "A obediência à Palavra traz bênçãos eternas.",
    tema: "Obediência"
  },
  {
    texto: "E não haverá mais noite, porque o Senhor Deus os iluminará.",
    referencia: "📖 Apocalipse 22:5",
    explicacao: "Deus é a luz eterna. Com Ele, não há escuridão.",
    tema: "Luz"
  },
  {
    texto: "Eles o venceram pelo sangue do Cordeiro e pela palavra do seu testemunho.",
    referencia: "📖 Apocalipse 12:11",
    explicacao: "A vitória é sua por meio de Jesus e pela fé que você vive.",
    tema: "Vitória"
  },
  {
    texto: "E vi um novo céu e uma nova terra.",
    referencia: "📖 Apocalipse 21:1",
    explicacao: "Deus está preparando algo glorioso. O melhor ainda está por vir.",
    tema: "Futuro"
  }
];
