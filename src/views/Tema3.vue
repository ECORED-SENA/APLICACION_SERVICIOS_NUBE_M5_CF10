<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Herramientas tecnológicas que soportan prácticas de DevOps

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema3.png", alt="Herramientas tecnológicas que soportan prácticas de DevOps")

    p.mb-4(data-aos="fade") No existe una única herramienta tecnológica que permita soportar DevOps, ya que como vimos existen muchas prácticas deseables y será el contexto particular de cada desarrollo el que permitirá determinar cuáles de estas son realmente requeridas y cuáles otras opcionales.  

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-lg-10
        .tarjeta.color-secundario.py-lg-4.px-lg-5.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-2
              img.px-lg-2(src="@/assets/curso/icono-infografia.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h3.mb-1 Infografía - DevOps
                  p.mb-0.text-small En el mercado existen gran variedad de herramientas que facilitan la adopción de ciertas prácticas, a continuación se describen algunas de ellas junto al área o proceso que le dan soporte.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Infografia_dev_Ops.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download




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

<style lang="sass" scoped></style>
