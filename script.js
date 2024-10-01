const produtos = [
    {
        "id": 0,
        "titulo": "Playsatation 5 Slim Disk",
        "img": "https://imgs.casasbahia.com.br/1565784391/1xg.jpg",
        "valor": "R$3.700.99",
        "descricao": "Descubra uma nova era de jogos com o PlayStation 5 Slim Disk. Este console de última geração oferece uma experiência de jogo incomparável, combinando potência e velocidade em um design mais compacto e elegante. SSD de Ultra-Alta Velocidade: Carregue seus jogos favoritos em questão de segundos com o SSD integrado, reduzindo drasticamente os tempos de espera."
    },
    {
        "id": 1,
        "titulo": "Monitor Gamer Curvo Samsung Odessey G7",
        "img": "https://images.samsung.com/is/image/samsung/p6pim/au/ls28ag700nexxy/gallery/au-odyssey-g7-g70a-ls28ag700nexxy-463156036?$650_519_PNG$",
        "valor": "R$5.190,00",
        "descricao": "O monitor é elogiado por sua qualidade de imagem, cores vibrantes, nitidez, fluidez e curvatura imersiva. A resolução de 1440p é considerada ideal para a tela de 27 polegadas. O monitor é recomendado para jogos e filmes, mas alguns usuários relatam que a curvatura pode ser um pouco forte para uso em trabalho."
    },
    {
        "id": 2,
        "titulo": "Oculus Quest 3",
        "img": "data:image/jpeg;base64,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",
        "valor": "R$4.400,00",
        "descricao": "O Futuro da Realidade Virtual Imersiva Experimente uma nova era de realidade virtual imersiva com o Oculus Quest 3. Este fone de ouvido VR de ponta combina a mais recente tecnologia com design fácil de usar para transportar você para mundos virtuais como nunca antes"
    },
    {
        "id": 3,
        "titulo": "Xbox Series X",
        "img": "https://m.media-amazon.com/images/I/516pVDAQMnL._AC_SX522_.jpg",
        "valor": "4.090,00",
        "descricao": "Aproveite ao máximo cada minuto de jogo com a Retomada Rápida, tempos de carregamento ultrarrápidos e jogabilidade de até 120 FPS – tudo possibilitado pela Xbox Velocity Architecture."
    },
    {
        "id": 4,
        "titulo": "Msi Creator Pro 16 · Intel Core Ultra 9 · 185h RTX 5000 Ada Tela 16' Uhd SSD 4TB Nvme Ram 64gb",
        "img": "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2Fsync_mirakl%2F590265%2FMsi-Creator-Pro-16-Intel-Core-Ultra-9-185h-RTX-5000-Ada-Tela-16-Uhd-SSD-4TB-Nvme-Ram-64gb_1717500794_g.jpg&w=1080&q=75",
        "valor": "R$64.105,26",
        "descricao": "O msi creator pro 16 é o modelo workstation que possui processador intel core ultra 9 · · 185h, placa de vídeo rtx 5000 ada da nvidia, tela 16 · uhd, disco ssd 4tb nvme, memória ram de 64gb ddr5 5600mhz e windows 11 pro de 64bits."
    },
    {
        "id": 5,
        "titulo": "Echo Dot 5ª geração",
        "img": "https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SY450_.jpg",
        "valor": "R$440,00",
        "descricao": "Experiência sonora ainda melhor, com vocais mais nítidos, graves mais potentes e um som vibrante. Tenha mais conforto em casa ao criar rotinas com o novo sensor de temperatura. - Conectividade Wi-Fi: Wifi de banda dupla suporta redes 802.11 a/b/g/n/ac (2,4 e 5 GHz)."
    },
    {
        "id": 6,
        "titulo": "Projetor Epson Pro Cinema LS12000 4k HDR10+ HDMI 2.1 2700 lumens",
        "img": "https://cdn-ilbajpf.nitrocdn.com/VtyRdiFKfgGnLdhcjoAZFptcCjMABNwE/assets/images/optimized/rev-9d2f834/htclick.com.br/wp-content/uploads/2019/09/ls12000-2-1024x1024.jpg",
        "valor": "R$45.300,00",
        "descricao": "Apresentamos o Projetor Laser Epson Pro Cinema LS12000 4K PRO-UHD1 3-Chip 3LCD. Utilizando uma nova fonte de luz Laser Array, o Pro Cinema LS12000 é capaz de exibir uma imagem 4K na tela de até surpreendentes 2.700 lúmens para brilho colorido e branco2. E, quando acionado por um processador de imagem Epson ZX proprietário para processamento de imagem poderoso, o Pro Cinema LS12000 produz brilho incrível, precisão de cores e detalhes de imagem para exibir fielmente todo o seu conteúdo da maneira que deveria ser visto."
    },
    {
        "id": 7,
        "titulo": "Headset Gamer RGB Led",
        "img": "data:image/jpeg;base64,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",
        "valor": "R$84,00",
        "descricao": "Desfrute de uma experiência imersiva com este Headset Gamer, ideal para Computadores, Notebooks, Celulares e Vídeo Games."
    },
    {
        "id": 8,
        "titulo": "Iphone 15 Pro Max",
        "img": "data:image/jpeg;base64,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",
        "valor": "R$7.400,00",
        "descricao": "Compre agora o iPhone 15 Pro Max. Forjado em titânio e com o incomparável chip A17 Pro, botão de Ação configurável e o sistema de câmera mais poderoso em um iPhone."
    }
];

