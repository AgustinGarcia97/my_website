export const navbar_items = [
    {
        name:"Home",
        link:"/",
    },

    {
        name:"About",
        link:"/about",
    },

    {
        name:"Skills",
        link:"/skills",
    },

    {
        name:"Projects",
        link:"/projects",
    },

    {
        name:"Contact",
        link:"/contact",
    },
]

export const navbar_items_by_lang: Record<Language, { name: string; link: string }[]> = {
  en: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ],
  esp: [
    { name: "Inicio", link: "/" },
    { name: "Sobre mí", link: "/about" },
    { name: "Habilidades", link: "/skills" },
    { name: "Proyectos", link: "/projects" },
    { name: "Contacto", link: "/contact" },
  ],
  de: [
    { name: "Startseite", link: "/" },
    { name: "Über mich", link: "/about" },
    { name: "Fähigkeiten", link: "/skills" },
    { name: "Projekte", link: "/projects" },
    { name: "Kontakt", link: "/contact" },
  ]
};

export type Language = "en" | "esp" | "de";

type AboutMe = {
    title: string;
    text: string;
};

type Skills = {
    title: string;
    text: string;
};

type Project = {
    project_title: string;
    link: string;
    description:string;
    technologies:string[];
    project:string;
    state:string;

}

type Projects = {
    subtitleF: string;
    frontend_projects: Project[];
    project: string;
    description: string;
    technologies:string;
    subtitleB: string;
    subtitleI:string;
    backend_projects: Project[];
    infrastructure_projects: Project[];
}

type Contacts = {
    title: string;
    form_title:string;
    first_input:string;
    second_input:string;
    third_input:string;
    submit:string;
}

