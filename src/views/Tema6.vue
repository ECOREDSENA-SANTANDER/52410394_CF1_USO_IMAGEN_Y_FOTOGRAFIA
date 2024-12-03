<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Elementos básicos del diseño

    .bloque-texto-f.color-secundario.pt-5.px-5.mb-2(data-aos="fade-down")
      .row.justify-content-center
        .col-lg-11
          .bloque-texto-f__autor.mb-3
            h5.mb-0 Wong (1995) define el diseño como:
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.bloque-texto-f__texto.mb-4.mb-lg-5 “#[em Un proceso de creación visual con un propósito. A diferencia de la pintura y de la escultura, que son la realización de las visiones personales y los sueños de un artista, el diseño cubre exigencias prácticas. Una unidad de diseño gráfico debe ser colocada frente a los ojos del público y transportar un mensaje prefijado. Un producto industrial debe cubrir las necesidades de un consumidor].” (pág.41)

    p De esta manera, el diseño no está enfocado solamente a producir objetos estéticamente agradables, sino también tiene un objetivo de suplir una necesidad de la vida cotidiana. El diseñador tiene como tarea crear una armonía entre la estética visual y la funcionalidad de un producto dentro de un contexto.


    Separador
    #t_6_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 6.1. Elementos conceptuales

    p Estos elementos no son necesariamente visuales mientras no exista un recorrido, pero sin embargo siempre parecen estar presentes.
    
    SlyderF.fle-circulo(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Punto
        p.mb-0 Indica posición. No tiene ni largo ni ancho. No ocupa una zona en el espacio. Es el principio y fin de una línea y también es el lugar donde dos líneas se encuentran o se cruzan.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Línea
        p.mb-0 Cuando un punto se mueve su recorrido se transforma en una línea. Tiene largo, pero no ancho. Tiene posición y dirección, está limitada por dos puntos. Forma los bordes de un plano.izado para almacenar, consultar, modificar o eliminar la información directamente o desde sistemas externos como ERP o CRM.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Plano
        p.mb-0 Es el recorrido de una línea en movimiento. Tiene largo y ancho, pero no tiene grosor. Tiene posición y dirección. Esta limitado por líneas. Define los límites extremos de un volumen.zado para almacenar, consultar, modificar o eliminar la información directamente o desde sistemas externos como ERP o CRM.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Volumen
        p.mb-0 Es el recorrido de un plano. Tiene posición en el espacio. En un diseño bidimensional el volumen es una ilusión.


    Separador
    #t_6_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 6.2.  Elementos visuales

    p Cuando los elementos conceptuales se hacen visibles tienen forma, color, medida y textura.

    SlyderF.fle-circulo(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Forma
        p.mb-0 Es lo que puede ser visto. Aporta la identificación principal de la percepción.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Medida
        p.mb-0 Toda forma tiene un tamaño, magnitud. Es físicamente mesurable.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Color
        p.mb-0 Se define el color como una distinción de una forma con sus cercanías.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Textura
        p.mb-0  La cercanía en la superficie de una forma plana, decorado suave, rugoso. Atrae al tacto y a la vista.


    Separador
    #t_6_3.titulo-segundo.color-primario(data-aos='fade-right')
      h2 6.3.  Elementos de relación

    p Este tipo de elementos toman en cuenta la ubicación y la interrelación de formas en un diseño. 

    SlyderF.fle-circulo(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Dirección
        p.mb-0 La relación de la forma con el espectador, con el marco, con las cercanías.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Posición
        p.mb-0 Relación de la forma respecto al cuadro, al espacio o a la estructura del diseño.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Espacio
        p.mb-0 Se refiere al estar ocupado o vacío. Puede ser liso ilusorio o sugerir profundidad.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Gravedad
        p.mb-0 Es una sensación psicológica, no visual. Se le atribuyen características como pesantez, liviandad, estabilidad o inestabilidad a formas o grupos de formas.


    Separador
    #t_6_4.titulo-segundo.color-primario(data-aos='fade-right')
      h2 6.4.  Elementos prácticos
    
    p Este tipo de elementos toman en cuenta la ubicación y la interrelación de formas en un diseño. 

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-8
        SlyderF.fle-circulo(columnas="col-lg-6 col-md-6")
          .tarjeta.bg2.p-4.text-center
            .row.justify-content-center.mb-4
              .col-lg-5.col-md-6.col-5
                img(src='@/assets/curso/temas/t6/img1.svg', alt='')
            .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
              h4.mb-0 Representación
            p.mb-0 Cuando la forma deriva de la naturaleza o del mundo humano.
          .tarjeta.bg2.p-4.text-center
            .row.justify-content-center.mb-4
              .col-lg-5.col-md-6.col-5
                img(src='@/assets/curso/temas/t6/img1.svg', alt='')
            .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
              h4.mb-0 Significado
            p.mb-0 Cuando el diseño trasmite un mensaje.
          .tarjeta.bg2.p-4.text-center
            .row.justify-content-center.mb-4
              .col-lg-5.col-md-6.col-5
                img(src='@/assets/curso/temas/t6/img1.svg', alt='')
            .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
              h4.mb-0 Función
            p.mb-0 Cuando el diseño sirve para un determinado propósito.


    Separador
    #t_6_5.titulo-segundo.color-primario(data-aos='fade-right')
      h2 6.5.  Interrelación de formas

    p Este elemento se usa cuando los puntos, líneas y planos se hacen visibles y se relacionan unas con otras sobre un plano.

    SlyderF.fle-circulo(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Distanciamiento
        p.mb-0 Se refiere a elementos que se encuentran separados o están cercanos.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Toque
        p.mb-0 Esta característica se presenta cuando el espacio que separa los elementos queda anulado.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Superposición
        p.mb-0 Se origina cuando se cruza un elemento sobre otro. Parece que uno estuviera encima del otro.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Penetración
        p.mb-0 Produce la misma sensación que la superposición, con la diferencia que ambos elementos quedan transparentes en la zona del cruce.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Unión
        p.mb-0 Es la reunión de elementos en los que estos se vuelven una sola forma, es decir, una forma mayor.
      .tarjeta.bg2.p-4.text-center
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-6.col-5
            img(src='@/assets/curso/temas/t6/img1.svg', alt='')
        .bg-color-acento-contenido.w-fit.m-auto.py-1.px-5.mb-3
          h4.mb-0 Sustracción
        p.mb-0 Se da cuando una forma visible se cruza con una invisible, dejando como resultado una forma de menor tamaño a la inicial.



</template>

<script>
export default {
  name: 'Tema6',
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
