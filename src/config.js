import imgDefault from 'shared/imgdefault.jpg'

const data = {
  presentation: 'Técnico Superior en Informática, apasionado por la tecnología y el aprendizaje, aspirando a un puesto de entrada que permita desarrollar y poner a disposición mis habilidades y desenvolverse en el ámbito laboral.',
  greeting: 'Hola, ',
  typeWrite: [
    'Soy Jose Suarez',
    'Desarrollador Web',
  ],
  social: [
    {icon:'github', link:'https://github.com/JoseAle2610', label:'Github'},
    {icon:'linkedin', link:'https://linkedin.com/jsuarez-g', label:'Linkedin'},
    {icon:'instagram', link: 'https://instagram.com/', label: 'Instagram'}
  ],
  personalData: [
    {icon:'envelope-fill', label:'Correo', value:'jalesgervazzi@gmail.com'},
    {icon:'telephone', label:'Telefono', value:'+58 412-3550853'},
    {icon:'globe', label:'Web', value:'joseale2610.github.io'},
    {icon:'calendar', label:'Cumpleaños', value:'26-10-2001', contact: false},
    {icon: 'geo-alt-fill', label: 'Ubicación', value:'Venezuela - Estado Lara'}
  ],
  interests: [
    {icon:'book', label:'Aprender'},
    {icon:'music-note', label:'Musica'},
    {icon:'pencil', label:'Dibujo'},
    {icon:'camera-video', label:'Cine'},
  ],
  works: [
    {
      title: 'Portfolio',
      description: 'Este proyecto es la pagina que estan viendo',
      markdown: 'Protfolio',
      img: imgDefault
    },
    {
      title: 'Granja Avicola Las Tunas',
      markdown: 'GranjaAvicolaLasTunas',
      description: 'Sistema de gestion de inventario de la produccion de huevos',
      img: imgDefault
    },
    {
      title: 'Scrappy',
      markdown: 'Scrappy',
      description: 'Es una herramienta para barrer paginas web y extraer informacion de ellas',
      img: imgDefault
    },
    {
      title: 'NellaVent',
      markdown: 'NellaVent',
      description: 'Applicacion para la administracion de las ventas de un negocio pequeño, con conexion a firebase',
      img: imgDefault
    },
    {
      title: 'prueba-tas-2021',
      markdown: 'prueba-tas-2021',
      description: 'Pequeño Demo Web app de una tieda, mostrando los productos disponibles y agregandolos al carrito',
      img: imgDefault
    },
    {
      title: 'Shesterbot',
      description: 'Bot de telegram para el monitoreo de servidores',
      markdown: 'ShesterBot',
      img: imgDefault
    },
    {
      title: 'LaravelCurdProducs',
      description: 'Crud basico con laravel y mysql',
      markdown: 'LaravelCrudProducs',
      img: imgDefault
    }
  ], 
  about: {
    title: 'Acerca de mi',
    description: 'Técnico Superior en Informática, apasionado por la tecnología y el aprendizaje, aspirando a un puesto de entrada que permita desarrollar y poner a disposición mis habilidades y desenvolverse en el ámbito laboral.'
  },
  work: {
    title: 'Trabajos',
    description: 'Hola estos son los trabajos en los que he estado trabajando'
  },
  contact: {
    title: 'Contacto',
    description: 'Podemos discutir acerca de nuevos proyectos o solo saludar a travez de mis redes socioales o por email.'
  }
}

export default data