export const home_data: Record<Language, { about_me: AboutMe, skills:Skills, my_projects:Projects, contact:Contacts }> = {
    esp: {
        about_me: {
            title: "Sobre Mí",
            text: "👋 ¡Hola! Soy Agustín García, desarrollador de Buenos Aires, Argentina. Soy estudiante de cuarto año de la Licenciatura en Informática, con perfil full stack y experiencia desarrollando aplicaciones tanto del lado del cliente (frontend) como del servidor (backend). A lo largo de mi formación y proyectos personales, he trabajado en el diseño de interfaces, la creación de funcionalidades, el manejo de bases de datos y la integración de servicios, siempre buscando que la tecnología se traduzca en soluciones reales y eficientes\n" +
                "Tengo la capacidad de llevar adelante un desarrollo completo: desde la idea inicial hasta su puesta en marcha, incluyendo la lógica del negocio, la conexión con APIs, la gestión de usuarios, y el despliegue en la nube. Además, me interesa especialmente el rol de la tecnología en contextos críticos, como la seguridad informática y los entornos productivos.\n" +
                "Me destaco por ser una persona comprometida, con facilidad para comunicarme, aprender nuevas herramientas y trabajar en equipo. Me motiva estar en constante crecimiento, asumir nuevos desafíos y sumar valor con responsabilidad, empatía y creatividad.",

        },
        skills:{
            title:"Mis Habilidades",
            text:"",
        },
        my_projects:{
            subtitleF:"Desarrollo Frontend",
            subtitleB:"Desarrollo Backend",
            subtitleI:"Infraestructura",
            project:"Mis Proyectos",
            description:"Descripcion",
            technologies:"Tecnologias",
            frontend_projects:[
                {
                    state:" Finalizado",
                    project:"Proyecto",
                    project_title:" Roll n' Play",
                    technologies:[
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI",

                    ],

                    description:" En este proyecto, diseñé e implementé una página web, en este caso un e-commerce, sobre una tienda de juegos de mesa " ,
                    link:"https://github.com/KakuInnovation/UADE-GRUPO8-475802-2024-1C-NOCHE-VIE-APPS-INTERACTIVAS",
                },
                {
                    project:"Proyecto",
                    project_title:" Eventify",
                    state:"Finalizado",
                    technologies:[
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI",
                        "OAuth2"

                    ],

                    description:" " ,
                    link:"https://github.com/eliaslamanna/integracion-front/tree/master-integration",
                },
                {
                    project_title:" Stamina Auth",
                    state:"Finalizado",
                    project:"Proyecto",
                    technologies:[
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI",

                    ],
                    description:" En este proyecto, diseñé una aplicación web frontend, para la autenticación a una red social",
                    link:"https://github.com/AgustinGarcia97/stamina-auth-front",
                },
                {
                    project_title:" Optimus PyME",
                    state:"Finalizado",
                    project:"Proyecto",
                    technologies:[
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI",

                    ],
                    description:" Este es proyecto, implementé el diseño de una aplicación web frontend, para un sistema de seguridad para PyMEs",
                    link:"https://github.com/AgustinGarcia97/seminario_gestion_tecnologia/branches",
                },
                {
                    project_title:" My Social Connect",
                    project:"Proyecto",
                    state:"En desarrollo",
                    technologies:[
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI",

                    ],
                    description:" Este es proyecto, diseñé e implementé una aplicación web frontend, para un sistema de seguridad para PyMEs",
                    link:"https://github.com/AgustinGarcia97/socialconnect",
                },
                {
                    project_title:" My Social Connect Mobile",
                    state:"Finalizado",
                    project:"Proyecto",
                    technologies:[
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Native",
                        "Redux",
                        "MaterialUI",

                    ],
                    description:" Este es proyecto, diseñé e implementé una aplicación mobile frontend, sobre una red social masiva",
                    link:"https://github.com/AgustinGarcia97/socialconnect",
                },

            ],
            backend_projects: [
                {
                    project:"Proyecto",
                    project_title:" Roll n' Play",
                    state:"Finalizado",
                    technologies:[
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",
                    ],

                    description:" Plataforma backend de comercio electrónico especializada en juegos de mesa. Permite a los usuarios explorar, comprar y gestionar productos, con funcionalidades como gestión de catálogo, autenticación segura de usuarios y procesamiento de pedidos. Diseñada para ofrecer una experiencia de compra fluida y segura para los fanáticos de los juegos de mesa. " ,
                    link:"https://github.com/AgustinGarcia97/RollnplayBackend",
                },
                {
                    project:"Proyecto",
                    project_title:" Auth Service",
                    state:"Finalizado",
                    technologies:[
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",
                        "OAuth2",

                    ],

                    description:" Servicio de autenticación y autorización robusto, diseñado para ser integrado en arquitecturas de microservicios. Implementa OAuth2 y JWT para garantizar una gestión segura de usuarios, sesiones y permisos. Pensado para escalar y adaptarse a múltiples aplicaciones. " ,
                    link:"https://github.com/AgustinGarcia97/auth-service/tree/new_text",
                },
                {
                    project:"Proyecto",
                    project_title:" Chat Service ",
                    state:" En desarrollo",
                    technologies:[
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "MongoDB",
                        "Spring Security",
                        "OAuth2",
                        "WebSocket"

                    ],

                    description:"Microservicio de mensajería en tiempo real que utiliza WebSockets para comunicación instantánea entre usuarios. Almacena mensajes en MongoDB y asegura las conexiones mediante OAuth2. Ideal para integrarse en plataformas sociales o colaborativas. " ,
                    link:"https://github.com/AgustinGarcia97/chat_service/tree/dev",
                },
                {
                    project:"Proyecto",
                    project_title:"My Social Connect ",
                    state:" Finalizado",
                    technologies:[
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",

                    ],

                    description:"Backend de una red social que permite a los usuarios conectarse, compartir contenido y gestionar perfiles. Incluye autenticación segura, relaciones entre usuarios y funcionalidades básicas de interacción social. " ,
                    link:"https://github.com/AgustinGarcia97/MySocialConnectAPI/tree/dev",
                },
                {
                    project:"Proyecto",
                    project_title:" Eventify",
                    state:"Finalizado",
                    technologies:[
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",
                        "OAuth2",
                        "AWS EventBridge",

                    ],

                    description:"Sistema de gestión de eventos que permite crear, actualizar y notificar eventos de forma eficiente. Utiliza AWS EventBridge para manejar eventos asincrónicos y escalar la comunicación entre servicios. Ideal para aplicaciones que requieren una arquitectura orientada a eventos. " ,
                    link:"https://github.com/AgustinGarcia97/auth-service/tree/new_text",
                },
            ],
            infrastructure_projects: [
                {
                    project:"Proyecto",
                    project_title:" Eventify",
                    state:"Finalizado",
                    technologies:[
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",
                        "OAuth2",
                        "AWS EventBridge",

                    ],

                    description:" " ,
                    link:"https://github.com/AgustinGarcia97/auth-service/tree/new_text",
                },
            ],
        },
        contact:{
            title:"Contacto",
            form_title:"Pongamonos en contacto",
            first_input:"Nombre",
            second_input:"Poné tu mail",
            third_input:"Mensaje",
            submit:"Enviar",
        }
    },
    en: {
        about_me: {
            title: "About Me",

            text: "👋 Hi! I'm Agustín García, a software developer based in Buenos Aires, Argentina. I'm a fourth-year Computer Science student with a full stack profile and hands-on experience building web and mobile applications. Throughout my academic journey and personal projects, I've worked on both the frontend and backend—designing user interfaces, implementing functionality, managing databases, and integrating external services—always aiming to turn ideas into real, functional solutions.\n" +
                "I'm capable of leading a project from concept to deployment, including business logic, API integration, user management, and cloud deployment. I'm especially interested in how technology can impact critical areas such as cybersecurity and real-world infrastructure.\n" +
                "I'm a committed and proactive person with strong communication skills, a willingness to learn new tools, and the ability to collaborate effectively in teams. I'm motivated by continuous growth, enjoy taking on new challenges, and always strive to contribute with responsibility, creativity, and empathy."
        },
        skills:{
            title:"My Skills",
            text:"",
        },
        my_projects : {
            subtitleF: "Frontend Development",
            subtitleB: "Backend Development",
            subtitleI: "Infrastructure",
            project: "My Projects",
            description: "Description",
            technologies: "Technologies",
            frontend_projects: [
                {
                    state: "Completed",
                    project: "Project",
                    project_title: " Roll n' Play",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI"
                    ],
                    description: "In this project, I designed and implemented a website, in this case an e-commerce platform for a board game store.",
                    link: "https://github.com/KakuInnovation/UADE-GRUPO8-475802-2024-1C-NOCHE-VIE-APPS-INTERACTIVAS"
                },
                {
                    project: "Project",
                    project_title: " Eventify",
                    state: "Completed",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI",
                        "OAuth2"
                    ],
                    description: "",
                    link: "https://github.com/eliaslamanna/integracion-front/tree/master-integration"
                },
                {
                    project_title: " Stamina Auth",
                    state: "Completed",
                    project: "Project",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI"
                    ],
                    description: "In this project, I designed a frontend web application for authentication in a social network.",
                    link: "https://github.com/AgustinGarcia97/stamina-auth-front"
                },
                {
                    project_title: " Optimus PyME",
                    state: "Completed",
                    project: "Project",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI"
                    ],
                    description: "In this project, I implemented the design of a frontend web application for a security system for small and medium-sized businesses.",
                    link: "https://github.com/AgustinGarcia97/seminario_gestion_tecnologia/branches"
                },
                {
                    project_title: " My Social Connect",
                    project: "Project",
                    state: "In development",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI"
                    ],
                    description: "In this project, I designed and implemented a frontend web application for a security system for small and medium-sized businesses.",
                    link: "https://github.com/AgustinGarcia97/socialconnect"
                },
                {
                    project_title: " My Social Connect Mobile",
                    state: "Completed",
                    project: "Project",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Native",
                        "Redux",
                        "MaterialUI"
                    ],
                    description: "In this project, I designed and implemented a mobile frontend application for a large-scale social network.",
                    link: "https://github.com/AgustinGarcia97/socialconnect"
                }
            ],
            backend_projects: [
                {
                    project: "Project",
                    project_title: " Roll n' Play",
                    state: "Completed",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security"
                    ],
                    description: "An e-commerce backend platform specialized in board games. It allows users to browse, purchase, and manage tabletop games, with features such as product catalog management, secure user authentication, and order processing. Designed to offer a seamless and secure shopping experience for board game enthusiasts.",
                    link: "https://github.com/AgustinGarcia97/RollnplayBackend"
                },
                {
                    project: "Project",
                    project_title: " Auth Service",
                    state: "Completed",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",
                        "OAuth2"
                    ],
                    description: "A robust authentication and authorization service built for microservices architectures. Implements OAuth2 and JWT to ensure secure user, session, and permission management. Designed to scale and integrate seamlessly with multiple applications.",
                    link: "https://github.com/AgustinGarcia97/auth-service/tree/new_text"
                },
                {
                    project: "Project",
                    project_title: " Chat Service",
                    state: "In development",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "MongoDB",
                        "Spring Security",
                        "OAuth2",
                        "WebSocket"
                    ],
                    description: "A real-time messaging microservice using WebSockets for instant communication between users. Messages are stored in MongoDB, and connections are secured with OAuth2. Ideal for integration into social or collaborative platforms.",
                    link: "https://github.com/AgustinGarcia97/chat_service/tree/dev"
                },
                {
                    project: "Project",
                    project_title: " My Social Connect",
                    state: "Completed",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security"
                    ],
                    description: "Backend for a social network platform that enables users to connect, share content, and manage profiles. Includes secure authentication, user relationships, and core social interaction features.",
                    link: "https://github.com/AgustinGarcia97/MySocialConnectAPI/tree/dev"
                },
                {
                    project: "Project",
                    project_title: " Eventify",
                    state: "Completed",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",
                        "OAuth2",
                        "AWS EventBridge"
                    ],
                    description: "An event management system that allows users to create, update, and receive notifications for events. Utilizes AWS EventBridge to handle asynchronous events and scale inter-service communication. Ideal for event-driven application architectures.",
                    link: "https://github.com/AgustinGarcia97/auth-service/tree/new_text"
                }
            ],

            infrastructure_projects: [
                {
                    project: "Project",
                    project_title: " Eventify",
                    state: "Completed",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",
                        "OAuth2",
                        "AWS EventBridge"
                    ],
                    description: "",
                    link: "https://github.com/AgustinGarcia97/auth-service/tree/new_text"
                }
            ]
        },
        contact:{
            title:"Contact",
            form_title:"Get in touch",
            first_input:"Name",
            second_input:"Enter your email ",
            third_input:"Message",
            submit:"Submit"
        },

    },
    de: {
        about_me: {
            title: "Über mich",
            text: "👋 Hallo! Ich bin Agustín García, Backend-Entwickler aus Buenos Aires, Argentinien, mit Erfahrung auch in der Fullstack-Entwicklung.\n" +
                "Ich konzentriere mich darauf, robuste und effiziente Lösungen zu entwickeln und Best Practices mit Java, Spring Boot und Microservices-Architektur anzuwenden.\n" +

                "Was mich an der Entwicklung am meisten motiviert, ist die Möglichkeit, durch Software reale Lösungen für die Welt zu schaffen. Ich genieße es, komplexe Probleme zu lösen, im Team zu arbeiten und ständig Neues zu lernen."
        },
        skills:{
            title:"My Skills",
            text:"",
        },
        my_projects : {
            subtitleF: "Frontend-Entwicklung",
            subtitleB: "Backend-Entwicklung",
            subtitleI: "Infrastruktur",
            project: "Meine Projekte",
            description: "Beschreibung",
            technologies: "Technologien",
            frontend_projects: [
                {
                    state: "Abgeschlossen",
                    project: "Projekt",
                    project_title: "Roll n' Play",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI"
                    ],
                    description: "In diesem Projekt habe ich eine Website entworfen und implementiert, in diesem Fall eine E-Commerce-Plattform für ein Brettspielgeschäft.",
                    link: "https://github.com/KakuInnovation/UADE-GRUPO8-475802-2024-1C-NOCHE-VIE-APPS-INTERACTIVAS"
                },
                {
                    project: "Projekt",
                    project_title: "Eventify",
                    state: "Abgeschlossen",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI",
                        "OAuth2"
                    ],
                    description: "",
                    link: "https://github.com/eliaslamanna/integracion-front/tree/master-integration"
                },
                {
                    project_title: "Stamina Auth",
                    state: "Abgeschlossen",
                    project: "Projekt",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI"
                    ],
                    description: "In diesem Projekt habe ich eine Frontend-Webanwendung für die Authentifizierung in einem sozialen Netzwerk entworfen.",
                    link: "https://github.com/AgustinGarcia97/stamina-auth-front"
                },
                {
                    project_title: "Optimus PyME",
                    state: "Abgeschlossen",
                    project: "Projekt",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI"
                    ],
                    description: "In diesem Projekt habe ich das Design einer Frontend-Webanwendung für ein Sicherheitssystem für kleine und mittlere Unternehmen umgesetzt.",
                    link: "https://github.com/AgustinGarcia97/seminario_gestion_tecnologia/branches"
                },
                {
                    project_title: "My Social Connect",
                    project: "Projekt",
                    state: "In Entwicklung",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Js",
                        "Redux",
                        "MaterialUI"
                    ],
                    description: "In diesem Projekt habe ich eine Frontend-Webanwendung für ein Sicherheitssystem für kleine und mittlere Unternehmen entworfen und implementiert.",
                    link: "https://github.com/AgustinGarcia97/socialconnect"
                },
                {
                    project_title: "My Social Connect Mobile",
                    state: "Abgeschlossen",
                    project: "Projekt",
                    technologies: [
                        "Frontend",
                        "JavaScript",
                        "TypeScript",
                        "React Native",
                        "Redux",
                        "MaterialUI"
                    ],
                    description: "In diesem Projekt habe ich eine mobile Frontend-Anwendung für ein groß angelegtes soziales Netzwerk entworfen und implementiert.",
                    link: "https://github.com/AgustinGarcia97/socialconnect"
                }
            ],
            backend_projects: [
                {
                    project: "Projekt",
                    project_title: "Roll n' Play",
                    state: "Abgeschlossen",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security"
                    ],
                    description: "",
                    link: "https://github.com/AgustinGarcia97/RollnplayBackend"
                },
                {
                    project: "Projekt",
                    project_title: "Auth Service",
                    state: "Abgeschlossen",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",
                        "OAuth2"
                    ],
                    description: "",
                    link: "https://github.com/AgustinGarcia97/auth-service/tree/new_text"
                },
                {
                    project: "Projekt",
                    project_title: "Chat Service",
                    state: "In Entwicklung",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "MongoDB",
                        "Spring Security",
                        "OAuth2",
                        "WebSocket"
                    ],
                    description: "",
                    link: "https://github.com/AgustinGarcia97/chat_service/tree/dev"
                },
                {
                    project: "Projekt",
                    project_title: "My Social Connect",
                    state: "Abgeschlossen",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security"
                    ],
                    description: "",
                    link: "https://github.com/AgustinGarcia97/MySocialConnectAPI/tree/dev"
                },
                {
                    project: "Projekt",
                    project_title: "Eventify",
                    state: "Abgeschlossen",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",
                        "OAuth2",
                        "AWS EventBridge"
                    ],
                    description: "",
                    link: "https://github.com/AgustinGarcia97/auth-service/tree/new_text"
                }
            ],

            infrastructure_projects: [
                {
                    project: "Projekt",
                    project_title: "Eventify",
                    state: "Abgeschlossen",
                    technologies: [
                        "Backend",
                        "Java",
                        "Spring Boot",
                        "Hibernate",
                        "Spring Security",
                        "OAuth2",
                        "AWS EventBridge"
                    ],
                    description: "",
                    link: "https://github.com/AgustinGarcia97/auth-service/tree/new_text"
                }
            ]

        },
        contact:{
            title:"Kontakt",
            form_title:"Melde dich bei uns!",
            first_input:"Name",
            second_input:"Gib deine E-Mail-Adresse ein ",
            third_input:"Nachricht",
            submit:"Abschicken"
        }

    }
};



