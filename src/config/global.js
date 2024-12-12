export default {
  global: {
    componenteFormativo:
      'Producción de la imagen, teoría del color y elementos básicos del diseño',
    descripcionCurso:
      'Las imágenes digitales e impresas son parte fundamental de todo proceso artístico o de diseño, y la calidad de estas depende principalmente de los fundamentos teóricos que permiten definir sus componentes. Hoy en día se utilizan variedad de herramientas que permiten no solo la producción de imágenes, sino también su edición. En este componente formativo se conocerán los principios técnicos del color, el contraste y el significado de cada uno de los tonos a usar dentro de una producción de imagen.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Producción de imagen',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Edición digital de imagen',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Teoría del color',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelos de color y contraste',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Psicología del color',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elementos básicos del diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Elementos conceptuales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Elementos visuales',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Elementos de relación',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Elementos prácticos',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Interrelación de formas',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_52410394_DU.pdf',
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
  complementario: [
    {
      tema: 'Teoría del color',
      referencia: 'Johannes Itten. (s,f) Teoría del color.',
      tipo: 'Artículo',
      descarga: '/downloads/La_teoria_del_color.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Anomalía',
      significado: 'Algo que está fuera de lo normal o habitual.',
    },
    {
      termino: 'Cromático',
      significado: 'De los colores, o relativo a ellos.',
    },
    {
      termino: 'Imagen',
      significado: 'representación visual de algo real o imaginado.',
    },
    {
      termino: 'Imagen análoga',
      significado:
        'Imagen conseguida mediante un proceso fotográfico tradicional.',
    },
    {
      termino: 'Megapíxel (Mpx)',
      significado: 'Equivale a un millón de píxeles.',
    },
    {
      termino: 'Píxel',
      significado:
        'Menor unidad homogénea en color que compone la imagen digital.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfeo, J. (2011). Información audiovisual, elementos de la composición de la imagen. Madrid: Universidad Nacional de Educación a Distancia.',
    },
    {
      referencia:
        'Alves, L. Japiassu, R. Hetkowski, T. (2012). Trabajo colaborativo en la red. Madrid: Universidad Nacional de Educación a Distancia.',
    },
    {
      referencia:
        'Aparici, R. García A. (1989). Lectura de imágenes. Madrid: Ediciones la torre.',
    },
    {
      referencia:
        'Belting, H. Vélez, G. (2007). Antropología de la imagen. Buenos Aires: Kats editores.',
    },
    {
      referencia:
        'Cuadrado, A. Romo, M. (2011). Estudio de medios comunicativos. Madrid: Universidad Nacional de Educación a Distancia.',
    },
    {
      referencia:
        'Feltrero, R. (2007). El software libre y la construcción ética de la sociedad del conocimiento. Barcelona: Icaria editorial.',
    },
    {
      referencia:
        'Swenson, L. (1984). Teorías del aprendizaje. Buenos Aires: Paidós.',
    },
    {
      referencia:
        'Tamayo, M. (1999). Serie Aprender a Investigar. Módulo 2: La investigación. Colombia: ICFES.',
    },
    {
      referencia:
        'Valera, J. (2012). Productividad digital avanzada. Universidad Nacional de Educación a Distancia. Madrid: Universidad Nacional de Educación a Distancia.',
    },
    {
      referencia:
        'Winn, W.D. (1994). Contributions of perceptual and cognitive processes to the comprehension of graphics, en Schnotz, W. y Kulhavy, R.W. (eds.). Comprehension of graphics. Advances in psychology. Amsterdam: Elsevier Science B.V. ',
    },
    {
      referencia:
        'Wong, W. (1995). Fundamentos del diseño. Madrid: Editorial Gustavo Gili.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhon Milton Zárate Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro de desarrollo agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Johana Melina Montoya Piriachi',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro de desarrollo agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julián Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
