'use strict'

import routeur from './router.js'
// eslint-disable-next-line no-unused-vars

const app1 = new Vue({
    el: '#app',
    components: {

    },
    data() {
        return {};
    },
    computed: {
    },
    methods: {
    },
    mounted: function () {
        this.$router.push('/formPostes');
        uibuilder.start()
        var vueApp = this
        uibuilder.onChange('msg', function (msg) {
            //console.log("msg to nr => ", msg)
        });
    },
    router: new VueRouter(routeur),
})
