<template>
    <div style="text-align: center;">
        <h2 class="rubik-doodle">NUEVA</h2>
        <h3 class="bebas-neue-regular">Colección</h3>
    </div>

    <Splide :options="options" :extensions="extensions" aria-label="My Favorite Images">
        <SplideSlide v-for="image in images" :key="image.id">
            <v-hover v-slot="{ isHovering, props }">
                <v-card class="mx-auto" max-width="344" v-bind="props">
                    <img class="slide-image" src="@/assets/camisas.png" :alt="image.alt">
                    <v-card-text>
                        <h2 class="text-h6 text-primary">
                            Magento Forests
                        </h2>
                        Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                    </v-card-text>

                   

                    <v-overlay :model-value="isHovering" class="align-center justify-center" scrim="#036358" contained>
                        <v-btn variant="flat">ver producto</v-btn>
                    </v-overlay>
                </v-card>
            </v-hover>
        </SplideSlide>
    </Splide>
</template>

<script>
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
import '@splidejs/vue-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent, ref, watch } from 'vue';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

export default defineComponent({
    components: {
        Splide,
        SplideSlide,
    },
    setup() {
        const images = [
            { id: 1, src: '@/assets/camisas.png', alt: "Sample 1" },
            { id: 2, src: '@/assets/camisas.png', alt: "Sample 2" }
        ];

        const options = ref({
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 3,
            autoHeight: true,
            autoScroll: {
                speed: .7,
            },
        });

        // Función para cambiar perPage dependiendo del ancho de la pantalla
        const updatePerPage = () => {
            options.value.perPage = window.innerWidth < 600 ? 2 : 3;
        };

        // Actualizar perPage al cargar la página y cuando se redimensione la ventana
        window.addEventListener('resize', updatePerPage);
        updatePerPage(); // Llama a la función al cargar la página

        const extensions = {
            AutoScroll,
        };

        // Remover el evento resize cuando el componente es desmontado
        watch(() => options.value.perPage, () => {
            window.removeEventListener('resize', updatePerPage);
        });

        return {
            options,
            images,
            extensions
        };
    },
});
</script>

<style>
.rubik-doodle {
    font-family: "Rubik Doodle Shadow", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 80px;
    position: relative;
    top: 31px;
    letter-spacing: 10px;
}

.bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 65px;
    letter-spacing: 10px;
}

.slide-image {
    max-width: 100%;
    /* Set maximum width to 100% */
    height: auto;
    /* Ensure the image retains its aspect ratio */
}

@media (min-width: 600px) {
    .slide-image {
        max-width: 600px;
        /* Set the maximum width to 500px when the viewport width is 500px or greater */
    }

    .rubik-doodle {
        font-family: "Rubik Doodle Shadow", system-ui;
        font-weight: 400;
        font-style: normal;
        font-size: 75px;
        /* Decrease font size */
        position: relative;
        top: 31px;
        letter-spacing: 10px;
    }

    .bebas-neue-regular {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 85px;
        /* Decrease font size */
        letter-spacing: 10px;
    }
}
</style>
