<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Para la producción de una pieza gráfica es fundamental conocer y dominar los procesos para la producción y edición de imágenes, teniendo en cuenta la teoría del color para sacarle provecho a la imagen y ponerle un sentido e intención, adicionalmente, es importante conocer los elementos básicos del diseño para que la pieza gráfica tenga un orden y una coherencia. En el siguiente diagrama se enuncian los temas clave trabajados en este componente:  

    .row.justify-content-center
      .col-lg-12.mb-5
        .tarjeta.bg1.p-2.p-md-4.py-md-5
          figure.py-md-5
            img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama de flujo consta de dos temas principales: producción de imágenes: digitalización y edición, teoría del color; y elementos básicos del diseño: conceptuales, visuales, de relación, prácticos e interrelación de formas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
