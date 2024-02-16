<template>
    <div class="form-container">
        <div class="header-form">
            <div id="alert-btn">
                <b-alert show variant="success">Press the button to assign it</b-alert>
            </div>
            <div id="alert-success">
                <b-alert show variant="success">Button assigned successfully </b-alert>
            </div>
            <div id="alert-delete">
                <b-alert show variant="success">Bouton delete succefully </b-alert>
            </div>
            <div id="alert-andon">
                <b-alert show variant="danger">Andon in progress</b-alert>
            </div>
            <div id="alert-assigne">
                <b-alert show variant="danger">{{ assignedMessage }}</b-alert>
            </div>
            <div id="alert-success-off">
                <b-alert show variant="success">Bouton stop succefully</b-alert>
            </div>
        </div>

        <div class="d-flex justify-content-between mb-3">
            <div class="lineName-container">
                <h1>LINE NAME</h1>
                <input type="text" class="form-control" v-model="lineName" :placeholder="lineName">
                <div class="submit-container">
                    <button class="btn btn-primary" @click="sendLineName()">SUBMIT</button>
                </div>
            </div>
            <div class="lineName-container">
                <h1>TAKT TIME</h1>
                <input type="number" class="form-control" required min="0" value="0" step=".01" v-model="takTime"
                    :disabled="shouldDisableTakTime">
                <div class="submit-container">
                    <button class="btn btn-primary" @click="sendTakTime()" :disabled="shouldDisableTakTime">SUBMIT</button>
                </div>
            </div>
            <div class="lineName-container ">
                <h1>REBOOT</h1>
                <button class="logo-reboot mt-2" @click="reboot()"></button>
            </div>
        </div>
        <div class="postes-container">
            <div class="form-title row">
                <h1 class="col col-border">NAME</h1>
                <h1 class="col">BUTTON</h1>
                <h1 class="col">CONTROL</h1>
            </div>
            <!-- eslint-disable -->
            <template v-for="(poste, index)  in postes">
                <div class="row">
                    <div class="col col-flex col-border">
                        <b-form-input v-model="postes[index].name" id="nested-name"></b-form-input>
                    </div>
                    <div class="col">
                        <button class="btn btn-primary poste-btn" @click="sendLearnStatus(index)"
                            :disabled="shouldDisableLearnButton(index)">
                            LEARN</button>
                        <button class="btn btn-primary poste-btn" @click="sendDelStatus(index)"
                            :disabled="shouldDisableDelButton(index)" variant="outline-danger">DEL</button>
                    </div>
                    <div class="col">
                        <label class="switch">
                            <input type="checkbox" :checked="isCheckboxChecked(index)" @click="sendControlCmd(index)"
                                :disabled="shouldDisableControlButton(index)">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </template>
            <div class="row">
                <div class="col col-flex col-border"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col">
                    <div class="submit-container">
                        <button class="btn btn-primary" @click="sendPostes()">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="lineName-container custom-width">
            <h1>Send Excel</h1>
            <b-form-input id="mail" v-model="mail" :placeholder="mail"></b-form-input>
            <div class="submit-container">
                <button class="btn btn-primary" @click="sendExcel()">SUBMIT</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.custom-width {
    max-width: fit-content;
    margin-inline: auto;
}

.header-form {
    height: 8.5vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
}

.header-form div {
    max-width: 85vw;
}

.form-container {
    background-image: url('../../img/fond.svg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    padding: 0px 70px 110px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif !important;
    color: #535353;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.submit-btn {
    border-radius: 30px;
    padding: 0px;
    font-size: 2vh;
    height: 3.5vh;
    width: 6vw;
}

.postes-container {
    box-shadow: 1px 1px 5px grey;
    background-color: white;
    border-radius: 20px 0px 20px 0px;
    padding: 20px;
    max-height: 69vh;

}

.lineName-container {
    box-shadow: 1px 1px 5px grey;
    background-color: white;
    border-radius: 20px 0px 20px 0px;
    min-width: 30vw;
    padding: 20px;
    text-align: center;
}

.lineName-container input {
    box-sizing: border-box;
    border: none;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-position: bottom 5px center;
    background-size: calc(100% - 10px) 1px;
    background-repeat: no-repeat;
    background-color: #fcfcfc;
    font-size: 2.5vh;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.6);
}

