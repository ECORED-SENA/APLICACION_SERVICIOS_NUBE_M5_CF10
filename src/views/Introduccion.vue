<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-intro.png", alt="Banner Introducción")

    p(data-aos="fade") La industria del software ha sufrido muchos cambios a lo largo de la historia, pero lo que aún se conserva es 
      strong la necesidad de soluciones cada vez más complejas, velocidad de entrega y disponibilidad de estos servicios en tiempos cada vez más cortos. 
      | Con el ánimo de facilitar el cumplimiento de estas características, ha surgido gran cantidad de enfoques de desarrollo, entre los cuales encontramos a DevOps.

    p(data-aos="fade") En este componente formativo, se estudiarán las características de este nuevo enfoque, de dónde surge y cuáles son sus principales características. Adicionalmente, nos centraremos en un subconjunto de prácticas de DevOps que son ampliamente utilizadas en la industria del software.


</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass" scoped>
.introduccion
</style>
