/* ---------- MENU ---------- */

function toggleMenu() {
  document.querySelector(".menu-links").classList.toggle("open");
  document.querySelector(".hamburger-icon").classList.toggle("open");
}

/* ---------- THEME ---------- */

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeLabels();
}

function updateThemeLabels() {
  const isDark = document.documentElement.classList.contains("dark");
  const label = isDark
    ? i18n[currentLang]["theme.light"]
    : i18n[currentLang]["theme.dark"];
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  });
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (localStorage.getItem("theme")) return;
    document.documentElement.classList.toggle("dark", e.matches);
    updateThemeLabels();
  });

/* ---------- LANGUAGE ---------- */

const i18n = {
  en: {
    "theme.dark": "Switch to dark mode",
    "theme.light": "Switch to light mode",
    "lang.switch": "Mudar para português",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "profile.greet": "Hello, I'm",
    "profile.role": "Computer Science Student",
    "profile.cv": "Download CV",
    "profile.contact": "Contact Info",
    "about.p1": "Get To Know More",
    "about.title": "♡ About Me ☆",
    "skills.p1": "Explore My",
    "skills.title": "☆ Skills ♡",
    "projects.p1": "Browse some of my",
    "projects.title": "♡ Projects ☆",
    "btn.github": "View on GitHub ➔",
    "btn.view": "View ➔",
    "btn.dev": "In development",
    "proj1.cat": "WEB DEVELOPMENT",
    "proj1.desc":
      "A medical web application developed in the discipline of Creative Experience for the Institute Buko Kaesemodel with the purpose of assessing Fragile X Syndrome. Based on symptoms reported by the patient and its responsible during the consultation, the system calculates a risk score that assists physicians in deciding whether to refer the patient for a diagnostic testing.",
    "proj2.cat": "STRUCTURED NETWORKS",
    "proj2.title": "Projection of a Corporative Network",
    "proj2.desc":
      "Design and simulation of a robust corporative network topology with two branches through a three-layer distribution following the hierarchical structure using Cisco Packet Tracer. Implementation of routing protocols, VLANs, trunk and access connections, public and private networks, a datacenter with servers, NAT, firewall, VPN, ensuring secure and efficient data transmission.",
    "proj2.tech": "Cisco Packet Tracer, Networking Protocols",
    "proj3.cat": "PYTHON DEVELOPMENT",
    "proj3.title": "Virtual Memory Simulator",
    "proj3.desc":
      "The Virtual Memory project aims to simulate and demonstrate the operation of different memory mapping techniques used in computer systems. Developed in Python, the project covers methods such as direct mapping, associative mapping, set-associative mapping, and a customized mapping, allowing users to understand how memory addresses are related between main memory and cache memory. The application helps improve the understanding of memory hierarchy and the differences between the techniques used to optimize data access.",
    "proj3.tech": "Python, PyCharm, Virtual Memory",
    "proj4.cat": "CYBER-PHYSICAL SYSTEMS",
    "proj4.desc":
      "Establishment of communication using the MQTT protocol for message exchange between a PC and a microcontroller, using sensors and actuators to read data and communicate it between the devices. We implemented a DHT11 sensor in the circuit to read and display the sensor data. We also used a HCSR04 ultrasonic sensor to read distance data and send it to the PC via MQTT, where it was displayed in a graphical interface.",
    "proj4.tech": "ESP32, Python, Sensors, IoT",
    "proj5.cat": "PYTHON DEVELOPMENT",
    "proj5.title": "Algorithm Reasoning",
    "proj5.desc":
      "A set of five lists and 40+ exercises developed in Python during the first semester in the discipline of Algorithm Reasoning to practice problem-solving skills. The project includes various challenges that require logical thinking and the application of programming concepts to solve problems efficiently. It serves as a valuable resource for improving coding skills and understanding algorithmic principles.",
    "proj6.cat": "ROBOTICS",
    "proj6.title": "Fairyweight Combat Robot",
    "proj6.desc":
      "Idealization, modeling, and assembly of a radio controlled ramp combat robot for the Fairyweight (150g) category, using Arduino for programming, Autodesk Fusion for 3D modeling and simulation, and assembling electronic and hardware components such as motors, sensors, and batteries.",
    "proj6.tech":
      "C, Arduino IDE, Hardware Design, Electronics, Autodesk Fusion, Creality Print, 3D Impression, Soldering, Mechanical Assembly",
    "proj7.cat": "GAME DEVELOPMENT",
    "proj7.desc":
      "A 2D game project from the first semester featuring the adventurous journey and challenges of Capi, the Capybara. Developed in Construct 3 with a focus on engaging story and gameplay mechanics and pixel art aesthetics.",
    "proj7.tech": "Construct 3, Game Logic, Story Development, Pixel Art",
    "proj8.cat": "WEB DEVELOPMENT",
    "proj8.title": "Initial Portfolio Website",
    "proj8.desc":
      "A responsive and interactive personal portfolio website showcasing projects, skills, and contact information built with HTML, CSS and JavaScript during the first semester for the discipline of Creative Experience. Is now outdated since the development of this current portfolio website.",
    "contact.p1": "Get in Touch",
    "contact.title": "☆ Contact Me! ♡",
    "footer.copy":
      "Copyright © 2026 Isabelle Duarte Santos. All Rights Reserved.",
  },
  pt: {
    "theme.dark": "Alternar para o modo escuro",
    "theme.light": "Alternar para o modo claro",
    "lang.switch": "Switch to English",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "profile.greet": "Olá, eu sou",
    "profile.role": "Estudante de Ciência da Computação",
    "profile.cv": "Baixar CV",
    "profile.contact": "Contato",
    "about.p1": "Saiba Mais",
    "about.title": "♡ Sobre Mim ☆",
    "skills.p1": "Explore Minhas",
    "skills.title": "☆ Habilidades ♡",
    "projects.p1": "Conheça alguns dos meus",
    "projects.title": "♡ Projetos ☆",
    "btn.github": "Ver no GitHub ➔",
    "btn.view": "Visualizar ➔",
    "btn.dev": "Em desenvolvimento",
    "proj1.cat": "DESENVOLVIMENTO WEB",
    "proj1.desc":
      "Uma aplicação web médica desenvolvida na disciplina de Experiência Criativa para o Instituto Buko Kaesemodel com o objetivo de realizar uma triagem médica dos sintomas da Síndrome do X Frágil. Com base nos sintomas relatados pelo paciente e por seu responsável durante a consulta, o sistema calcula uma pontuação de risco que auxilia os médicos na decisão de encaminhar o paciente para um teste diagnóstico.",
    "proj2.cat": "REDES CONVERGENTES",
    "proj2.title": "Projeto de uma Rede Corporativa",
    "proj2.desc":
      "Projeto e simulação de uma topologia de rede corporativa robusta com duas filiais por meio de uma distribuição em três camadas seguindo a estrutura hierárquica, utilizando o Cisco Packet Tracer. Implementação de protocolos de roteamento, VLANs, conexões trunk e access, redes públicas e privadas, um datacenter com servidores, NAT, firewall e VPN, garantindo transmissão de dados segura e eficiente.",
    "proj2.tech": "Cisco Packet Tracer, Protocolos de Rede",
    "proj3.cat": "DESENVOLVIMENTO EM PYTHON",
    "proj3.title": "Simulador de Memória Virtual",
    "proj3.desc":
      "O projeto de Memória Virtual tem como objetivo simular e demonstrar o funcionamento de diferentes técnicas de mapeamento de memória utilizadas em sistemas computacionais. Desenvolvido em Python, o projeto abrange métodos como mapeamento direto, mapeamento associativo, mapeamento associativo por conjuntos e um mapeamento personalizado, permitindo que os usuários entendam como os endereços de memória se relacionam entre a memória principal e a memória cache. A aplicação ajuda a aprimorar a compreensão da hierarquia de memória e das diferenças entre as técnicas usadas para otimizar o acesso aos dados.",
    "proj3.tech": "Python, PyCharm, Memória Virtual",
    "proj4.cat": "SISTEMAS CIBER-FÍSICOS",
    "proj4.desc":
      "Estabelecimento de comunicação utilizando o protocolo MQTT para troca de mensagens entre um PC e um microcontrolador, usando sensores e atuadores para ler dados e comunicá-los entre os dispositivos. Implementamos um sensor DHT11 no circuito para ler e exibir os dados do sensor. Também utilizamos um sensor ultrassônico HCSR04 para ler dados de distância e enviá-los ao PC via MQTT, onde foram exibidos em uma interface gráfica.",
    "proj4.tech": "ESP32, Python, Sensores, IoT",
    "proj5.cat": "DESENVOLVIMENTO EM PYTHON",
    "proj5.title": "Raciocínio Algorítmico",
    "proj5.desc":
      "Um conjunto de cinco listas e mais de 40 exercícios desenvolvidos em Python durante o primeiro semestre na disciplina de Raciocínio Algorítmico para praticar habilidades de resolução de problemas. O projeto inclui diversos desafios que exigem pensamento lógico e a aplicação de conceitos de programação para resolver problemas de forma eficiente. Serve como um recurso valioso para aprimorar habilidades de programação e compreender princípios algorítmicos.",
    "proj6.cat": "ROBÓTICA",
    "proj6.title": "Robô de Combate Fairyweight",
    "proj6.desc":
      "Idealização, modelagem e montagem de um robô de combate do tipo rampa radiocontrolado para a categoria Fairyweight (150g), utilizando Arduino para a programação, Autodesk Fusion para modelagem e simulação 3D, e montagem de componentes eletrônicos e de hardware como motores, sensores e baterias.",
    "proj6.tech":
      "C, Arduino IDE, Projeto de Hardware, Eletrônica, Autodesk Fusion, Creality Print, Impressão 3D, Solda, Montagem Mecânica",
    "proj7.cat": "DESENVOLVIMENTO DE JOGOS",
    "proj7.desc":
      "Um projeto de jogo 2D do primeiro semestre que apresenta a jornada de aventuras e os desafios de Capi, a Capivara. Desenvolvido no Construct 3 com foco em uma história envolvente, mecânicas de gameplay e estética em pixel art.",
    "proj7.tech":
      "Construct 3, Lógica de Jogo, Desenvolvimento de História, Pixel Art",
    "proj8.cat": "DESENVOLVIMENTO WEB",
    "proj8.title": "Site de Portfólio Inicial",
    "proj8.desc":
      "Um site de portfólio pessoal responsivo e interativo apresentando projetos, habilidades e informações de contato, construído com HTML, CSS e JavaScript durante o primeiro semestre para a disciplina de Experiência Criativa. Está desatualizado desde o desenvolvimento deste portfólio atual.",
    "contact.p1": "Entre em Contato",
    "contact.title": "☆ Fale Comigo! ♡",
    "footer.copy":
      "Copyright © 2026 Isabelle Duarte Santos. Todos os direitos reservados.",
  },
};

