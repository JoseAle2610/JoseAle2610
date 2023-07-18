import imgDefault from '@/assets/imgdefault.jpg'

const data = {
  presentation: 'Técnico Superior en Informática, apasionado por la tecnología y el aprendizaje, aspirando a un puesto de entrada que permita desarrollar y poner a disposición mis habilidades y desenvolverse en el ámbito laboral.',
  greeting: 'Hola, ',
  typeWrite: [
    'Soy Jose Suarez',
    'Desarrollador FullStack',
  ],
  social: [
    {icon:'github', link:'https://github.com/JoseAle2610', label:'Github'},
    {icon:'linkedin', link:'https://linkedin.com/jsuarez-g', label:'Linkedin'},
    {icon:'whatsapp', link:'https://api.whatsapp.com/send?phone=584145110735', label:'Whatsapp'},
    {icon:'envelope-fill', link:'mailto:jalesgervazzi@gmail.com', label:'Mail'}
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
      title: 'Entregando Ecuador',
      description: 'Aplicación integrada con Google Workspace para la gestión de envíos de paquetes a domicilio.',
      img: '/screenshots/entregandoEcuador.png',
      links: [
        {icon: 'globe', url: 'https://entregandoecuador.com'}
      ]
    },
    {
      title: 'Portfolio',
      description: 'Ya estas vindo este proyecto!',
      img: '/screenshots/portafolio.png',
      links: [
        {icon: 'github', url: 'https://github.com/JoseAle2610/JoseAle2610.github.io'},
        {icon: 'globe', url: 'https://joseale2610.github.io'}
      ]
    },
    {
      title: 'Granja Avicola Las Tunas',
      description: 'Sistema de gestion de inventario de la produccion de huevos',
      img: '/screenshots/granjaAvicola.png',
      links: [
        {icon: 'github', url: 'https://github.com/JoseAle2610/GranjaAvicola'},
      ]
    },
    {
      title: 'NellaVent',
      description: 'Applicacion para la administracion de las ventas de un negocio pequeño, con conexion a firebase',
      img: '/screenshots/nellavent.png',
      links: [
        {icon: 'github', url: 'https://github.com/JoseAle2610/nellavent'}
      ]
    }
  ], 
  about: {
    title: 'Sobre mi',
    description: 'Soy José Suárez Desarrollador FullStack altamente motivado y apasionado por la tecnología, con experiencia en el desarrollo de soluciones empresariales y con gran entusiasmo de enfrentar nuevos desafíos.'
  },
  work: {
    title: 'Trabajos',
    description: 'En esta página podrás encontrar una selección de algunos de mis proyectos personales y profecionales en los que he estado trabajando. Permíteme mostrarte un vistazo de lo que he creado'
  },
  contact: {
    title: 'Contacto',
    description: 'Podemos discutir acerca de nuevos proyectos o solo saludar a travez de mis redes socioales o por email.'
  }
}

export default data