#nested-name {
    box-sizing: border-box;
    border: none;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-position: bottom 5px center;
    background-size: calc(100% - 10px) 1px;
    background-repeat: no-repeat;
    background-color: #fcfcfc;
    font-size: 2.5vh;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.6);
}

.submit-container {
    margin-top: 10px;
    display: flex;
    justify-content: end;
}

.mt-0 {
    margin-top: 0px;
}

.submit-container button {
    border-radius: 30px;
    padding: 0;
    font-size: 2vh;
    height: 3.5vh;
    width: 6vw;

}

.lineName-container h1 {
    font-size: 3vh;
}

.form-title h1 {
    font-size: 3vh;
}

.logo-reboot {
    background-image: url('../../img/circle-reboot.svg');
    background-size: cover;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    transform: rotate(45deg);
}

.col {
    text-align: center;
}

.col-flex {
    display: flex;
    justify-content: center;
}

.col-border {
    margin-left: 1vw;
    padding-right: 5vw;
}

.enable {
    background-image: url('../../img/eye-solid.svg');
    background-size: contain;
    width: 3.5vh;
    height: 3.5vh;
    background-color: transparent;
    border: none;
    background-repeat: no-repeat;
    margin-top: 1.5vh;
}

.disable {
    background-image: url('../../img/eye-slash-solid.svg');
    background-size: contain;
    width: 3.5vh;
    height: 3.5vh;
    background-color: transparent;
    border: none;
    background-repeat: no-repeat;
    margin-top: 1.5vh;
}

.forms-container {
    height: 70vh;
}

.poste-btn {
    height: 3.5vh;
    width: 7vw;
    border-radius: 40px;
    font-size: 2vh;
    background-color: #2196F3;
    padding: 0px;
    margin-top: 1.5vh;
}

