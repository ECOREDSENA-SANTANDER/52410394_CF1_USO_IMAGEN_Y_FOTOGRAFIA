<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Producción de imagen

    p.mb-5 A continuación, se presentan diferentes características, componentes y procesos que se deben conocer y comprender antes de iniciar a producir imágenes: 

    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 La imagen impresa y la imagen digital

    p.mb-4 Al observar detalladamente una imagen sobre un medio impreso, se evidencia que está construida por una infinidad de pequeños puntos de tinta, lo cual no se nota al ver de lejos. De la misma manera las imágenes digitales están compuestas por muchos puntos, en este caso llamados pixeles. La diferencia más grande entre estas dos clases de imágenes es que los puntos de las impresas son redondos mientras que en las digitales son cuadrados, en cada caso estos son la unidad mínima de color que puede componer una imagen.

    .row(data-aos="fade-down")
      .col-lg-5.mb-4
        .titulo-sexto.color-primario.mb-3
          h5 Figura 1.
          span Ejemplo de imagen impresa
        figure
          img.mb-2(src='@/assets/curso/temas/t1/fig1.png', alt='En la figura se aprecian los puntos redondos de una imagen impresa.')
        figcaption Fuente: SENA  
      .col-lg-1
      .col-lg-4.mb-4
        .titulo-sexto.color-primario.mb-3
          h5 Figura 2.
          span Ejemplo de imagen digital
        .row
          .col-lg-10
            figure
              img.mb-2(src='@/assets/curso/temas/t1/fig2.png', alt='En la figura se aprecian los puntos cuadrados de una imagen digital.')
            figcaption Fuente: SENA  

    p.mb-5 Cada píxel guarda la información que representa un valor numérico medido en bytes, entre más bytes tenga una imagen, esta puede tener una mayor gama cromática y así mismo incrementa el peso del archivo de esta.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .subt.w-fit.mb-4
          img(src='@/assets/curso/temas/t1/subt.png', alt='')
          h3.p-2.pe-5.mb-0 Píxel
        p La palabra píxel tiene como origen un vocablo inglés y nació como acrónimo de “#[em picture & element]” (en español imagen y elemento), y es un término empleado en el ambiente informático para indicar la unidad más pequeña que puede tener una imagen.
        p Estos pixeles se agrupan en unidades llamadas byte, las cuales están compuestas cada una por 8 bits. De esta forma, para una imagen de 1 byte se dispone de 28 colores, lo que da un total de 256 colores.
        p Las imágenes que mayor profundidad de color tienen son aquellas de 3 bytes o 24 bits, ya que estas ofrecen 16.277.216 colores y son conocidas como imágenes de color verdadero.
        p También existe el término megapíxel, el cual hace referencia a un millón de pixeles y hoy en día es bastante utilizado para indicar la resolución de las cámaras de fotografía digitales.
      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img1.png', alt='')

    .row.justify-content-center.align-items-center
      .col-lg-9(data-aos="fade-right")
        .subt.w-fit.mb-4
          img(src='@/assets/curso/temas/t1/subt.png', alt='')
          h3.p-2.pe-5.mb-0 Digitalización de imágenes
        p Este proceso consiste en tomar una imagen análoga y volverla digital, ya sea mediante el uso del escáner o una cámara fotográfica. Cuando se hace una digitalización se puede escoger la cantidad de bits de almacenamiento (8, 24 o 48), lo cual va ligado directamente a la calidad de color obtenida. Escoger adecuadamente alguna opción usted debe tener en cuenta su necesidad puntual.
        p La digitalización es una conversión de información de una fuente análoga a información electromagnética. En otras palabras, la digitalización es una reinterpretación de algo que en un momento es tangible y luego es captada por sensores para finalmente ser datos almacenados en un medio magnético. Los dispositivos de digitalización de imágenes más comunes son: escáneres, cámaras digitales (fotografía y video), lápices ópticos y las tabletas digitalizadoras. Con ayuda de un software de creación o edición de imágenes también se pueden considerar el mouse y el teclado como dispositivos de digitalización.
      .col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img2.png', alt='')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
