<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Teoría del color


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-6.col-8.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/img1.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p El color como tal no existe, es una sensación producida por una estimulación en el ojo, por lo tanto, se podría decir que no hay dos personas que vean el color de la misma manera. Para apreciar la gama cromática y sus diferentes valores se puede hacer un círculo cromático. Este círculo tiene los colores primarios: el amarillo, el rojo y el azul. 
        p Con estos colores se hacen diferentes mezclas para obtener muchísimos más colores.
        p En este círculo cromático los colores primarios o puros se encuentran enmarcados con una línea más gruesa. Estos colores son el amarillo, el rojo y el azul.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9(data-aos="fade-right")
        p Los colores secundarios están en el centro de la intersección de dos colores primarios y se obtienen de la mezcla de estos en partes iguales. Por ejemplo, de la mezcla del rojo y el amarillo se produce el anaranjado. Los colores secundarios son: anaranjado, verde y violeta.
        p Los colores terciarios están entre cada color secundario y su más cercano primario. Así, de la mezcla del rojo y el anaranjado se obtiene el rojo anaranjado, el cual es un color terciario. De esta forma se puede seguir dividiendo el círculo en la cantidad de secciones que deseemos y obtener muchísimos más colores.
        p Este círculo es muy útil para saber el comportamiento de un color según su relación con otro, además de conocer su complementario, el cual se encuentra al lado opuesto del círculo y se llama así porque no tiene componentes de otro color en su mezcla, por ejemplo, el color complementario del amarillo es el violeta que nace de mezclar el rojo con el azul en iguales proporciones.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/img2.png', alt='')

    .row.justify-content-center.align-items-center.mb-lg-5
      .col-lg-5.col-md-10.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-4
          h5 Figura 6.
          span Círculo cromático
        figure
          img.mb-3(src='@/assets/curso/temas/t3/fig6.svg', alt='La figura presenta el círculo cromático, se señalan los colores fríos y los colores cálidos.')
        figcaption Fuente: SENA
      .col-lg-7(data-aos="fade-left")
        p El círculo cromático también define los colores fríos y los colores cálidos. Los primeros se encuentran situados en la gama de los azules y los verdes, ya que estos colores son predominantes en climas fríos y se utilizan en diseños en los que se quiera denotar calma, elegancia y sobriedad. Los colores cálidos están ubicados en la gama de los rojos y amarillos. Se encuentran en climas cálidos y son sinónimos de fuerza, viveza. Se usan bastante para llamar la atención sobre aspectos importantes que necesiten ser resaltados.
        p En cuanto al manejo del color para el multimedia es recomendable no usar muchos colores al tiempo, por lo general se escoge un color, del cual se desprenden dos tonos más que sean cercanos en el círculo. Finalmente se busca otro color diferente para integrar la composición cromática; este puede ser un color complementario. Cuando se escoge una combinación de este tipo, se debe manejar el complementario con sobriedad y no ponerlo a competir con los demás tonos en pantalla, idealmente este puede usarse como referencia para puntos clave en la pantalla como botones. Cuando no se tiene idea de cómo combinar el color se puede recurrir a aplicaciones en Internet donde se muestran diferentes gamas de un color y los mezclan de forma armónica en variadas combinaciones.
        
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-12
        .titulo-sexto.color-primario.mb-3
          h5 Figura 7.
          span Aplicación para gamas de colores
        figure
          img.mb-2(src='@/assets/curso/temas/t3/fig7.png', alt='En la figura se presenta la interfaz de una aplicación para mezclar los colores.')
        figcaption Fuente: SENA


    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Armonía de color

    p Una armonía es una coordinación de diferentes elementos como un todo en una composición, es decir, una sección del espectro o gama determinada para emplear en cualquier composición gráfica. Para entender mejor este concepto es necesario tener en cuenta el círculo cromático. Las armonías más utilizadas son las siguientes.
    p.mb-4 Haga clic sobre cada número para ver la explicación de cada armonía.

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t3/img-infog.svg', alt='La figura presenta 5 círculos cromáticos donde se presentan las diferentes armonías de color: complementarias, triada, análogos, complementario cercano, tétrada.')
      .tarjeta.bg2.p-3.p-lg-4(x="4%" y="16%" numero="+")
        h4.mb-2 Complementarios
        p.mb-0 Los colores complementarios son los que se encuentran totalmente opuestos en el círculo cromático, a 180º uno del otro, estos colores se ayudan mutuamente y generan un fuerte impacto visual cuando se acompañan.
      .tarjeta.bg2.p-3.p-lg-4(x="26%" y="14%" numero="+")
        h4.mb-2 Triada
        p.mb-0 Una triada son tres colores separados entre ellos 120º, son equidistantes entre sí y en ocasiones pueden incluir también su color más cercano formando gamas hasta de 5 colores para una misma composición.
      .tarjeta.bg2.p-3.p-lg-4(x="49%" y="12%" numero="+")
        h4.mb-2 Análogos
        p.mb-0 Los colores análogos son aquellos que se encuentran separados por un color común en el círculo cromático, por esta razón son muy similares entre ellos y de allí el porqué armonizan tan bien.
      .tarjeta.bg2.p-3.p-lg-4(x="74%" y="14%" numero="+")
        h4.mb-2 Complementario cercano
        p.mb-0 Complementario cercano o dividido es una mezcla en la que se escoge un color y en vez de tomar su complementario se toman sus dos vecinos próximos en el círculo cromático. Este contraste se deja trabajar muy bien, ya sea utilizando los tres colores o solamente dos de ellos.
      .tarjeta.bg2.p-3.p-lg-4(x="94%" y="14%" numero="+")
        h4.mb-2 Tétrada
        p.mb-0 Una tétrada o mezcla de dobles complementarios es una asociación más compleja, ya que se utiliza un par de análogos junto a sus respectivos complementarios. Marca un contraste fuerte y definido, pero hay que balancear muy bien la cantidad de los tonos para no generar un choque visual muy fuerte. Es importante escoger solo un tono como el color dominante.

    p Los colores tienen un gran papel en la vida cotidiana, por ejemplo, el rojo ordena detenerse en un semáforo, la señal amarilla previene de un riesgo en la carretera, la bombillita verde indica que el computador está prendido, el azul claro de un cielo en un hermoso y soleado día o el azul oscuro en un día de lluvia, incluso el hermoso y multicolor arcoíris compuesto por toda la gama cromática desde el rojo hasta el violeta pasando por los amarillos, verdes y azules.
    p Hay ciertos colores que en informática son muy tradicionales: el rojo indica cuando se cometió un error, el amarillo se usa para prevenir acerca de una situación que puede generar riesgo y el verde es muy utilizado cuando se trata de aprobar o aceptar un proceso. De esta manera, el significado o la interpretación que se le da al color es una cuestión muy cultural, por ello lo mejor es usarlo como herramienta que ayude a contextualizar armónicamente toda la composición. Este trabajo es una competencia específica de los diseñadores gráficos; ellos tienen todos los conceptos necesarios para definir la gama cromática más adecuada a este tipo de aplicaciones.



</template>

<script>
export default {
  name: 'Tema3',
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
