<template>
    <div style="padding-left: 6%;">
        <div class="grid-container">
            <div class="grid-item">
                <v-img src="@/assets/camisasDos.png" max-width="90%" height="100%" />
            </div>
            <div class="grid-item">
                <h2 class="rubik-doodle-tro">TE OFRECESEMOS</h2>
                <h3 class="bebas-neue-regular">DISEÑOS MODERNOS</h3>
                <div class="right-content">
                    <div class="text-primary mr-2 collection-text">|</div>
                    <p class="text-lg-left raleway">
                        Diseños para la forma en que vives <br>
                        composiciones perfectas en simplificidad <br>
                        y exclusividad, que comforman un equilibrio absoluto.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.collection-text {
    font-size: 25px;
}

.bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
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

.rubik-doodle-tro {
    font-family: "Rubik Doodle Shadow", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 55px;
    position: relative;
    top: 10px;
}

.raleway {
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 23px;
    letter-spacing: 2px;
}

.right-content {
    display: flex;
    justify-content: space-around;
    padding: 0;
    position: relative;
    top: 0px;
}

/* Media query para ajustar el orden de las columnas en pantallas más pequeñas */
@media only screen and (max-width: 768px) {

    .rubik-doodle-tro {
        font-family: "Rubik Doodle Shadow", system-ui;
        font-weight: 400;
        font-style: normal;
        font-size: 30px;
        position: relative;
        top: 10px;
        letter-spacing: 2px;
    }

    .bebas-neue-regular {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.7em;
        position: relative;
        top: 5px;
    }


    .raleway {
        font-family: "Raleway", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        font-size: 18px;
        letter-spacing: 2px;
        position: relative;
        top: 20px;
    }

    .collection-text {
        font-size: 22px;
        position: relative;
        top: 17px;
    }

    .grid-container {
        gap: 10px;
        grid-template-columns: 1fr;
        /* Cambiar a una sola columna en pantallas más pequeñas */
    }

    .grid-item:nth-child(1) {
        order: 2;
        /* Cambiar el orden de la imagen para que aparezca debajo del contenido */
    }

    .grid-item:nth-child(2) {
        order: 1;
        /* Cambiar el orden del contenido para que aparezca encima de la imagen */
    }
    .raleway br {
        display: none;
    }
}
</style>
