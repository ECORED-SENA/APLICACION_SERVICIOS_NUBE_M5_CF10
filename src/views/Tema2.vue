<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Prácticas fundamentales

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema2.png", alt="Prácticas fundamentales")  

    p.mb-4(data-aos="fade") DevOps afecta a las organizaciones de 
      em software 
      | desde cuatro diferentes dimensiones (Lwakatare, 2015), que son: la cultura, las personas, los procesos y las herramientas. Cada una de estas dimensiones clasifica un conjunto de prácticas que son las que al final materializan los ideales de DevOps. Si bien es cierto que desde cada una de las dimensiones se puede identificar gran cantidad de buenas prácticas, a continuación, se listan y describen las que son mayormente implementadas en la industria actual.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul3" data-aos="fade-down")
      
      .row.justify-content-center(titulo="Integración continua")
        .col-md-1.col-5.px-lg-2.mb-3
          figure
            img(src='@/assets/curso/tema2-icono1.svg', alt='Integración continua')
        .col-md-10.col-12.mb-4.mb-md-0
          p Es una práctica mediante la cual el equipo de desarrollo comparte y construye de forma colaborativa el código de un producto o servicio de software por medio de repositorios gestionados con sistemas de control de versiones. En estos repositorios, cada miembro del equipo tiene un conjunto de permisos y mecanismos que le permiten construir fragmentos diferentes de código y luego, como si fuera un rompecabezas, integrar lo que sería el producto o servicio de software final.
          p Adicionalmente, la integración continua facilita el proceso para la ejecución de pruebas manuales o automatizadas y prepara el camino para la construcción de versiones de producto para despliegue en entornos productivos.
          p Existen varios sistemas de control de versiones, entre los más conocidos del mercado se encuentra GIT, el cual es un software libre, totalmente compatible con cualquier sistema operativo, se puede controlar con una simple ventana de comandos y es muy eficiente para todo tipo de proyectos.
          p Generalmente, los IDE ya traen integrados mecanismos para el trabajo con herramientas de integración continua o, en su defecto, ofrecen plugins para adecuar este tipo de práctica.

      div(titulo="Entrega continua")
        .row.justify-content-center
          .col-md-1.col-5.px-lg-2.mb-3
            figure
              img(src='@/assets/curso/tema2-icono2.svg', alt='Entrega continua')
          .col-md-10.col-12.mb-4.mb-md-0
            p Es complementaria a la integración continua y permite implementar actividades automatizadas para asegurarse de que todo el código disponible en un repositorio sea compilado y desplegado en entornos de preproducción que podrían potencialmente transformarse en versiones productivas.
            p Esto acelera notablemente el proceso de construcción de un producto, ya que si se hace de manera adecuada, el tiempo que existe entre la terminación de un código por parte del desarrollador y el tiempo en que esto se ve reflejado en un entorno de preproducción se reduce considerablemente. De igual forma, se puede obtener realimentación más temprana por parte de los equipos encargados de hacer las pruebas.

      div(titulo="Despliegue continuo")
        .row.justify-content-center
          .col-md-1.col-5.px-lg-2.mb-3
            figure
              img(src='@/assets/curso/tema2-icono3.svg', alt='Despliegue continuo')
          .col-md-10.col-12.mb-4.mb-md-0
            p Busca el mismo objetivo que la entrega continua, es decir, llevar rápidamente un código fuente a entornos de producción; la diferencia radica en que la entrega continua requiere de la intervención humana para determinar cuándo se ejecutan este conjunto de actividades definidas en la organización; en el caso del despliegue continuo, se habla de sistemas totalmente automatizados.
            p Algunas organizaciones no implementan esta práctica debido a las políticas propias de la organización, ya sea por planes programados para procesos de despliegue de productos, debido a dinámicas internas para la realización de pruebas y emisión de avales, entre otras cosas.

      div(titulo="Pruebas continuas")
        .row.justify-content-center
          .col-md-1.col-5.px-lg-2.mb-3
            figure
              img(src='@/assets/curso/tema2-icono4.svg', alt='Pruebas continuas')
          .col-md-10.col-12.mb-4.mb-md-0
            p Esta práctica busca que el proceso de pruebas sea realizado de forma transversal, durante todo el proceso de construcción de un producto de software, y no solo al final, como normalmente lo sugieren algunas metodologías tradicionales.
            p Esto implica que el proceso de pruebas debe realizarse, incluso, desde el proceso de identificación de requerimientos, ya que entre más rápido se realicen las pruebas, se puede obtener una realimentación mucho más rápida y, si es el caso, realizar los ajustes requeridos de forma anticipada, lo cual impacta al final en menores costos y mayor calidad.
            p Dentro de esta misma línea, han surgido conceptos como Shift Left, cuya principal filosofía radica en posibilitar el proceso de pruebas incluso antes del proceso de construcción del software.

      div(titulo="Monitoreo continuo")
        .row.justify-content-center
          .col-md-1.col-5.px-lg-2.mb-3
            figure
              img(src='@/assets/curso/tema2-icono5.svg', alt='Monitoreo continuo')
          .col-md-10.col-12.mb-4.mb-md-0
            p La práctica de monitoreo continuo hace referencia al monitorio sobre todo tipo de recurso: software, hardware, talento humano y/o procesos desarrollados alrededor de la construcción de un producto de software, de forma que se puedan identificar claramente las fuentes de los problemas generados, en el menor tiempo posible, y lograr posteriormente establecer los mecanismos que permitan anticiparse a cualquier dificultad, es decir, hacer actividades reactivas, pero también proactivas.
            p Entre los objetivos de esta práctica podemos listar: 
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                | Mejorar la transparencia y visibilidad de las actividades, tanto de equipos de desarrollo como de operaciones.
              li 
                i.fas.fa-circle
                | Identificar dificultades en el funcionamiento y rendimiento de los productos o servicios desarrollados.
              li 
                i.fas.fa-circle
                | Aplicar los correctivos requeridos sobre problemas identificados antes de que estos produzcan daños importantes.
              li 
                i.fas.fa-circle
                | Se puede hacer seguimiento detallado del comportamiento del usuario en el uso del producto o servicio.

      div(titulo="Infraestructura como código")
        .row.justify-content-center
          .col-md-1.col-5.px-lg-2.mb-3
            figure
              img(src='@/assets/curso/tema2-icono6.svg', alt='Infraestructura como código')
          .col-md-10.col-12.mb-4.mb-md-0
            p Esta práctica permite eliminar los límites que puedan existir entre el desarrollo de código y la creación de entornos a nivel de infraestructura que permiten la ejecución de estos, por medio del uso de lenguajes descriptivos o de alto nivel (Scripts) que permiten automatizar procesos de implementación y aprovisionamiento de ambientes en cualquier momento, sin intervención humana.

      div(titulo="Gestión de la configuración")
        .row.justify-content-center
          .col-md-1.col-5.px-lg-2.mb-3
            figure
              img(src='@/assets/curso/tema2-icono7.svg', alt='Gestión de la configuración')
          .col-md-10.col-12.mb-4.mb-md-0
            p Esta práctica engloba todas las actividades administrativas requeridas para la creación, el mantenimiento y actualización de toda la información relacionada con el hardware y software asociado a un sistema, de forma que se asegure la integridad y calidad del producto durante todas las fases de desarrollo.
            p Entre los objetivos asociados a esta práctica, se pueden encontrar: 
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                | Identificación de los productos que deben ser considerados como elementos de la configuración del sistema.
              li 
                i.fas.fa-circle
                | Gestionar y documentar todo proceso o solicitud que implique cambios.
              li 
                i.fas.fa-circle
                | Mantener todo tiempo información válida de la configuración. 
             

      
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({}),
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
