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
      'Counting Stars sonaba de fondo cuando todo era más sencillo. Antes de meter la pila de veces que las metí. Te escuchaba al otro lado del teléfono y lo único que quería era tenerte cerca.',
      'Ahora la escucho y no es nostalgia. Son ganas. Porque cuando suena <em>"everything that kills me makes me feel alive"</em> pienso en todo lo que me rompió y me volvió a construir. Y pienso en ti.'
    ],
    signoff: 'Soy Sombra. La misma que quiso ser tu complemento. Pero una sombra que creció, que aprendió, que se cayó y se levantó sola. Que ya no huye. Que aprendió a quedarse.'
  },

  // ─── PAGE 3: CAPÍTULO I ──────────────────────────────────────
  {
    id: 'capitulo-1',
    type: 'chapter',
    chapterNumber: 'Capítulo I',
    title: 'Lo Que Hice Mal',
    content: [
      { type: 'text', p: 'No voy a venir aquí a echarte la culpa al tiempo ni a las circunstancias. Ya no soy el que busca excusas.' },
      { type: 'text', p: 'Fui un crío. Te mentí. Te dejé de lado. Te hice sentir que no eras importante cuando lo eras todo. Te prometí cosas y no las cumplí. Y para rematar, la distancia —tú en Murcia, yo en Logroño— y yo sin poner de mi parte.' },
      { type: 'lesson', text: 'Aprendí que amar no es solo sentir bonito. Es estar presente. Es elegir cada día. Es no darlo por sentado.' },
      { type: 'text', p: 'Aprendí a tragarme el orgullo, a pedir perdón sin esperar nada a cambio, a escuchar de verdad. Aprendí, Luna, a ser la persona que te mereces. Y no lo digo como promesa barata. Lo digo porque lo he trabajado. En silencio. Sin esperar que nadie me lo reconociera.' }
    ]
  },

  // ─── PAGE 4: CAPÍTULO II (FRASES) ────────────────────────────
  {
    id: 'capitulo-2',
    type: 'frases',
    chapterNumber: 'Capítulo II',
    title: 'Frases Que Quedaron',
    intro: 'No tenemos fotos juntos. Pero tenemos frases que pesan más que mil imágenes.',
    cards: [
      { icon: 'moon', quote: '"Yo soy Luna"', text: 'Lo dijiste sin dudar. Cada vez que levanto la cabeza y veo la luna, pienso en ti.' },
      { icon: 'user', quote: '"Y yo Sombra"', text: 'Lo dije sin saber que te estaba prometiendo acompañarte siempre. Una sombra no existe sin su luz.' },
      { icon: 'fire', quote: '"Lame hierros"', text: 'Me hiciste reír como pocas saben hacerlo. Cada vez que oigo algo parecido, sonrío. Porque me acuerdo de ti.' },
      { icon: 'seedling', quote: '"Satisfire ecológico"', text: 'Único, absurdo, precioso. Todo salió de una conversación sobre pepinos. Y eso es lo que siempre voy a cuidar.' }
    ],
    conclusion: 'No me hacen falta fotos. Lo tengo todo grabado.'
  },

  // ─── PAGE 5: TIMELINE ────────────────────────────────────────
  {
    id: 'timeline',
    type: 'timeline',
    chapterNumber: '—',
    title: 'Nuestra Historia en una Línea',
    intro: 'Toca cada momento para leerlo completo.',
    events: [
      { icon: '🏃', label: 'Parkour', text: 'En medio de saltos que no pegaban a nadie, te pregunté si querías ser mi mejor amiga. Lo disfracé de casualidad, pero el corazón me latía tan fuerte que casi se escuchaba. Dijiste que sí. Desde Logroño hasta Murcia, lo escuché como si estuvieras al lado.' },
      { icon: '⚔️', label: 'Bedwars', text: 'Todo salió mal pero todo salió bien. Dos bloques formaron una silueta imposible de no ver. Nos reímos como hacía tiempo no reíamos. Con esa risa que solo sale cuando puedes ser tú mismo sin pensar.' },
      { icon: '📞', label: '4am Calls', text: 'Tu risa a 600 kilómetros. Las llamadas sin querer colgar. El "bueno, me voy" que nunca era la última palabra. Daba igual Murcia o Logroño. Con tal de escucharte, el resto sobraba.' },
      { icon: '🎵', label: 'Counting Stars', text: 'Apenas suenan los primeros acordes y ya me transporto. Cada nota me lleva a tu voz. Hay canciones que son la banda sonora de una historia. La nuestra tiene la suya.' }
    ]
  },

  // ─── PAGE 6: CAPÍTULO III ────────────────────────────────────
  {
    id: 'capitulo-3',
    type: 'chapter',
    chapterNumber: 'Capítulo III',
    title: 'El Tiempo Que Estuvimos Lejos',
    content: [
      { type: 'text', p: 'Hubo días que no quería pensar en ti porque dolía. Y aun así, siempre te deseaba lo mejor.' },
      { type: 'text', p: 'Sé que después de nosotros estuviste con alguien más. Y no pienso en eso con celos. Lo entiendo. A veces necesitas perderte por otros sitios para darte cuenta de cuál es el de verdad.' },
      { type: 'lesson', text: 'Tus pasos te trajeron de vuelta a hablarme. Y los míos, a ti. Pero mejores. Más enteros. Más seguros.' }
    ]
  },

  // ─── PAGE 7: CAPÍTULO IV ─────────────────────────────────────
  {
    id: 'capitulo-4',
    type: 'chapter',
    chapterNumber: 'Capítulo IV',
    title: 'La Persona Que Soy Hoy',
    content: [
      { type: 'text', p: 'Ya no soy el que se fue. Ese tío se quedó en el pasado.' },
      { type: 'cualidades', items: [
        { icon: 'hand', title: 'Pide perdón de verdad', desc: 'Sin esperar nada a cambio.' },
        { icon: 'heart', title: 'El orgullo ya no manda', desc: 'Hablar, aunque sea por teléfono, es valentía.' },
        { icon: 'shield-alt', title: 'Ya no sale huyendo', desc: 'Antes me alejaba. Hoy me acerco.' },
        { icon: 'compass', title: 'Eres mi brújula', desc: 'Antes de hacer algo, pienso: ¿esto suma o resta?' }
      ]},
      { type: 'lesson', text: 'Estar contigo no es una opción. Es lo que quiero elegir cada día.' }
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
      { type: 'text', p: 'No sé ni en qué página nos quedamos. Pero los libros siempre se pueden retomar. Cuando los abres después de tiempo, los lees de otra manera.' },
      { type: 'lesson', text: 'Quiero retomar ese libro contigo. Literal y metafóricamente.' },
      { type: 'text', p: 'Aunque sea por llamada. Cada uno desde su ciudad. Porque lo que de verdad importa no se mide en kilómetros.' }
    ]
  },

  // ─── PAGE 9: EPÍLOGO ─────────────────────────────────────────
  {
    id: 'epilogo',
    type: 'epilogo',
    chapterNumber: 'Epílogo',
    title: 'Sin Final',
    content: [
      { type: 'text', p: 'No voy a pedirte que vuelvas conmigo hoy. Sería no haber aprendido nada.' },
      { type: 'text', p: 'Esto es para contarte quién soy ahora. Léelo cuando quieras, sin presión, sin esperar nada.' },
      { type: 'lesson', text: 'Estuve perdido. Me encontré. Crecí. Y nunca dejé de quererte.' },
      { type: 'distance', text: 'Murcia. Logroño. Da igual. Ya no voy a permitir que un "te llamo luego" sea lo último que te diga.' }
    ],
    signature: {
      line: true,
      sombra: 'La sombra de siempre. Pero ahora con luz propia.',
      detalles: ['Con el libro abierto.', 'Con Counting Stars sonando.', 'Con Murcia y Logroño más cerca que nunca.'],
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
    lockedText: 'Hay un mensaje que solo es para ti. Escribe tu nombre y te lo enseño.',
    password: 'luna',
    errorText: 'No es ese nombre... ¿segura que eres ella?',
    unlocked: {
      icon: 'unlock',
      message: [
        'Igual la sombra se fue porque se hizo de noche.',
        'Pero las noches también se van.',
        { emphasis: 'Y cuando vuelve la luz, la sombra se hace más grande.' },
        'No para esconderse. Para quedarse.',
        'Siempre al lado de su luna.'
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
    subtitle: 'Esto no se acaba aquí.',
    message: [
      'Quedan páginas en blanco esperando que las escribamos.',
      'Quedan canciones por descubrir, llamadas hasta las tantas, libros a medio terminar.',
      'Queda todo lo que todavía no ha pasado.'
    ],
    icon: 'feather-alt'
  }
];
