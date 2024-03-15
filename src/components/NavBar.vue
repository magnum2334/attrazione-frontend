<template>
    <div>
        <!-- Barra superior con número de WhatsApp -->
        <v-app-bar app :flat="flat" dark class="px-15 media" :class="{ expand: flat }">
            <!-- Botón de hamburguesa a la izquierda -->
            <v-app-bar-nav-icon v-if="isXs" style="font-size-adjust: 40px !important;" @click.stop="drawer = !drawer"
                class="mx-2" />

            <!-- Logo en el centro -->
            <v-img v-if="!isXs" src="@/assets/logosimple.png" max-width="10%" height="65%" />
            <div class="mr-auto" v-if="!isXs"></div>
            <div class="mx-auto" v-if="!isXs">
                <v-btn @click="$vuetify.goTo('#hero')">
                    <span class="mr-2 text-h6 " style="font-weight: 300 !important;">Inicio</span>
                </v-btn>
                <v-btn @click="$vuetify.goTo('#features')">
                    <span class="mr-2 text-h6 " style="font-weight: 300 !important;">Portafolio</span>
                </v-btn>
                <v-btn @click="$vuetify.goTo('#download')">
                    <span class="mr-2 text-h6 " style="font-weight: 300 !important;">Quienes somos</span>
                </v-btn>

            </div>
            <!-- Íconos en los extremos -->
            <div class="mr-auto"></div> <!-- Esto separa los elementos izquierdos de los derechos -->
            <!-- Botón del carrito de compras a la derecha -->
            <v-btn v-if="!isXs">
                <v-icon class="mx-5 px-4 ma-2" size="x-large">mdi-cart-outline</v-icon>
            </v-btn>
            <v-app-bar-nav-icon v-else>
                <v-icon style="position: relative; left: 7px; " class="mr-5 px-4 ma-2"
                    size="x-large">mdi-cart-outline</v-icon>
            </v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
                title="John Leider"></v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
                <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            isXs: false,
            color: 'primary',
            flat: false
        }
    },
    methods: {
        onResize() {
            this.isXs = window.innerWidth < 850;
        }
    },
    watch: {
        isXs(value) {
            if (!value && this.drawer) {
                this.drawer = false;
            }
        }
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    }
};
</script>

<style scoped>
.v-toolbar {
    transition: 0.6s;
}

.expand {
    height: 80px !important;
    padding-top: 10px;
}


@media (max-width: 850px) {
    .media {
        display: flex;
        justify-content: space-between;
        padding: 0 !important;
    }
}
</style>
