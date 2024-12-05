<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Edición digital de imagen

    p.mb-4 Luego del proceso de digitalización es posible modificar la imagen obtenida mediante diversas opciones que ofrecen distintos #[em software] para editar color, utilizar efectos, emplear filtros y cambiar características propias. Además, con el #[em software] indicado también es posible hacer conversión de archivos o formatos de imagen de acuerdo con lo que se necesita.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        .titulo-sexto.color-primario.mb-2
          h5 Figura 3.
          span Modificación de imagen
        figure
          img.mb-2(src='@/assets/curso/temas/t2/fig3.png', alt='En la imagen se aprecia la manera en que mejoran las imágenes con el proceso de vectorización.')
        figcaption Fuente: SENA
      .col-lg-8
        p Los tipos de imágenes se pueden dividir en dos clases: #[em bitmap] o mapas de #[em bits] y vectores. Las primeras son una malla de millones de pixeles en la que no se pueden hacer cambios drásticos de tamaño, pues cada uno de esos puntos al transformarse será reinterpretado como una zona de color y el computador solamente aproximará el resultado, razón por la que se “pixelan” las imágenes o pierden calidad. Al contrario, los vectores, son un formato construido matemáticamente y esto permite que, al cambiar tamaño, una ecuación (invisible para el usuario) nuevamente genere la gráfica con la misma calidad que la inicial. Generalmente las fotografías son #[em bitmap] y las ilustraciones son vectores, el #[em software] para editar cada tipo de imagen es diferente.

    p.mb-5 Los formatos de imagen más utilizados son #[em JPG], #[em PNG] y #[em GIF]. El #[em JPG] se utiliza la mayor parte del tiempo gracias a su tamaño comprimido y excelente calidad de imagen, es empleado para almacenar fotografías y texturas de imagen. El #[em PNG], también de excelente calidad, se utiliza cuando una imagen debe llevar trasparencia en alguno de sus sectores y el #[em GIF], con el tiempo menos utilizado, permite hacer pequeñas animaciones para uso en la web. Otros formatos de imagen como el #[em TIFF] o el #[em RAW] son empleados para guardar imágenes o fotografías de altísima calidad, empleados casi siempre en procesos de impresión a gran escala o #[em backups]. Los #[em software] comerciales más conocidos para edición de imagen son Adobe Photoshop y Corel #[em photopaint]. También se puede encontrar algún #[em software] libre como Gimp y otros para trabajar en línea. En general los programas de edición de imagen traen las mismas herramientas de edición y manejan iconografías similares.

    .titulo-sexto.color-primario.mb-3
      h5 Figura 4.
      span Ejemplo de #[em sotfware] de edición de imágenes
    figure
      img.mb-2(src='@/assets/curso/temas/t2/fig4.png', alt='En la imagen se presenta una interfaz de un software editor de imagen.')
    figcaption Fuente: SENA
    
    .mb-5

    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Uso de herramientas de edición

    p.mb-4 Este menú fue tomado de la versión CS5 de adobe Photoshop®, sin embargo, todos los editores de imágenes tienen un menú con opciones muy similares, unos más profesionales que otros, pero en esencia brindan los mismos servicios. En este caso se pueden dividir las herramientas en grupos según su uso, se tienen por ejemplo las herramientas de selección, herramientas para cortar y sectorizar, herramientas de medida, herramientas para retocar, herramientas de pintura, herramientas de dibujo y texto, herramientas de navegación y los selectores de color y máscaras; cada herramienta puede tener sub-herramientas similares. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-6.col-md-9
        .titulo-sexto.color-primario.mb-3
          h5 Figura 5.
          span Herramientas de edición
        figure
          img.mb-2(src='@/assets/curso/temas/t2/fig5.png', alt='La imagen presenta un cuadro donde se mencionan los diferentes tipos de herramientas que existen en un software para edición de fotografía: herramientas de selección, herramientas para cortas y sectorizar, herramientas de medida, herramientas para retocar, herramientas de pintura, herramientas de dibujo y texto, herramientas de navegación, selector de color y máscaras.')
        figcaption Fuente: SENA

    p.mb-5 A continuación, se detallan los diferentes tipos de herramientas:

    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Herramientas de selección

    .row.bgc-1.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca
            SlyderA.p-4(tipo="b")
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p El marco rectangular es una de las herramientas de selección y como su nombre lo indica cubre áreas de forma rectangular, en algunos #[em software] de edición al oprimir en el teclado “#[em shift]” y arrastrar la selección esta se hace en forma de cuadrado. En este menú también encontramos un marco elíptico y en algunos #[em software] un maco de fila y de columna. 
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider1-1.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p Mover es la herramienta que nos sirve para cambiar de ubicación de manera rápida el contenido de nuestras capas de trabajo. Basta con seleccionarla y hacer clic en el elemento que deseamos mover, para así desplazarlo al lugar que queramos. 
                .col-md-4.col-lg-3.col-9
                  img.w-75.m-auto(src='@/assets/curso/temas/t2/slider1-2.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p El lazo sirve para hacer una selección a mano alzada, sin embargo, en ocasiones se encuentran otros tipos de lazo más precisos como el poligonal en el que se van marcando puntos para crear la selección, y el magnético que va generando puntos en las zonas donde hay un cambio de color brusco. 
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider1-3.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p La herramienta varita mágica y selección rápida sirven para seleccionar grandes porciones de una imagen en las que hay una zona de color similar, su uso depende de la precisión en cada caso específico. 
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider1-4.png', alt='')


    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Herramientas para cortar y sectorizar

    .row.bgc-1.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            .row.justify-content-center.align-items-center.py-lg-5
              .col-md-8
                p La herramienta recortar sirve para cambiar el tamaño del área en la que estamos trabajando. Sector sirve para crear un corte imaginario que se va a materializar cuando exportemos una imagen grande en muchas pequeñas según los “n” sectores que la dividamos. Seleccionar sector sirve para lo indicado por su nombre. 
              .col-md-4.col-lg-3.col-9
                img(src='@/assets/curso/temas/t2/slider2-1.png', alt='')


    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Herramientas de medida

    .row.bgc-1.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            .row.justify-content-center.align-items-center.py-lg-5
              .col-md-8
                p La herramienta cuentagotas sirve para obtener el color exacto de un píxel en la imagen, muestra de color toma hasta cuatro puntos como guía, regla nos da la medida en pixeles de un punto a otro y su grado de inclinación, notas como su ícono lo presenta son hijitas como los “#[em post it]” para escribir recordatorios y recuento nos sirve para colocar números guía en el área de trabajo. 
              .col-md-4.col-lg-3.col-9
                img.w-75.m-auto(src='@/assets/curso/temas/t2/slider3-1.png', alt='')


    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Herramientas para retocar

    .row.bgc-1.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca
            SlyderA.p-4(tipo="b")
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p El pincel corrector puntual y el pincel corrector son diferentes opciones de corrección que copian las características de una zona de la imagen para tratar de reproducirla en otra. El parche sirve para lo mismo, pero genera una selección como la del lazo, incluso se puede utilizar después de hacer una selección de cualquier tipo. El pincel de ojos rojos sirve para disminuir este efecto producido por el #[em flash]. 
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider4-1.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p El tampón de clonar es una de las herramientas más antiguas y prácticas de los editores de imágenes y sirve para reproducir una zona de una imagen en otro lugar, el tampón de motivo hace lo mismo, pero con una textura determinada. 
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider4-2.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p El borrador tiene tres clases diferentes, el normal que borra todo excepto las capas de fondo, esto debido a que esas capas generalmente están protegidas, para eso está el borrador de fondos. Por últimos está el borrador mágico que borra similar a como funciona la varita mágica, toma un color y lo desaparece. 
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider4-3.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-9
                  p En este menú hay tres opciones, una para desenfocar o volver borrosa una imagen, una para enfocar que causa el efecto contrario y la herramienta dedo, que genera un efecto parecido al de utilizar el dedo para correr la pintura en un lienzo. 
                .col-md-4.col-lg-2.col-9
                  img.m-auto(src='@/assets/curso/temas/t2/slider4-4.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p Sobreexponer se utiliza para aclarar las zonas de la imagen que deseemos, subexponer logra el efecto contrario, oscureciendo los sectores donde lo apliquemos y esponja desatura (convierte en grises) gradualmente la zona de la imagen donde se utilice. 
                .col-md-4.col-lg-3.col-9
                  img.w-75.m-auto(src='@/assets/curso/temas/t2/slider4-5.png', alt='')


    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Herramientas de pintura

    .row.bgc-1.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca
            SlyderA.p-4(tipo="b")
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p Pincel como su nombre lo indica sirve para esparcir un color como si fuera una pintura, lápiz sirve para lo mismo pero el trazo es más tosco, sustitución de color es un pincel que da el tono del nuevo color, conservando las sombras luminosas de la imagen original, finalmente el pincel mezclador actúa como un gotero tomando una parte de la imagen y luego la difumina con el resto de la imagen. 
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider5-1.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p El pincel de historia deshace cualquier acción hecha con alguno de los pinceles, deja la imagen tal como se encontraba originalmente, el pincel histórico hace unos trazos especiales tomando los colores de la zona donde se aplica y crea transformaciones.  
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider5-2.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p El bote de pintura se utiliza para rellenar un área determinada de un color, este se esparce por una zona de color similar. El degradado colorea toda una capa con un gradiente de color, inicialmente toma los colores de fondo y frontal, pero también se pueden editar o incluso colocar muchos más colores al tiempo y modificar la transparencia por color y la forma del gradiente. 
                .col-md-4.col-lg-3.col-9
                  img.w-75.m-auto(src='@/assets/curso/temas/t2/slider5-3.png', alt='')


    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Herramientas de dibujo y texto

    .row.bgc-1.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca
            SlyderA.p-4(tipo="b")
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p La pluma es una herramienta muy útil para crear gráficos, permite generar formas vectorialmente y las demás herramientas hermanas complementan su trabajo al permitir editar algo creado con ella.
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider6-1.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p Con las herramientas de texto se puede hacer de manera horizontal o vertical, las máscaras de texto crean un texto en forma de selección, esto sirve para convertir una zona de la imagen en texto, crear una textura o diferentes efectos. 
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider6-2.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p Estas herramientas sirven para hacer selección a formas creadas con la pluma, para de esta manera lograr editarlas en el momento que se requiera. Selección de trazado como lo indica su nombre, selecciona todo el trazado, mientras la selección directa permite seleccionar los nodos que uno desee. 
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider6-3.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p Entre las herramientas de dibujo tenemos las opciones de crear, rectángulo, rectángulo con las esquinas redondeadas, elipse, polígonos con diferentes números de lados o estrellas de igual forma, líneas y varias formas personalizadas. 
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider6-4.png', alt='')


    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Herramientas de navegación

    .row.bgc-1.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca
            SlyderA.p-4(tipo="b")
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p Estas herramientas no son muy comunes en el editor de imágenes, sirven para hacer desplazamientos, rotaciones, movimientos, escalamientos; todo aplicado a archivos de objetos modelados en 3D, de lo contrario no están activas. 
                .col-md-4.col-lg-3.col-9
                  img.w-75.m-auto(src='@/assets/curso/temas/t2/slider7-1.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p Al igual que las herramientas de rotación y demás 3D, estas solo funcionan en modelos tridimensionales. Hay herramientas para rotar, desplazar, panorámicas, recorridos y zoom; todos movimientos de la cámara.  
                .col-md-4.col-lg-3.col-9
                  img(src='@/assets/curso/temas/t2/slider7-2.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p La herramienta mano, se utiliza para desplazarse en la pantalla cuando tenemos zoom muy grande, por ejemplo, cuando la vista de la imagen es tan grande que no cabe en la pantalla. Rotar vista es una herramienta que no todos los programas tienen, pero es muy curiosa, ya que rota el escenario completamente, sin alterar su derecho, pues lo hace solo como una visualización.  
                .col-md-4.col-lg-3.col-9
                  img.w-75.m-auto(src='@/assets/curso/temas/t2/slider7-3.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p Esta es una de las herramientas fundamentales en el trabajo de ediciones de imágenes, pues nos permite acercarnos a las zonas en las que queremos lograr un detalle más fino, evitando quedarnos ciegos o golpear nuestro rostro con el monitor del computador. 
                .col-md-4.col-lg-3.col-9
                  img.w-75.m-auto(src='@/assets/curso/temas/t2/slider7-4.png', alt='')


    .subt.w-fit.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.png', alt='')
      h3.p-2.pe-5.mb-0 Sector de color y de máscaras

    .row.bgc-1.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca
            SlyderA.p-4(tipo="b")
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p En este panel se configuran los colores frontales y de fondo. Al hacer clic en ellos, aparece el selector de color para cambiarlos, al hacer clic en la flecha curva (X) los invierte de posición y al hacer clic en los pequeños cuadros (D) de la esquina, sin importar los colores que haya volvemos a los predeterminados. 
                .col-md-4.col-lg-3.col-9
                  img.w-75.m-auto(src='@/assets/curso/temas/t2/slider8-1.png', alt='')
              .row.justify-content-center.align-items-center.pt-lg-5
                .col-md-8
                  p Esta herramienta funciona para hacer selección de manera rápida, al hacer clic en ella podemos trabajar con el borrador o el pincel para seleccionar o deseleccionar respectivamente un área en nuestra imagen, el área en la que usamos el borrador se verá roja con transparencia, lo demás se ve transparente, al pasar el pincel sobre un área roja pareciera borrarla, al hacer clic nuevamente en la herramienta notaremos que el rojo es lo opuesto a nuestra selección. 
                .col-md-4.col-lg-3.col-9
                  img.w-75.m-auto(src='@/assets/curso/temas/t2/slider8-2.png', alt='')



</template>

<script>
export default {
  name: 'Tema2',
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
