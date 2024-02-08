const FormPostes = httpVueLoader('./components/formPostes/formPostes.vue');

export default {
    routes: [
        {
            path:'/formPostes',
            name:'formPostes',
            component: FormPostes
        }
    ],
};