const aboutData = {
  en: [
    {
      title: "Undergraduate Student in Computer Science",
      subtitle: "Pontifícia Universidade Católica do Paraná - PUCPR",
      text: "I'm 18 years old and currently at the fourth semester of my degree. My hobbies include volleyball, music, singing, drawing and gaming. At 8 years old, I self-taught myself english to be able to communicate with other people online in games. My interest in technology begin as a kid and has only grown stronger with time. I believe that coding creates a real impact when applied to solve problems and build useful solutions. My aim is to create with purpose while developing both my technical and soft skills.",
    },
    {
      title: "Member of the Robotics Team of PUCPR",
      subtitle:
        "Development of robots from different categories and participation in competitions",
      text: "Since I joined the Robotics Team, I have enhanced my skills and knowledge in electronics, modeling, programming, hardware assemble, and teamwork. Our team develops robots for various categories, including line-following, sumo, trakking, combat and lego. We have recently participated in of the Copa Pinhão 2026, where we have had the opportunity to showcase our robots and compete against other teams. This experience has allowed me to apply my theoretical knowledge in a practical setting, while also learning from my peers, from other competitors and my mentor, while also giving me new ideas to my future projects.",
    },
    {
      title: "Member of the Competitive Programming Club at PUCPR",
      subtitle: "Development of coding skills and problem-solving abilities",
      text: "Beyond my academic coursework, I actively engage in practical coding projects and developing communities such as the Competitive Programming Club. We use mostly Python and C++ during the development of our solutions, and recently we took part in the SBC Programming Marathon 2026, being able to experience the thrill of a real competitive programming competition. I am dedicated to continuously evolving my skills and will also participate in the next Marathon of 2027.",
    },
    {
      title: "President of the Volleyball Club at PUCPR",
      subtitle: "Teamwork and community engagement",
      text: "Collaboration and teamwork are central to how I approach challenges. Through my role as President of the club, I have honed my leadership and communication skills, while fostering a sense of community and friendship among our members.",
    },
    {
      title: "Social Projects and Community Engagement",
      subtitle: "My participation",
      text: "I have also engaged in social initiatives, such as volunteering my time in the Casa de Francisco e Clara of PUCPR to contribute with community kids from Vila Torres during the World Playing Week. It was a rewarding experience, and I took part in the face painting activity with the kids. I'm also currently involved in the Community Project of the 'Clínica de TIC' at PUCPR now at my fourth semester, where we provide free technical support to the community, helping them with software and technology related issues.",
    },
  ],
  pt: [
    {
      title: "Graduanda em Ciência da Computação",
      subtitle: "Pontifícia Universidade Católica do Paraná - PUCPR",
      text: "Tenho 18 anos e atualmente estou no quarto semestre da graduação. Meus hobbies incluem vôlei, música, cantar, desenhar e jogar. Aos 8 anos, aprendi inglês por conta própria para conseguir me comunicar com outras pessoas online em jogos. Meu interesse por tecnologia começou quando eu era criança e só se fortaleceu com o tempo. Acredito que programar gera um impacto real quando aplicado para resolver problemas e construir soluções úteis. Meu objetivo é criar com propósito, desenvolvendo tanto minhas habilidades técnicas quanto comportamentais.",
    },
    {
      title: "Integrante da Equipe de Robótica da PUCPR",
      subtitle:
        "Desenvolvimento de robôs de diferentes categorias e participação em competições",
      text: "Desde que entrei na Equipe de Robótica, aprimorei minhas habilidades e conhecimentos em eletrônica, modelagem, programação, montagem de hardware e trabalho em equipe. Nossa equipe desenvolve robôs para várias categorias, incluindo seguidor de linha, sumô, trekking, combate e lego. Recentemente participamos da Copa Pinhão 2026, onde tivemos a oportunidade de apresentar nossos robôs e competir com outras equipes. Essa experiência me permitiu aplicar meu conhecimento teórico na prática, aprendendo com meus colegas, com outros competidores e com meu mentor, além de me dar novas ideias para projetos futuros.",
    },
    {
      title: "Integrante do Clube de Programação Competitiva da PUCPR",
      subtitle:
        "Desenvolvimento de habilidades de programação e resolução de problemas",
      text: "Além das atividades acadêmicas, participo ativamente de projetos práticos de programação e de comunidades de desenvolvimento, como o Clube de Programação Competitiva. Utilizamos principalmente Python e C++ no desenvolvimento das nossas soluções e, recentemente, participamos da Maratona de Programação da SBC 2026, podendo vivenciar a emoção de uma competição real de programação competitiva. Estou me dedicando a evoluir continuamente minhas habilidades e também participarei da próxima Maratona de 2027.",
    },
    {
      title: "Presidente do Clube de Vôlei da PUCPR",
      subtitle: "Trabalho em equipe e engajamento comunitário",
      text: "A colaboração e o trabalho em equipe são centrais na forma como encaro desafios. Por meio do meu papel como Presidente do clube, aperfeiçoei minhas habilidades de liderança e comunicação, além de fomentar um senso de comunidade e amizade entre nossos integrantes.",
    },
    {
      title: "Projetos Sociais e Engajamento Comunitário",
      subtitle: "Minha participação",
      text: "Já me envolvi em iniciativas sociais, como o voluntariado na Casa de Francisco e Clara da PUCPR, contribuindo com as crianças da comunidade da Vila Torres durante a Semana Mundial do Brincar. Foi uma experiência gratificante, e participei da oficina de pintura no rosto com as crianças. Atualmente também faço parte do Projeto Comunitário da 'Clínica de TIC' na PUCPR, no meu quarto semestre, onde oferecemos suporte técnico gratuito à comunidade, ajudando com questões de software e tecnologia.",
    },
  ],
};