export const skill_cards_data_backend  = [
   {
        title: "Java",
        photo_url: "https://w0.peakpx.com/wallpaper/1019/191/HD-wallpaper-java-coding-programming-thumbnail.jpg",
        box_shadow:"10px 10px 37px 0px rgba(199,44,15,0.77)",
        esp:{
            title:"Java",
            definition:"Java es una opción muy utilizada en el backend por su robustez, escalabilidad y estabilidad. Su ecosistema, especialmente con frameworks como Spring, facilita el desarrollo de APIs y microservicios. Además, cuenta con una comunidad amplia y soporte empresarial.",
            my_uses:"Se utiliza Java para el desarrollo backend, especialmente en la creación de APIs REST, sistemas empresariales y microservicios, aprovechando su estabilidad, rendimiento y frameworks como Spring Boot.",
            extra:"Java se adapta muy bien a arquitecturas modernas como microservicios, y funciona de forma eficiente en entornos con contenedores como Docker y Kubernetes. Al mismo tiempo, su madurez y confiabilidad lo convierten en una opción sólida para aplicaciones empresariales críticas, gracias a su soporte a largo plazo, buenas prácticas de seguridad y excelente integración con bases de datos."
        },
        en:{
            title:"Java",
            definition:"Java is a widely used option for backend development due to its robustness, scalability, and stability. Its ecosystem, especially with frameworks like Spring, simplifies the development of APIs and microservices. Additionally, it has a large community and strong enterprise support.",
            my_uses:"Java is used for backend development, especially for building REST APIs, enterprise systems, and microservices, leveraging its stability, performance, and frameworks like Spring Boot.",
            extra:"Java adapts well to modern architectures like microservices and works efficiently in containerized environments such as Docker and Kubernetes. At the same time, its maturity and reliability make it a solid choice for critical enterprise applications, thanks to its long-term support, strong security practices, and excellent database integration."
        },
       de:{
           title:"Java",
           definition:"Java ist eine weit verbreitete Option für die Backend-Entwicklung aufgrund seiner Robustheit, Skalierbarkeit und Stabilität. Sein Ökosystem, insbesondere mit Frameworks wie Spring, erleichtert die Entwicklung von APIs und Microservices. Zudem verfügt es über eine große Community und unternehmensseitige Unterstützung.",
           my_uses:"Java wird für die Backend-Entwicklung verwendet, insbesondere für den Aufbau von REST-APIs, Unternehmenssystemen und Microservices, wobei seine Stabilität, Leistung und Frameworks wie Spring Boot genutzt werden.",
           extra:"Java passt gut zu modernen Architekturen wie Microservices und funktioniert effizient in containerisierten Umgebungen wie Docker und Kubernetes. Gleichzeitig machen seine Reife und Zuverlässigkeit es zu einer soliden Wahl für kritische Unternehmensanwendungen, dank langfristiger Unterstützung, starker Sicherheitspraktiken und hervorragender Datenbankintegration."
       }
    },
   {
        title: "Spring Boot",
        photo_url: "https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/11/o-que-e-o-spring.png",
        box_shadow:"10px 10px 37px 0px rgb(110,179,63)",
       esp:{
           title:"Spring Boot",
           definition:"",
           my_uses:"",
           extra:""
       },
       en:{
           title:"Java",
           definition:"",
           my_uses:"",
           extra:""
       },
       de:{
           title:"Java",
           definition:"",
           my_uses:"",
           extra:""
       }
    },
    {
        title:"Hibernate",
        photo_url:"https://static-00.iconduck.com/assets.00/hibernate-icon-491x512-qd6jy16p.png",
        box_shadow:"10px 10px 37px 0px rgb(189,175,122)",
        esp:{
            title:"Hibernate",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Hibernate",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Hibernate",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:"Spring Security",
        photo_url:"https://miro.medium.com/v2/resize:fit:400/1*1-13QxXfUE1mdrK_MfqonQ.png",
        box_shadow:"10px 10px 37px 0px rgb(110,179,63)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },

    {
        title:'ExpressJS',
        photo_url:"https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp",
        box_shadow:"10px 10px 37px 0px rgb(240,219,79)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'NodeJS',
        photo_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktag_VC1qrgSuv5rIvlFppvF52HaufgLefw&s",
        box_shadow:"10px 10px 37px 0px rgb(110,179,63)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'Sequelize',
        photo_url:"https://miro.medium.com/v2/resize:fit:250/0*NfDT1oDDG1jZesYP.png",
        box_shadow:"10px 10px 37px 0px rgb(0,122,204)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'MongoDB',
        photo_url:"https://startupcredits.org/wp-content/uploads/2023/12/MongoDB-Startup-Credits-logo.png",
        box_shadow:"10px 10px 37px 0px rgb(110,179,63)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'Oauth2',
        photo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/2041px-Oauth_logo.svg.png",
        box_shadow:"10px 10px 37px 0px rgb(0,0,0)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },

    {
        title:'Kafka',
        photo_url:"https://cdn.iconscout.com/icon/free/png-256/free-kafka-icon-download-in-svg-png-gif-file-formats--logo-brand-world-logos-vol-1-pack-icons-282292.png",
        box_shadow:"10px 10px 37px 0px rgb(0,0,0)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },


];

export const skill_cards_data_frontend = [
    {
        title:"JavaScript",
        photo_url:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        box_shadow:"10px 10px 37px 0px rgb(240,219,79)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:"TypeScript",
        photo_url:"https://cdn.worldvectorlogo.com/logos/typescript.svg",
        box_shadow:"10px 10px 37px 0px rgb(0,122,204)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'ReactJS',
        photo_url:"https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
        box_shadow:"10px 10px 37px 0px rgb(0,216,255)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
      title:"React Native",
      photo_url: "https://hackernoon.com/hn-images/1*ub1DguhAtkCLvhUGuVGr6w.png",
        box_shadow:"10px 10px 37px 0px rgb(0,216,255)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'Redux',
        photo_url:"https://cdn.worldvectorlogo.com/logos/redux.svg",
        box_shadow:"10px 10px 37px 0px rgb(118,74,188)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:"Material UI",
        photo_url: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/6aecc665-9f30-4dc7-bacc-880d8e66c7bb.png",
        box_shadow:"10px 10px 37px 0px rgb(0,122,204)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
]

export const skill_cards_data_infraestructure = [
    {
        title:'Ansible',
        photo_url:"https://static-00.iconduck.com/assets.00/ansible-icon-512x512-fydu4n0b.png",
        box_shadow:"10px 10px 37px 0px rgb(0,0,0)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'Terraform',
        photo_url:"https://static-00.iconduck.com/assets.00/terraform-icon-1803x2048-hodrzd3t.png",
        box_shadow:"10px 10px 37px 0px rgb(98,57,229)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'Jenkins',
        photo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png",
        box_shadow:"10px 10px 37px 0px rgba(199,44,15,0.77)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'AWS',
        photo_url:"https://figmaresource.com/wp-content/uploads/2024/05/AWS-Marketplace-Logo-PNG-to-svg-1.svg",
        box_shadow:"10px 10px 37px 0px rgb(253,152,1)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'Docker',
        photo_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQKd_MRed_mZQlgrzQuUXVA3P39ssOVX8_g&s",
        box_shadow:"10px 10px 37px 0px rgb(6,109,165)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
    {
        title:'Docker Compose',
        photo_url:"https://www.couchbase.com/blog/wp-content/uploads/2017/02/docker-compose.png",
        box_shadow:"10px 10px 37px 0px rgb(177,194,211)",
        esp:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        en:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        },
        de:{
            title:"Spring Security",
            definition:"",
            my_uses:"",
            extra:""
        }
    },
]
