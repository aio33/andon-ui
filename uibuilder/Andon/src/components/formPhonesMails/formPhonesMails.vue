<template>
    <div class="form-container">
        <a class="config-link " href="/Andon/#/home" target="">
            <div class="logo-home"></div>
        </a>
        <a class="postes-link " href="/Andon/#/formPostes" target="">
            <div class="logo-conf"></div>
        </a>

        <div class="phones-container">
            <div class="phones-form">
                <div class="colums-phones">
                    <!-- eslint-disable -->
                    <div class="phones-title">
                        <div class="logo-phone"></div>
                        <h3 class="title-main">PHONE LEVEL 1</h3>
                        <p class="title-note">(+33)</p>
                    </div>
                    <div v-for="num in phonesLvl1" class="phones-rows">
                        <input type="number" v-model="num.number">
                        <label class="switch">
                            <input type="checkbox" v-model="num.isEnable">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div class="colums-phones">
                    <div class="phones-title">
                        <div class="logo-phone"></div>
                        <h3 class="title-main">PHONE LEVEL 2</h3>
                        <p class="title-note">(+33)</p>
                    </div>
                    <div v-for="num in phonesLvl2" class="phones-rows">
                        <input type="number" v-model="num.number">
                        <label class="switch">
                            <input type="checkbox" v-model="num.isEnable">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div class="colums-phones">
                    <div class="mails-title">
                        <div class="logo-mails"></div>
                        <h3 class="title-main">MAILS</h3>
                    </div>
                    <div v-for="mail in mailsList" class="phones-rows">
                        <input type="text" v-model="mail.mail" placeholder="example@mail.com">
                        <label class="switch">
                            <input type="checkbox" v-model="mail.mailStatus">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="btn-phones">
                <button type="button" class="btn btn-primary" @click="sendPhonesMails()">SUBMIT</button>
            </div>
        </div>
        <div class="mail-settings-container">
            <div class="title-calendar">
                <div class="logo-calendar"></div>
                <h4>DAY AND TIME</h4>
                <h4>MAIL SENDING</h4>
            </div>
            <div class="day">
                <h5 class="day-time-title">DAY</h5>
                <select class="day-select" v-model="myday">
                    <option value=""></option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select>
            </div>
            <div class="time">
                <div class="flex-time-title">
                    <h5 class="day-time-title">HOUR</h5>
                    <p class="day-time-title">(HH:MM:SS)</p>
                </div>
                <input type="time" step="1" v-model="mytime">
            </div>

            <div class="btn-calendar">
                <button type="button" class="btn btn-primary" @click="sendSchedule()">SUBMIT</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.logo-home {
    background-image: url('../../img/house-solid.svg');
    background-size: cover;
    height: 40px;
    width: 45px;
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

.config-link {
    position: absolute;
    right: 50px;
    top: 15px;
}

.postes-link {
    position: absolute;
    right: 125px;
    top: 15px;
}

.form-container {
    background-image: url('../../img/fond.svg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    padding: 25px;
    padding-top: 8.5vh;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif !important;
    color: #535353;
}

.phones-container {
    box-shadow: 1px 1px 5px grey;
    background-color: white;
    border-radius: 20px 0px 20px 0px;
    padding: 20px;
    max-height: 40vw;
    overflow: auto;
}

.phones-form {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
}

.mail-settings-container {
    box-shadow: 1px 1px 5px grey;
    background-color: white;
    border-radius: 20px 0px 20px 0px;
    padding: 20px;
    max-height: 40vw;
    overflow: auto;
    margin-top: 4vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}


.flex-time-title {
    display: flex;
    justify-content: center;
}

.flex-time-title p {
    margin-left: 0.25vw;
}

.day-time-title {
    margin-bottom: 0;
    text-align: center;
}

.logo-conf {
    background-image: url('../../img/picto-parametre.png');
    background-size: cover;
    height: 40px;
    width: 40px;
}


.phones-title {
    display: flex;
    align-items: center;
    justify-content: center;
}

.mails-title {
    display: flex;
    align-items: center;
    margin-bottom: 1vh;
    margin-left: 25%;
}

.title-main {
    margin-top: 1vh;
    font-weight: bold;
}

.title-note {
    margin-top: 2.5vh;
    margin-left: 0.5vw;
}

.title-calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1vh;
}

.title-calendar h4 {
    font-weight: bold;
    font-size: 3vh;
    margin-bottom: 0;
}

.logo-phone {
    background-image: url('../../img/mobile-screen-button-solid.svg');
    background-size: contain;
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;
    filter: invert(1) brightness(0.33);
}

.logo-mails {
    background-image: url('../../img/envelope-regular.svg');
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 1vw;
    height: 40px;
    width: 40px;
    filter: invert(1) brightness(0.33);
}

.logo-calendar {
    background-image: url('../../img/calendar-days-regular.svg');
    background-size: contain;
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;
    filter: invert(1) brightness(0.33);
    margin-bottom: 2vh;
}

.phones-rows {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1vh;
}

.day {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.time {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.btn-calendar {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.btn-calendar button {
    width: 10vw;
    border-radius: 40px;
    font-size: 2vh;
}

.btn-phones {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 3vh;
}

.btn-phones button {
    width: 10vw;
    border-radius: 40px;
    font-size: 2vh;
    background-color: #2196F3;
}

.day-select {
    width: 100%;
    height: 50%;
    background-color: transparent;
    box-sizing: border-box;
    border: none;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-position: bottom 5px center;
    background-size: calc(100% - 10px) 1px;
    background-repeat: no-repeat;
    background-color: #fcfcfc;
    font-size: 3vh;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.6);
}

input[type=time] {
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    border: none;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-position: bottom 5px center;
    background-size: calc(100% - 10px) 1px;
    background-repeat: no-repeat;
    background-color: #fcfcfc;
    font-size: 3vh;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.6);
}

input[type=text] {
    width: 75%;
    box-sizing: border-box;
    border: none;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-position: bottom 5px center;
    background-size: calc(100% - 10px) 1px;
    background-repeat: no-repeat;
    background-color: #fcfcfc;
    font-size: 3vh;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.6);
}

input[type=number] {
    width: 75%;
    box-sizing: border-box;
    border: none;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-position: bottom 5px center;
    background-size: calc(100% - 10px) 1px;
    background-repeat: no-repeat;
    background-color: #fcfcfc;
    font-size: 3vh;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
}

input:focus::placeholder {
    color: transparent;
}

input::placeholder {
    color: rgba(0, 0, 0, 0.2);
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-top: 1vh;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>

<script>
module.exports = {
    data() {
        return {
            updateForm: false,
            phonesLvl1: [
                {
                    number: "",
                    isEnable: false,
                },
                {
                    number: "",
                    isEnable: false,
                },
                {
                    number: "",
                    isEnable: false,
                },
                {
                    number: "",
                    isEnable: false,
                }
            ],
            phonesLvl2: [
                {
                    number: "",
                    isEnable: false,
                },
                {
                    number: "",
                    isEnable: false,
                },
                {
                    number: "",
                    isEnable: false,
                },
                {
                    number: "",
                    isEnable: false,
                }
            ],
            mailsList: [
                {
                    mail: "",
                    mailStatus: false,
                },
                {
                    mail: "",
                    mailStatus: false,
                },
                {
                    mail: "",
                    mailStatus: false,
                },
                {
                    mail: "",
                    mailStatus: false,
                }
            ],
            myday: "",
            mytime: "",
        };
    },
    mounted() {
        uibuilder.onChange('msg', (msg) => {
            // Une seule update des données des formulaires au chargement de la page
            // console.log(msg)
            if (!this.updateForm) {
                if (msg.phonesList && msg.phonesList.phones_lvl1) {
                    msg.phonesList.phones_lvl1.forEach((phone, index) => {
                        if (phone && phone.number != null) {
                            this.phonesLvl1[index].number = phone.number
                        }
                        if (phone && phone.isEnable != null) {
                            this.phonesLvl1[index].isEnable = phone.isEnable
                        }
                    });
                }
                if (msg.phonesList && msg.phonesList.phones_lvl2) {
                    msg.phonesList.phones_lvl2.forEach((phone, index) => {
                        if (phone && phone.number != null) {
                            this.phonesLvl2[index].number = phone.number
                        }
                        if (phone && phone.isEnable != null) {
                            this.phonesLvl2[index].isEnable = phone.isEnable
                        }
                    });
                }
                if (msg.mailsList) {
                    msg.mailsList.forEach((mail, index) => {
                        if (mail && mail.mail != null) {
                            this.mailsList[index].mail = mail.mail
                        }
                        if (mail && mail.status != null) {
                            this.mailsList[index].mailStatus = mail.status
                        }
                    });
                }
                if (msg.myday) {
                    this.myday = msg.myday
                }
                if (msg.mytime) {
                    this.mytime = msg.mytime
                }
                this.updateForm = true
            }

        });
    },
    methods: {
        sendPhonesMails() {
            // Formatage des datas des téléphones pour node-red
            var phoneYellow = [null]
            var phoneRed = [null]
            this.phonesLvl1.forEach((phone, index) => {
                phoneYellow.push({
                    'number': phone.number,
                    'isEnable': phone.isEnable,
                })
            });
            this.phonesLvl2.forEach((phone, index) => {
                phoneRed.push({
                    'number': phone.number,
                    'isEnable': phone.isEnable,
                })
            });
            var phone = {
                'yellow': phoneYellow,
                'red': phoneRed,
            }

            // Envoi des données à node-red
            uibuilder.send({
                'topic': 'setGlobalPhonesMails',
                'payload': {
                    'phone': phone,
                    'mail1': this.mailsList[0].mail,
                    'mail2': this.mailsList[1].mail,
                    'mail3': this.mailsList[2].mail,
                    'mail4': this.mailsList[3].mail,
                    'mail1status': this.mailsList[0].mailStatus,
                    'mail2status': this.mailsList[1].mailStatus,
                    'mail3status': this.mailsList[2].mailStatus,
                    'mail4status': this.mailsList[3].mailStatus,
                }
            })
        },
        sendSchedule() {
            // Envoi des données à node-red
            // console.log(document.querySelector('.day-select').value)
            // console.log(document.querySelector('input[type=time]').value)
            uibuilder.send({
                'topic': 'setSchedule',
                'payload': {
                    'myday': document.querySelector('.day-select').value,
                    'mytime': document.querySelector('input[type=time]').value,
                }
            })
        }
    },
}
</script>
