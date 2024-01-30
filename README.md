﻿# CentroPokemonFinal

Para la realizacion y planeamiento de la aplicación utilicé la api gratuita llamada PokeApi. La misma esta basada en el mundo ficticio de Pokémon, donde los entrenadores (en este caso los usuarios) despues de hacer batallar a sus pokemons los llevan a los "Centro Pokémon" para curarlos y ponerlos en forma para continuar su aventura, sin embargo no es el único servicio que este lugar brinda, sino que tambien esta disponibles los servicios de "Crianza" e "Intercambio". El primero consiste en que el Centro Pokémon se necarga de cuidar y criar tu pokémon mientras continuas con tu aventura, y el segundo sirve para hacer como intermediario a la hora de realizar intercambios de pokémon, asegurando a ambas partes que cada uno reciba lo que quire.

Apenas uno abre la aplicaicon, esta misma te llevara a un formulario para poder iniciar sesión. En este momento existen dos usuarios hardcodeados:

1 - Usuario Regular:
    E-mail: regular@gmail.com
    Contraseña: Regular123

2 - Usuario Administrador:
    E-mail: admin@gmail.com
    Contraseña: Admin123

(Más adelante se menciona la diferencia entre cada uno)

Entrando en detalle a los componentes de la aplicacion (dejando de lado el ya mencionado login) estan:

1 - Home page:
    Aqui se encontrara un poco de información sobre la pagina y sus funcionalidades

2 - Registrar Pokémon:
    Aqui se encuetra un formulario que te pedira unos datos y el servicio que quieras solicitar para registrarlo en la local storage de la pagina

3 - Pokémons Ingresados:
    Esta funcionalidad es únicamente accesible por el usuario Admin. Aca hay una lista de todos los pokémons ingresados por "orden de llegada" con sus datos correspondientes y el tipo de servicio solicitado. Ademas se encuentran dos botones para eliminar o modificar los pokémons ya ingresados.

4 - Pokedex:
    En la serie y el juego, la Pokedex es una herramienta donde los entrenadores pueden encontrar informacion util de los pokemons conocidos de las diferentes regiones.


Las herramientas utilizadas en este proyecto son:
    -Html5
    -Css3
    -JavaScript
    -Vite
    -Bootstrap
    -Git Hub
    -Justinmind

NOTA: Al hacer el deploy hay un problema con los formularios de que al hacer el registro salta un error 404. Por ahora no he logrado solucionarlo, sin embargo usandolo en forma local con "npm run dev" anda correctamente y sin problemas.
