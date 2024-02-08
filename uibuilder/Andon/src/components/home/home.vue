<template>
    <div class="back-img">
        <div class="logo-container">
            <div class="my-container">
            </div>
        </div>
        <h1 class="text-center line-name">{{ lineName }}</h1>
        <a class="config-link " href="/Andon/#/formPostes" target="" @click="updateForm()">
            <div class="logo-conf"></div>
        </a>
        <a class="form-link " href="/Andon/#/formPhonesMails" target="" @click="updateForm()">
            <div class="logo-form"></div>
        </a>
        <div class="home-container">
            <!-- Modal -->
            <template v-if="showModal">
                <div class="modal-content">
                    <h2 class="h2modal">Internet Connection Lost</h2>
                    <p>Please refresh the page once the internet connection is restored.</p>
                    <button type="button" class="btn btn-primary" @click="refreshPage">Refresh</button>
                </div>
            </template>
            <!-- eslint-disable -->
            <template v-else v-for="(item, index) in tableauDeDonnees">
                <div v-if="item" class="poste-container" :class="{
                    'hidden': !item.isEnable,
                    'off': item.status === 'off',
                    'level1': item.status === 'level1',
                    'level2': item.status === 'level2',
                    'down': (index - hiddenCount) >= 5 || getVisibleCountBefore(index) >= 5
                }">
                    <h1 class="name">{{ item.name ? item.name : "Workstation " + index }}</h1>
                    <p v-if="item" class="timer" :class="{ 'off-timer': item.status === 'off' || !item.status }">{{
                        item.timer ? item.timer : "00h 00m 00s" }}</p>
                    <p class="count">{{ item.count ? item.count : "0" }}</p>
                </div>
            </template>
            <!-- eslint-enable -->
        </div>
    </div>
</template>
<style scoped>
.header-container {
    display: flex;
}

.home-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 87%;
    gap: 1vh 1vw;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.poste-container {
    width: 350px;
    height: 325px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid;
    padding: 10px;
    border-radius: 10px;
    border: 3px #BFBFBF;
    box-shadow: #808080 0px 3px 8px;
    border-radius: 40px 0 40px 0;
    flex: 0 0 19%;

}

.config-link {
    position: absolute;
    right: 50px;
    top: 15px;
}

.logo-conf {
    background-image: url('../../img/picto-parametre.png');
    background-size: cover;
    height: 40px;
    width: 40px;
    filter: invert(1) brightness(0.33);
}

.form-link {
    position: absolute;
    right: 125px;
    top: 15px;
}

.logo-form {
    background-image: url('../../img/envelope-solid.svg');
    background-size: cover;
    height: 40px;
    width: 40px;
    filter: invert(1) brightness(0.33);
}

.down {
    margin-bottom: 4vh
}

.back-img {
    position: relative;
    background-image: url('../../img/fond.svg');
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif !important;
    font-weight: 700 !important;
    color: #535353;
}

.hidden {
    display: none;
}

.timer {
    font-size: 35px;
    font-weight: bold;
}

.count {
    font-size: 20px;
    font-weight: bold;
}

.name {
    font-weight: bold;
    font-size: 35px;
}

.off {
    background-color: white;
}

.off-timer {
    color: white;
}

.level1 {
    background-color: #FCC916
}

.level2 {
    background-color: #f85d5d
}

.my-container {
    height: 150%;
    width: 300px;
    background-image: url('../../img/client/logo-client.png');
    background-size: contain;
    background-repeat: no-repeat;
}

.logo-container {
    height: 10%;
    position: absolute;
    top: 0;
    padding: 20px 0 0 30px;
}

.line-name {
    margin-top: 20px;
    font-weight: bold;
    font-size: 70px;
}

.modal-content {
    background-color: white;
    width: 50%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    box-shadow: #808080 0px 3px 8px;
    padding: 8px;
    text-align: center;
    font-size: 1.5vw;
}

.h2modal {
    font-size: 3vw;
}
</style>
<script>
var title;
var count;
var selectedOption;
var buttonStatus;
module.exports = {
    // test to git pull
    data() {
        this.$root.$on("data-form-name", (msg) => {
            title = msg
            uibuilder.send({ name: title })
        });
        this.$root.$on("data-form-count", (msg) => {
            count = msg
            uibuilder.send({ count: count })
        });
        this.$root.$on("data-form-selectedOption", (msg) => {
            selectedOption = msg
            uibuilder.send({ selectedOption: selectedOption })
        });
        this.$root.$on("data-form-buttonStatus", (msg) => {
            buttonStatus = msg
            uibuilder.send({ buttonStatus: buttonStatus })
        });
        return {
            title: title,
            timer2: "",
            selectedOption: selectedOption,
            count: count,
            buttonStatus: buttonStatus,
            tableauDeDonnees: [],
            lineName: "",
            status: "",
            selectedImage: null,
            hiddenCount: 0,
            onlineStatus: true,
            showModal: false,
        };
    },
    mounted() {
        this.updateHiddenCount();
        // this.checkInternet();
    },
    created() {
        uibuilder.onChange('msg', (msg) => {
            // console.log('data !!', msg.postes)
            this.tableauDeDonnees = msg.postes
            this.lineName = msg.lineName
            // this.checkInternet(msg.online);
        });
    },
    updated() {
        this.updateHiddenCount();
        // this.checkInternet();
    },
    watch: {
        onlineStatus: function (onlineStatus) {
            if (!onlineStatus) {
                this.showModal = true;
            } else {
                this.showModal = false;
            }
        },
    },

    methods: {
        updateForm() {
            uibuilder.send({
                'inject': false,
            })
        },
        refreshPage() {
            location.reload();
        },

        checkInternet(online) {
            if (online) {
                this.onlineStatus = true;
            } else {
                this.onlineStatus = false;
            }
        },

        updateHiddenCount() {
            let hiddenElements = this.$el.querySelectorAll('.hidden');
            this.hiddenCount = hiddenElements.length;
        },

        getVisibleCountBefore(index) {
            let listPostContainer = this.$el.querySelectorAll('.poste-container');
            let elementsBefore = 0;
            listPostContainer.forEach((element, i) => {
                if (i < index && !element.classList.contains('hidden')) {
                    elementsBefore++;
                }
            });
            return elementsBefore;
        },
    },
};
</script>