let currentLang = localStorage.getItem("lang") === "pt" ? "pt" : "en";
let renderAboutCard = null;

function applyLang() {
  const dict = i18n[currentLang];
  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.getAttribute("data-i18n")];
    if (value) el.textContent = value;
  });
  const label = currentLang === "pt" ? "PT" : "EN";
  const d = document.getElementById("lang-label-desktop");
  const m = document.getElementById("lang-label-mobile");
  if (d) d.textContent = label;
  if (m) m.textContent = label;
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-label", dict["lang.switch"]);
    btn.setAttribute("title", dict["lang.switch"]);
  });
  updateThemeLabels();
  if (renderAboutCard) renderAboutCard();
}

function toggleLang() {
  currentLang = currentLang === "en" ? "pt" : "en";
  localStorage.setItem("lang", currentLang);
  applyLang();
}

/* ---------- CV DOWNLOAD ---------- */

const CV_FILES = {
  en: {
    url: "./assets/curriculo-en.pdf",
    filename: "Isabelle-Duarte-Santos-Resume-EN.pdf",
  },
  pt: {
    url: "./assets/curriculo-pt.pdf",
    filename: "Isabelle-Duarte-Santos-Curriculo-PT.pdf",
  },
};

function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function downloadCV() {
  const cv = CV_FILES[currentLang] || CV_FILES.en;
  try {
    const response = await fetch(cv.url);
    if (!response.ok) throw new Error(response.status);
    saveBlob(await response.blob(), cv.filename);
  } catch (e) {
    const link = document.createElement("a");
    link.href = cv.url;
    link.download = cv.filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

/* ---------- PRELOADER ---------- */

function initPreloader() {
  const el = document.getElementById("preloader");
  if (!el) return;

  const out = document.getElementById("preloader-type");
  const caret = el.querySelector(".preloader__caret");

  const finish = () => {
    el.classList.add("done");
    document.documentElement.classList.remove("is-loading");
    setTimeout(() => el.remove(), 800);
  };

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return finish();

  const word = "isa.exe";
  const TYPE_SPEED = 150;
  const WAIT_AFTER = 1600;
  let i = 0;

  const type = () => {
    out.textContent = word.slice(0, ++i);
    if (i < word.length) return setTimeout(type, TYPE_SPEED);
    caret?.classList.add("blinking");
    setTimeout(finish, WAIT_AFTER);
  };

  setTimeout(type, 300);
}

/* ---------- SCROLL REVEAL ---------- */

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );
  items.forEach((el) => observer.observe(el));
}

