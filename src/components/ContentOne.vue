<template>
    <div style="width: 100%; background: grey; display: flex; align-items: center;">
        <div style="padding: 1px;">
            &nbsp;&nbsp; ° Envío GRATIS* en pedidos mayores a $90.000 COP&nbsp; |&nbsp; SOMOS ATTRAZIONE |&nbsp; SOMOS
            EXCLUSIVIDAD &nbsp; |&nbsp; PREGUNTAS FRECUENTES &nbsp; | COMPRA POR NEQUI &nbsp; |

            <!-- Iconos de redes sociales -->
            <v-icon style="position: relative; left: 7px;" class="mr-5 px-4 ma-1" size="x-large">mdi-facebook</v-icon>
            <v-icon style="position: relative; left: 7px;" class="mr-5 px-4 ma-1" size="x-large">mdi-instagram</v-icon>
            <v-icon style="position: relative; left: 7px;" class="mr-5 px-4 ma-1" size="x-large">mdi-twitter</v-icon>
        </div>
    </div>
    <div style="padding-left: 6%;">
        <div class="grid-container">
            <div class="grid-item">
                <v-img class="responsive-img" src="@/assets/logoatt.png" max-width="95%" height="45%" />
                <h1 class="rubik-doodle">
                    COLECCÍON
                </h1>
                <div class="left-content">
                    <div class="text-primary mr-2 collecion-text">|</div>
                    <p class="text-lg-left raleway">
                        Inspira en la exclusividad
                        attrazione ofrece productos, experiencias,
                        innovaciones.
                    </p>
                </div>
            </div>
            <div class="grid-item"><v-img class="img-camisa" src="@/assets/camisas.png" max-width="90%" height="100%" />
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap');

.collecion-text {
    font-size: 25px;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* Dos columnas de tamaño igual */
    gap: 100px;
    /* Espacio entre las columnas */
}

.grid-item {
    background-color: rgb(0, 0, 0)0;
    padding: 20px;
}

.rubik-doodle {
    font-family: "Rubik Doodle Shadow", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 80px;
    position: relative;
    top: -45px
}

.raleway {
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 23px;
    letter-spacing: 2px;
}

.left-content {
    display: flex;
    justify-content: space-around;
    padding: 0;
    position: relative;
    top: -61px;
}

/* Media query para ajustar el tamaño de la letra solo en pantallas más pequeñas */
@media only screen and (max-width: 768px) {
    .collecion-text {
        font-size: 22px;
    }

    .grid-item {
        max-width: 95%;

        /* Ajusta el ancho máximo de la imagen */
    }


    .grid-container {
        grid-template-columns: 1fr;
        gap: 20px;
        /* Cambiar a una sola columna en pantallas más pequeñas */
    }

    .rubik-doodle {
        font-family: "Rubik Doodle Shadow", system-ui;
        font-weight: 400;
        font-style: normal;
        font-size: 40px;
        position: relative;
        top: -41px
    }

    .left-content {
        display: flex;
        justify-content: space-around;
        padding: 0;
        position: relative;
        top: -31px;
    }

    .raleway {
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        font-size: 19px;
        letter-spacing: 2px;

    }

    .responsive-img {
        position: relative;
        top: -20px;
    }

    .grid-item  .img-camisa {
        display: flex;
        justify-content: end;
        align-items: center;
        position: relative;
        left: 20px;
    }

   

    /* Ajuste adicional para pantallas con menos de 350px de ancho */
    @media only screen and (max-width: 350px) {
        .rubik-doodle {
            font-size: 30px;
            /* Cambiar el tamaño de la letra para pantallas muy pequeñas */
        }

        .raleway {
            font-size: 10px;
            /* Cambiar el tamaño de la letra para pantallas muy pequeñas */
        }
    }
}
</style>
