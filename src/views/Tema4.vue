<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Modelos de color y contraste

    p.mb-5 A continuación, se describen los diferentes modelos de color, así como los tipos de contraste que se pueden encontrar en una imagen.

    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Modelos de color

    p.mb-4 Depende los autores hay diferentes modelos de color, sin embargo, estos se pueden agrupar en dos tipos: los colores luz y los colores materia.

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.bg3.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.pe-0
            img(src='@/assets/curso/temas/t4/img1.svg', alt='')
          .col-9.ps-0
            .bg-color-acento-contenido.w-fit.py-1.px-4
              h4.text-dark.mb-0 Colores luz
        p.mb-0.text-dark Como lo indica su nombre, estos colores son producidos por una fuente de luz. Este es un modelo de color aditivo ya que un haz de luz se suma a otro para generar nuevos tonos de color. El modelo más reconocido es el RGB que por sus iniciales en inglés contiene los colores #[em red, green and blue] (rojo, verde y azul). Cuando se mezclan estos colores en igual proporción se obtiene el color blanco y en contraposición, la ausencia total de ellos genera el color negro. Este sistema de color es el empleado por los televisores, monitores en los computadores, reproductores de audio y video, consolas de videojuegos, proyectores, teléfonos celulares, cámaras digitales, sistemas de luces y todo tipo de pantallas que generen imagen a partir de luz.
      .col-md.tarjeta.bg4.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.pe-0
            img(src='@/assets/curso/temas/t4/img2.svg', alt='')
          .col-9.ps-0
            .bg-color-acento-contenido.w-fit.py-1.px-4
              h4.mb-0 Colores materia
        p.mb-0 Los colores materia son generados por el hombre. Estos son modelos de color sustractivos pues al mezclar un color con otro se va perdiendo su pureza y así se genera un nuevo tono de color. El modelo más antiguo es el color pigmento donde sus colores primarios son el amarillo, el azul y el rojo, de allí se derivan todos los demás colores. Sin embargo, actualmente con el auge de las nuevas tecnologías, ha tomado mucha fuerza el modelo CMYK o colores para impresión, compuesto por los colores en inglés #[em cyan], magenta, #[em yellow and black] (cian, magenta, amarillo y negro).



    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Contraste
    
    p.mb-4 El contraste es un fenómeno con el que se pueden diferenciar los colores según su luminosidad respecto al color de fondo en el que estos se encuentren.

    TabsA.color-acento-botones(data-aos="fade-down")
      .tarjeta.bg5.p-4(titulo="El color en sí mismo")
        h4 El color en sí mismo
        p.mb-0 Este contraste se obtiene al combinar los colores puros o colores primarios. Cuando el contraste se realiza con el amarillo, azul y rojo, es el contraste más fuerte que se puede hacer. A medida que se incorporan colores secundarios como el verde, el naranja o el morado este contraste baja su fuerza, y así con los colores terciarios o demás tonos de color. Para hacer un correcto uso de este tipo de contraste se requiere al menos utilizar tres colores que sean marcadamente diferenciados.
      .tarjeta.bg5.p-4(titulo="Claro – oscuro")
        h4 Claro – oscuro
        p.mb-0 El blanco y el negro son los tonos más fuertes en la gama cromática, son bastante expresivos y deben utilizarse con especial cuidado, son polos opuestos pero entre ellos se extiende toda una gama de tonos de grises. Así mismo, se pueden obtener diferentes tonalidades de algún color determinado manejando de esta manera un contraste claro – oscuro.
      .tarjeta.bg5.p-4(titulo="Caliente – frio")
        h4 Caliente – frio
        p Este contraste se nombra así por la sensación de temperatura que se genera en el cerebro al ver los colores. La clasificación de ellos se hace directamente en el círculo cromático, los colores cálidos van desde el color rojo puro hasta el amarillo verdoso, mientras que los colores fríos van desde el color verde hasta el violeta rojizo.
        p.mb-0 Para lograr este tipo de contraste se suele escoger un tono de color, ubicar sus dos consecutivos a lado y lado en el círculo cromático y finalmente emplear también el opuesto del color elegido.
      .tarjeta.bg5.p-4(titulo="Complementarios")
        h4 Complementarios
        p.mb-0 Este tipo de contraste es uno de los más utilizados y para emplearlo también se recurre al círculo cromático, ya que allí se presenta un color con su respectivo complementario y se puede generar una escala de tonos entre ellos. Al ser totalmente opuestos son los que mejor se complementan, pero se debe tener cuidado no mezclarlos solos en iguales proporciones pues es tan fuerte el contraste que puede parecer que compiten entre ellos.
      .tarjeta.bg5.p-4(titulo="Simultáneo")
        h4 Simultáneo
        p.mb-0 Este es un fenómeno que se genera cuando se utiliza un mismo color con otros muy diferentes entre ellos. El efecto óptico que se percibe tiende a buscar un equilibrio. Más que un efecto real de colores es una sensación al ver la mezcla cromática entre ellos. Lo curioso de este contraste es que los colores pierden su identidad propia y crean nuevos efectos.
      .tarjeta.bg5.p-4(titulo="Cualitativo")
        h4 Cualitativo
        p.mb-0 El contraste cualitativo se basa en el grado de pureza o saturación del color. En este tipo de contraste se toman como opuestos un color puro y luminoso con uno apagado. Para “apagar” un color se puede utilizar el color blanco, el color negro, el gris o directamente su complementario.
      .tarjeta.bg5.p-4(titulo="Cuantitativo")
        h4 Cuantitativo
        p.mb-0 Como indica su nombre es un contraste de proporciones. Estas relaciones de tamaño se pueden medir de acuerdo con su proporción en el lienzo o superficie de trabajo. El objetivo de esta relación es encontrar el equilibrio ideal, de tal manera que ningún color se vea superior sobre otro. La fuerza de expresión de un color lo marca la luminosidad y el tamaño de este.



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