/* ---------- ACTIVE NAV LINK ---------- */

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a, .menu-links a");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) =>
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + entry.target.id,
          ),
        );
      });
    },
    { threshold: 0.5 },
  );
  sections.forEach((s) => observer.observe(s));
}

/* ---------- ABOUT PHOTO STACK & TEXT SYNC ---------- */

function initPhotoStack() {
  const stackContainer = document.getElementById("photo-stack");
  if (!stackContainer) return;

  const photos = Array.from(
    stackContainer.querySelectorAll(".photo-stack-item"),
  );
  const cardTitle = document.getElementById("about-card-title");
  const cardSubtitle = document.getElementById("about-card-subtitle");
  const textContent = document.getElementById("about-text-content");

  let currentIndex = 0;
  let isAnimating = false;

  const updateStackPositions = () => {
    photos.forEach((photo, i) => {
      const pos = (i - currentIndex + photos.length) % photos.length;
      photo.setAttribute("data-stack-pos", pos);
    });
  };

  renderAboutCard = () => {
    const data = aboutData[currentLang][currentIndex];
    if (cardTitle) cardTitle.textContent = data.title;
    if (cardSubtitle) cardSubtitle.textContent = data.subtitle;
    if (textContent) textContent.textContent = data.text;
  };

  updateStackPositions();
  renderAboutCard();

  stackContainer.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    const topPhoto = photos[currentIndex];

    topPhoto.classList.add("dismissing");

    const textElements = [cardTitle, cardSubtitle, textContent];
    textElements.forEach((el) => el?.classList.add("text-fade-out"));

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % photos.length;

      renderAboutCard();

      topPhoto.classList.remove("dismissing");
      updateStackPositions();

      textElements.forEach((el) => el?.classList.remove("text-fade-out"));

      setTimeout(() => {
        isAnimating = false;
      }, 300);
    }, 300);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initReveal();
  initActiveNav();
  initPhotoStack();
  applyLang();
});
