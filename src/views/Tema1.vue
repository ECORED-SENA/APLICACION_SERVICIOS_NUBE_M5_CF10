<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 DevOps

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema1.png", alt="DevOps")  

    p.mb-4(data-aos="fade") El proceso de construcción de un producto de software generalmente involucra dos áreas principales, las cuales son: 

    .row
      .col-lg-6.mb-4
        .content  
          .content-overlay
          img(src="@/assets/curso/imagen1-1.png", alt="área de desarrollo") 
          .tarjeta-details.fadeIn-top.p-2
            h5.text-white El área de desarrollo, que generalmente realiza las acciones de identificación de necesidades, análisis, diseño y construcción del software.
          .btn-numero(@mouseover="indicador1 = false")
            .indicador-interaccion(v-if="indicador1")
              .indicador-interaccion__icon
            h3.text-white 1
      .col-lg-6.mb-4
        .content
          .content-overlay
          img(src="@/assets/curso/imagen1-2.png", alt="área de operaciones") 
          .tarjeta-details.fadeIn-top.p-2
            h5.text-white El área de operaciones, generalmente encargados de aspectos relacionados con el alistamiento de infraestructura para despliegue en entornos productivos y el mantenimiento de los productos y servicios una vez entregados a los clientes para su manejo.
          .btn-numero
            h3.text-white 2
      
        


    p.mb-4(data-aos="fade") Con el objetivo de optimizar las actividades de las cuales son responsables cada una de las áreas, se han desarrollado, en el transcurso de los años, diferentes marcos, metodologías o enfoques. Desde la perspectiva del área de desarrollo, es muy común encontrar marcos de trabajo ágiles, como Scrum (Takeuchi, 1986), Lean Software Development (Poppendieck, 2003), XP (Beck, 2004), entre otros, los cuales han incorporado en el ADN capacidades para adaptarse rápidamente a los cambios, iteraciones cada vez más cortas para la entrega de avances de los productos desarrollados y la integración de los clientes dentro de las actividades de verificación de los mismos. Por otra parte, desde el área de operaciones, existen otros marcos y/o estándares, como COBIT (Ridley, 2004), ITIL (Hochstein, 2005), entre otros, que, a diferencia del área de desarrollo, buscan generalmente estandarización de procesos.

    .row.mb-5.mb-lg-0.align-items-center
      .col-lg-7.mb-2(data-aos="fade-right")
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Por lo anterior, se ha generado, en algunos casos, cierto tipo de dificultades para acelerar el despliegue de productos y servicios de software, problemas de comunicación entre dependencias, vacíos respecto a la responsabilidad sobre acciones asociadas con la gestión de productos, entre otros problemas, los cuales se conocen, en términos generales, como el muro de confusión, y esto puede dificultar el éxito de los proyectos (time to market) en la industria del software de hoy, altamente competitiva. Se requiere entonces de equipos altamente colaborativos, integrados y alineados a un mismo objeto, independientemente del área de trabajo, y es en este contexto donde surge DevOps.   
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1-imagen1.svg", alt="Imagen decorativa") 


    p.mb-4(data-aos="fade") El término DevOps fue utilizado por primera vez en 2008, para referirse a la necesidad de abordar estrategias que permitieran unir de forma colaborativa el área de desarrollo de software y el área de operaciones. Sin embargo, hoy no existe todavía una definición o descripción estandarizada de lo que realmente implica DevOps.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h4.mb-0 La implementación de prácticas de DevOps en una organización permite: 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                ul.lista-ul--color.lista-amarilla
                  li 
                    i.fas.fa-circle
                    | Eliminar barreras entre las áreas de desarrollo y operaciones (De França, 2016).
                  li 
                    i.fas.fa-circle
                    | Entrega más rápida de productos y servicios - time to market (Senapathi, 2018).a, 2016).
                  li 
                    i.fas.fa-circle
                    | Favorecimiento de la automatización de procesos 29, 30 (Riungu-Kalliosaari, 2016).

    Separador

    // 
    #t_1_1.titulo-segundo(data-aos="fade-right")
      h2 1.1.	Definición

    .row.mb-3.mb-lg-0.align-items-center
      .col-lg-7.mb-2(data-aos="fade-right")
        p Según Guerrero (2020), DevOps es un neologismo que surge de la combinación de las palabras “desarrollo” y “operaciones”, en inglés. 
          strong.etiqueta Es un movimiento cultural que permite cerrar la brecha entre los desarrolladores y el personal de operaciones. 
          | DevOps está relacionado con un conjunto de elementos de proceso que fomentan la colaboración y la comunicación, la automatización, el control de calidad y la integración, la entrega y despliegue continuo.
        p De lo anterior se puede interpretar que DevOps es mucho más que un título laboral, una metodología o una actividad dentro del marco de desarrollo de software. DevOps involucra aspectos relacionados con la cultura y las personas y, adicionalmente, plantea retos frente a la adopción de nuevas formas de hacer las cosas, apoyándose en procesos descritos por los marcos de trabajo ya existentes (los cuales deben ajustarse) y en la incorporación de herramientas que faciliten la automatización.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1-1-imagen1.svg", alt="Imagen decorativa") 


    Separador

    // 
    #t_1_2.titulo-segundo(data-aos="fade-right")
      h2 1.2. Ventajas y retos

    p(data-aos="fade") La adopción de DevOps en diferentes contextos ha permitido identificar una serie de beneficios y desafíos a partir de los cuales las organizaciones de software podrán determinar más fácilmente si desea adoptarlo inmediatamente, hacerlo de forma gradual o buscar otro tipo de filosofías que les permita el alcance de sus objetivos, de acuerdo con sus características y necesidades particulares.
    p(data-aos="fade") Según Guerrero (2019):   

    TabsB.color-acento-contenido.mb-5(data-aos="fade-down")
      .py-4.py-md-5(titulo="Ventajas" :icono="require('@/assets/curso/tema1-2-ico1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1-2-imagen1.svg', alt='Ventajas')
          .col-md-6
            p Algunos de los beneficios percibidos con la adopción de DevOps son:
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                | Mejor satisfacción del cliente respecto a los productos y servicios recibidos.
              li 
                i.fas.fa-circle
                | Mejora en la calidad del producto o servicio.
              li 
                i.fas.fa-circle
                | Mejora en la productividad.
              li 
                i.fas.fa-circle
                | Despliegue de productos más rápidos y confiables.
              li 
                i.fas.fa-circle
                | Mejora del ambiente laboral.
              li 
                i.fas.fa-circle
                | Mejora del proceso de monitoreo en tiempo real. 

      .py-4.py-md-5(titulo="Retos" :icono="require('@/assets/curso/tema1-2-ico2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1-2-imagen2.svg', alt='Retos')
          .col-md-6
            p Y entre los retos asociados a la adopción de DevOps, encontramos:
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                | Resistencia al cambio por parte de las áreas involucradas, al generarse cambios en la mentalidad respecto al seguimiento de las actividades de cada área.
              li 
                i.fas.fa-circle
                | Cambio en la cultura, estructuras y estándares de la organización.
              li 
                i.fas.fa-circle
                | Despliegue de productos más rápidos y confiables.
              li 
                i.fas.fa-circle
                | Dificultades al integrar estilos de trabajo del área de desarrollo y operaciones.
              li 
                i.fas.fa-circle
                | Selección de herramientas tecnológicas adecuadas.
              li 
                i.fas.fa-circle
                | Diseño de arquitectura que permita el soporte de prácticas de DevOps.        



  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    indicador1: true,
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