function getIdBtn() {
    
    const params = new URLSearchParams(window.location.search);

    const idProduto = params.get('id'); 
    return idProduto;
}

function exibirProdutoPorId() {

    id = getIdBtn();

    let produto = null;
    for (const p of produtos) {
        if (p.id == id) {
            produto = p;
            break;
        }
    }

    if (produto != null) {
        let div = document.createElement("div");
        div.className = "container-itens";

        let item = document.createElement("div");
        item.className = "item detalhe";

        let img = document.createElement("img");
        img.className = "img-item";
        img.src = produto.img;

        let h2 = document.createElement("h2");
        h2.className = "titulo";
        h2.textContent = produto.titulo;

        let p = document.createElement("p");
        p.className = "descricao";
        p.textContent = produto.descricao;

        let a = document.createElement("a");

        let span = document.createElement("span");
        span.textContent = produto.valor;

        let btn = document.createElement("button");
        btn.className = "btn-item";
        btn.textContent = "Adicionar ao carrinho";

        div.appendChild(item);
        item.appendChild(img);
        item.appendChild(a);
        a.appendChild(h2);
        a.appendChild(span);
        a.appendChild(p);
        a.appendChild(btn);

        let container = document.getElementById("container");
        
        container.appendChild(div);
        
    } else {
        alert('itens inexistentes');
    }
}

function criarProdutos() {
    let i = 0;
    for (const p of produtos) {

        let item = document.createElement("div");
        item.className = "item";

        let img = document.createElement("img");
        img.className = "img-item";
        img.src = p.img;

        let h2 = document.createElement("h2");
        h2.className = "titulo";
        h2.textContent = p.titulo;

        let a = document.createElement("a");
        let qnt = document.createElement("input");
        qnt.type = "number";
        qnt.id = "quantidade";
        qnt.min = "1";
        qnt.oninput="validity.valid||(value='');";
        qnt.placeholder = "quantidade";

        let span = document.createElement("span");
        span.textContent = p.valor;

        let btn = document.createElement("button");
        btn.className = "btn-item";
        btn.setAttribute("id", i.toString());
        btn.onclick = function() { 
            let id = this.getAttribute("id");
            let local = 'detalhes.html?id=' + id;
            window.location.href = local;
        }; 
        
        btn.textContent = "Comprar";

        let container = document.getElementsByClassName("container-itens")[0];
        if (container) {
            container.appendChild(item);
            item.appendChild(img);
            item.appendChild(a);
            a.appendChild(h2);
            a.appendChild(span);
            a.appendChild(qnt);
            a.appendChild(btn);
        } else {
            console.error("Elemento não encontrado.");
        }
        i++;
    }
    document.body.appendChild(container);
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}