.switch {
    position: relative;
    display: inline-block;
    width: 4vw;
    height: 3vh;
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
    height: 2.5vh;
    width: 2.5vh;
    left: 0.3vw;
    bottom: 0.3vh;
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
    -webkit-transform: translateX(2vw);
    -ms-transform: translateX(2vw);
    transform: translateX(2vw);
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
            postes: [
                {
                    name: "",
                    count: 0,
                    isLearning: false,
                    isDeleting: false,
                    id: ""
                }
            ],
            updateForm: false,
            selectedLearnIndex: null,
            areDelButtonsDisable: false,
            assignedMessage: null,
            lineName: "",
            takTime: 0,
            mustDisable: false,
            mail: ""
        };
    },
    mounted() {
        var alertBtn = document.getElementById('alert-btn')
        alertBtn.style.display = "none"
        var alertSuccess = document.getElementById('alert-success')
        alertSuccess.style.display = "none"
        var alertDelete = document.getElementById('alert-delete')
        alertDelete.style.display = "none"
        var alertAssigne = document.getElementById('alert-assigne')
        alertAssigne.style.display = "none"
        var alertAndon = document.getElementById('alert-andon')
        alertAndon.style.display = "none"
        var alertOff = document.getElementById('alert-success-off')
        alertOff.style.display = "none"


        uibuilder.onChange('msg', (msg) => {
            if (!this.updateForm) {
                this.postes = msg.postes.filter(item => item !== null);
                console.log(this.postes)
                this.lineName = msg.lineName;
                this.takTime = msg.takTime
                this.updateForm = true
            }
            for (let index = 0; index < this.postes.length; index++) {
                this.postes[index].status = msg.postes[index].status
                this.postes[index].id = msg.postes[index].id
                this.postes[index].isLearning = msg.postes[index].isLearning
                //this.postes[index].isEnable = msg.postes[index].isEnable
            }
            switch (msg.modal) {
                case 'appuiBtn':
                    alertBtn.style.display = "block"
                    break;
                case 'success':
                    alertBtn.style.display = "none"
                    alertSuccess.style.display = "block"
                    setTimeout(async () => {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        alertSuccess.style.display = "none";
                    }, 0);
                    if (this.selectedLearnIndex !== null) {
                        console.log('success', this.selectedLearnIndex)
                        this.postes[this.selectedLearnIndex].isLearning = false;
                        this.selectedLearnIndex = null;
                    } else {
                        console.log('andon - this.selectedLearnIndex is null');
                    }
                    this.areDelButtonsDisable = false
                    break;
                case 'andon':
                    alertBtn.style.display = "none"
                    alertAndon.style.display = "block"
                    setTimeout(async () => {
                        await new Promise(resolve => setTimeout(resolve, 4000));
                        alertAndon.style.display = "none";
                    }, 0);
                    if (this.selectedLearnIndex !== null) {
                        console.log('andon', this.selectedLearnIndex);
                        this.postes[this.selectedLearnIndex].isLearning = false;
                        this.selectedLearnIndex = null;
                    } else {
                        console.log('andon - this.selectedLearnIndex is null');
                    }
                    this.areDelButtonsDisable = false
                    break;
                case 'delete':
                    alertBtn.style.display = "none"
                    alertDelete.style.display = "block"
                    setTimeout(async () => {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        alertDelete.style.display = "none";
                    }, 0);
                    break
                case 'error-andon-assigned':
                    alertBtn.style.display = "none"
                    alertAssigne.style.display = "block"
                    this.assignedMessage = msg.payload
                    setTimeout(async () => {
                        await new Promise(resolve => setTimeout(resolve, 4000));
                        alertAssigne.style.display = "none";
                    }, 0);
                    if (this.selectedLearnIndex !== null) {
                        console.log('error-andon-assigned', this.postes[this.selectedLearnIndex])
                        this.postes[this.selectedLearnIndex].isLearning = false
                        this.selectedLearnIndex = null;
                    } else {
                        console.log('error-andon-assigned - this.selectedLearnIndex is null');
                    }
                    this.areDelButtonsDisable = false
                    break
                case 'alert-success-off':
                    alertOff.style.display = "block"
                    setTimeout(async () => {
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        alertOff.style.display = "none";
                    }, 0);
                default:
            }
        });
    },
    computed: {
        shouldDisableTakTime() {
            this.mustDisable = false
            this.postes.forEach(poste => {
                if (poste.status === "level1" || poste.status === "level2") {
                    this.mustDisable = true
                }
            });
            return this.mustDisable
        }
    },
    methods: {
        shouldDisableLearnButton(index) {
            return this.selectedLearnIndex !== null && this.selectedLearnIndex !== index 
        },
        shouldDisableControlButton(index) {
            return this.postes[index].isEnable === false || this.postes[index].id == undefined || this.postes[index].isLearning
        },

        shouldDisableDelButton() {
            return this.areDelButtonsDisable
        },
        sendLearnStatus(index) {
            this.selectedLearnIndex = index
            console.log("sendLearnStatus", this.postes[index])
            this.postes[index].isLearning = true
            this.areDelButtonsDisable = true
            uibuilder.send({
                'topic': 'lrn-' + index,
            })
        },
        sendDelStatus(index) {
            this.postes[index].isDeleting = !this.postes[index].isDeleting;
            setTimeout(() => {
                this.postes[index].isDeleting = !this.postes[index].isDeleting;
            }, 2000);
            uibuilder.send({
                'topic': 'del-' + index,
            })
        },
        sendControlCmd(index) {
            console.log('before if 1', this.postes[index])

            if (this.postes[index].status == "off" && this.postes[index].isEnable) {
                uibuilder.send({
                    'topic': 'on-' + index,
                })
            } else {
                uibuilder.send({
                    'topic': 'off-' + index,
                })
            }
        },
        sendLineName() {
            uibuilder.send({
                'topic': 'setLineName',
                'payload': {
                    'lineName': this.lineName
                }
            })
        },
        sendTakTime() {
            uibuilder.send({
                'topic': 'setTakTime',
                'payload': {
                    'takTime': parseFloat(this.takTime)
                }
            })
        },
        reboot() {
            uibuilder.send({
                'topic': 'reboot'
            })
        },
        sendPostes() {
            uibuilder.send({
                'topic': 'updatePostes',
                'payload': {
                    'postes': this.postes,
                    'lineName': this.lineName,
                    'takTime': parseFloat(this.takTime)
                }
            })
        },

        isCheckboxChecked(index) {
            var status = this.postes[index].status;
            return status === 'level1' || status === 'level2';
        },
        sendExcel() {
            console.log(this.mail)
            uibuilder.send({
                'topic': 'sendExcel',
                'payload': {
                    'mail': this.mail
                }
            })
        }
    },

}
</script>
