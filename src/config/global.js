export default {
  global: {
    componenteFormativo: 'Generalidades de DevOps',
    descripcionCurso:
      'En este componente formativo se introducen las generalidades de DevOps, sus prácticas fundamentales y su aplicabilidad en los contextos actuales de la industria del desarrollo de software.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'DevOps',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ventajas y retos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prácticas fundamentales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas tecnológicas que soportan prácticas de DevOps',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Beck, K. y Andres, C. (2004). Extreme Programming Explained: Embrace Change, 2nd Edition (The XP Series) (2ª ed.). Addison-Wesley.',
    },
    {
      referencia:
        'De França, B. B. N., Jeronimo, H. y Travassos, G. H. (2016). Characterizing DevOps by Hearing Multiple Voices. Proceedings of the 30th Brazilian Symposium on Software Engineering - SBES ’16.',
      link: 'https://doi.org/10.1145/2973839.2973845',
    },
    {
      referencia:
        'Guerrero, J., Zúñiga, K., Certuche, C. y Pardo, C. (2019). What is there about DevOps?. XIV Jornadas Iberoamericanas de ingeniería de Software e Ingeniería del Conocimiento (JIISIC’2019).',
      link:
        'https://www.researchgate.net/publication/334376433_What_is_there_about_DevOps_Preliminary_Findings_from_a_Systematic_Mapping_Study.',
    },
    {
      referencia:
        'Guerrero, J., Zúñiga, K., Certuche, S. y Pardo, C. (2020). A systematic mapping study about DevOps. Journal de Ciencia e Ingeniería, 12(1), p. 48–62.',
      link: 'https://doi.org/10.46571/jci.2020.1.5',
    },
    {
      referencia:
        'Takeuchi, H., & Nonaka, J. (1986). The New New Product Development Game. Harvard Business Review.',
      link: 'https://hbr.org/1986/01/the-new-new-product-development-game',
    },
    {
      referencia:
        'Hochstein, A., Zarnekow, R. y Brenner, W. (2005). ITIL as Common Practice Reference Model for IT Service Management: Formal Assessment and Implications for Practice. 2005 IEEE International Conference on E-Technology, e-Commerce and e-Service.',
      link: 'https://doi.org/10.1109/eee.2005.86',
    },
    {
      referencia:
        'Lwakatare, L. E., Kuvaja, P. y Oivo, M. (2015). Dimensions of DevOps. Lecture Notes in Business Information Processing, p. 212–217.',
      link: 'https://doi.org/10.1007/978-3-319-18612-2_19',
    },
    {
      referencia:
        'Poppendieck, M. y Poppendieck, T. (2003). Lean Software Development: An Agile Toolkit. Addison-Wesley Professional.',
    },
    {
      referencia:
        'Ridley, G., Young, J. y Carroll, P. (2004). COBIT and its utilization: a framework from the literature. 37th Annual Hawaii International Conference on System Sciences.',
      link: 'https://doi.org/10.1109/hicss.2004.1265566',
    },
    {
      referencia:
        'Riungu-Kalliosaari, L., Mäkinen, S., Lwakatare, L. E., Tiihonen, J. y Männistö, T. (2016). DevOps Adoption Benefits and Challenges in Practice: A Case Study. Product-Focused Software Process Improvement, p. 590–597.',
      link: 'https://doi.org/10.1007/978-3-319-49094-6_44',
    },
    {
      referencia:
        'Senapathi, M., Buchan, J. y Osman, H. (2018). DevOps Capabilities, Practices, and Challenges. Proceedings of the 22nd International Conference on Evaluation and Assessment in Software Engineering 2018.',
      link: 'https://doi.org/10.1145/3210459.3210465',
    },
  ],
  glosario: [
    {
      termino: 'IDE',
      significado: 'entorno integrado de desarrollo.',
    },
    {
      termino: 'Plugins',
      significado:
        'programas complementarios que se instalan para ampliar las capacidades de un software.',
    },
  ],
  complementario: [
    {
      texto:
        'Platzi. (2019, 23 enero). Qué es DevOps o Developer Operations | Clase abierta de Platzi [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/JtZudJcFcFQ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Instructor',
        centro:
          'Centro de teleinformática y producción industrial Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro Agropecuario La Granja Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
