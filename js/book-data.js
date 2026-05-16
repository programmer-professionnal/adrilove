// ========== BOOK DATA ==========
// All pages content — to add a new chapter, just add an entry here.
// Types: cover | prefacio | chapter | frases | timeline | epilogo | locked | continuara

const bookPages = [
  // ─── PAGE 1: PORTADA ─────────────────────────────────────────
  {
    id: 'portada',
    type: 'cover',
    icon: 'book-open',
    epigraph: '"Hay historias que dejamos a la mitad."',
    title: 'Erik, Hijo de Arkhelan',
    subtitle: 'Por Luna, de parte de Sombra',
    location: 'Murcia · Logroño'
  },

  // ─── PAGE 2: PREFACIO ────────────────────────────────────────
  {
    id: 'prefacio',
    type: 'prefacio',
    chapterNumber: 'Prefacio',
    quote: '"Lately I\'ve been, I\'ve been losing sleep<br>Dreaming about the things that we could be"',
    paragraphs: [
      'Counting Stars sonaba cuando todo era más simple. Cuando todavía no había hecho todo lo que hice mal. Te miraba —o mejor dicho, escuchaba tu voz al otro lado del teléfono— y lo único que quería era tenerte cerca.',
      'Hoy la escucho y no es nostalgia. Es esperanza. Porque cuando suena <em>"everything that kills me makes me feel alive"</em> pienso en todo lo que me rompió y me volvió a construir. Y pienso en ti.'
    ],
    signoff: 'Soy Sombra. La misma que eligió ser tu complemento. Pero una sombra que creció, que aprendió, que se cayó y se levantó sola. Que ya no necesita desaparecer. Que aprendió a quedarse.'
  },

  // ─── PAGE 3: CAPÍTULO I ──────────────────────────────────────
  {
    id: 'capitulo-1',
    type: 'chapter',
    chapterNumber: 'Capítulo I',
    title: 'Lo Que Hice Mal',
    content: [
      { type: 'text', p: 'No voy a venir aquí a decirte que todo fue culpa del tiempo o de las circunstancias. Ya no soy esa persona que busca excusas.' },
      { type: 'text', p: 'Fui inmaduro. Te mentí. Te dejé de lado. Te hice sentir que no eras prioridad cuando eras lo único que importaba. Te prometí cosas que no cumplí. Y encima de todo estaba la distancia —tú en Murcia, yo en Logroño— y yo ni siquiera puse de mi parte.' },
      { type: 'lesson', text: 'Aprendí que amar no es solo sentir bonito. Es estar presente. Es elegir cada día. Es no darlo por sentado.' },
      { type: 'text', p: 'Aprendí a soltar el orgullo, a pedir perdón sin esperar nada, a escuchar de verdad. Aprendí, Luna, a ser la persona que tú mereces. Y no lo digo como promesa. Lo digo porque lo trabajé. En silencio. Sin buscar reconocimiento.' }
    ]
  },

  // ─── PAGE 4: CAPÍTULO II (FRASES) ────────────────────────────
  {
    id: 'capitulo-2',
    type: 'frases',
    chapterNumber: 'Capítulo II',
    title: 'Frases Que Quedaron',
    intro: 'No tenemos fotos. Pero tenemos frases que valen más que mil imágenes.',
    cards: [
      { icon: 'moon', quote: '"Yo soy Luna"', text: 'Lo dijiste sin dudar. Cada vez que miro al cielo y veo la luna, pienso en ti.' },
      { icon: 'user', quote: '"Y yo Sombra"', text: 'Lo dije sin saber que te estaba prometiendo acompañarte siempre. Una sombra no existe sin su luz.' },
      { icon: 'fire', quote: '"Lame hierros"', text: 'Me hiciste reír como pocas personas logran. Cada vez que oigo algo parecido, sonrío. Porque me acuerdo de ti.' },
      { icon: 'seedling', quote: '"Satisfire ecológico"', text: 'Único, absurdo, hermoso. Salido de una conversación sobre pepinos. Eso es lo que siempre voy a proteger.' }
    ],
    conclusion: 'No necesito fotos. Tengo todo guardado en la memoria.'
  },

  // ─── PAGE 5: TIMELINE ────────────────────────────────────────
  {
    id: 'timeline',
    type: 'timeline',
    chapterNumber: '—',
    title: 'Nuestra Historia en una Línea',
    intro: 'Toca cada momento para leerlo completo.',
    events: [
      { icon: '🏃', label: 'Parkour', text: 'En medio de saltos que no pegaban a nadie, te pregunté si querías ser mi mejor amiga. Lo disfracé de casualidad. Me importaba tanto que el corazón me latía fuerte. Y dijiste que sí. Desde Logroño hasta Murcia, lo escuché como si estuvieras al lado.' },
      { icon: '⚔️', label: 'Bedwars', text: 'Todo salió mal pero todo salió bien. Dos bloques formaron una silueta imposible de no ver. Nos reímos como hacía mucho. Con esa risa que solo se da cuando puedes ser tú mismo.' },
      { icon: '📞', label: '4am Calls', text: 'Tu risa a 600 km de distancia. Las llamadas sin querer colgar. El "bueno, me voy" que nunca era la última palabra. No importaba Murcia o Logroño. Tu voz estaba al lado.' },
      { icon: '🎵', label: 'Counting Stars', text: 'Apenas suenan los primeros acordes y ya estoy ahí. Cada nota me lleva a tu voz. Hay canciones que son la banda sonora de una historia. La nuestra tiene la suya.' }
    ]
  },

  // ─── PAGE 6: CAPÍTULO III ────────────────────────────────────
  {
    id: 'capitulo-3',
    type: 'chapter',
    chapterNumber: 'Capítulo III',
    title: 'El Tiempo Que Estuvimos Lejos',
    content: [
      { type: 'text', p: 'Hubo días en los que no quería pensar en ti porque dolía. Pero siempre te deseaba lo mejor.' },
      { type: 'text', p: 'Sé que tuviste una relación después de nosotros. No pienso en eso con celos. Pienso con entendimiento. A veces necesitamos caminar otros caminos para entender cuál es el verdadero.' },
      { type: 'lesson', text: 'Tu camino te trajo de vuelta a hablar conmigo. Y el mío me trajo de vuelta a ti. Pero mejor. Más completo. Más seguro.' }
    ]
  },

  // ─── PAGE 7: CAPÍTULO IV ─────────────────────────────────────
  {
    id: 'capitulo-4',
    type: 'chapter',
    chapterNumber: 'Capítulo IV',
    title: 'La Persona Que Soy Hoy',
    content: [
      { type: 'text', p: 'Ya no soy el que se fue. Ese tipo se quedó en el pasado.' },
      { type: 'cualidades', items: [
        { icon: 'hand', title: 'Pide perdón de verdad', desc: 'Sin esperar nada a cambio.' },
        { icon: 'heart', title: 'El orgullo ya no manda', desc: 'Hablar, aunque sea por teléfono, es valentía.' },
        { icon: 'shield-alt', title: 'Ya no huye', desc: 'Antes me alejaba. Hoy me acerco.' },
        { icon: 'compass', title: 'Eres mi brújula', desc: 'Antes de actuar, pienso: ¿esto construye o destruye?' }
      ]},
      { type: 'lesson', text: 'Estar con vos no es una opción. Es lo que quiero elegir todos los días.' }
    ]
  },

  // ─── PAGE 8: CAPÍTULO V ──────────────────────────────────────
  {
    id: 'capitulo-5',
    type: 'chapter',
    chapterNumber: 'Capítulo V',
    title: 'El Libro Pendiente',
    content: [
      { type: 'book-highlight', icon: 'book', title: 'Erik, Hijo de Arkhelan' },
      { type: 'text', p: 'Un libro que empezamos y nunca terminamos. Como nuestra historia.' },
      { type: 'text', p: 'No sé en qué página nos quedamos. Pero los libros siempre se pueden retomar. Cuando vuelves a abrirlos después de tiempo, los lees con otros ojos.' },
      { type: 'lesson', text: 'Quiero retomar ese libro contigo. Literal y metafóricamente.' },
      { type: 'text', p: 'Aunque sea por llamada. Cada quien desde su ciudad. Porque ninguna conexión verdadera se mide en kilómetros.' }
    ]
  },

  // ─── PAGE 9: EPÍLOGO ─────────────────────────────────────────
  {
    id: 'epilogo',
    type: 'epilogo',
    chapterNumber: 'Epílogo',
    title: 'Sin Final',
    content: [
      { type: 'text', p: 'No te voy a pedir que vuelvas conmigo hoy. Eso sería no haber aprendido nada.' },
      { type: 'text', p: 'Esto es para contarte quién soy ahora. Para que lo leas cuando quieras, sin presión, sin expectativas.' },
      { type: 'lesson', text: 'Estuve perdido. Me encontré. Crecí. Y nunca dejé de quererte.' },
      { type: 'distance', text: 'Murcia. Logroño. Da igual. Ya no voy a dejar que el "te llamo luego" sea la última palabra.' }
    ],
    signature: {
      line: true,
      sombra: 'La misma sombra de siempre. Pero ahora con luz propia.',
      detalles: ['Con el libro abierto.', 'Con Counting Stars sonando.', 'Con Murcia y Logroño más cerca.'],
      firma: 'Sombra',
      icon: 'moon'
    }
  },

  // ─── PAGE 10: BLOQUEADA ──────────────────────────────────────
  {
    id: 'locked-section',
    type: 'locked',
    chapterNumber: '—',
    title: 'Una Última Cosa',
    inputPlaceholder: 'Tu nombre...',
    lockIcon: 'lock',
    lockedText: 'Hay un mensaje que solo es para vos. Necesito tu nombre para abrirlo.',
    password: 'luna',
    errorText: 'No es ese nombre... ¿estás segura?',
    unlocked: {
      icon: 'unlock',
      message: [
        'Quizás la sombra se fue porque se hizo de noche.',
        'Pero las noches también pasan.',
        { emphasis: 'Y cuando la luz vuelve, la sombra crece.' },
        'No para desaparecer. Para quedarse.',
        'Siempre junto a su luna.'
      ],
      sign: '— Sombra.'
    }
  },

  // ─── PAGE 11: CONTINUARÁ ─────────────────────────────────────
  {
    id: 'continuara',
    type: 'continuara',
    chapterNumber: '—',
    title: 'Continuará',
    subtitle: 'Esta historia no termina aquí.',
    message: [
      'Quedan páginas en blanco esperando ser escritas.',
      'Quedan canciones por descubrir, llamadas a las 4am, libros a medio terminar.',
      'Queda todo lo que está por venir.'
    ],
    icon: 'feather-alt'
  }
];
