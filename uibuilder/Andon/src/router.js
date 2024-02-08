const Home = httpVueLoader('./components/home/home.vue');
const FormPostes = httpVueLoader('./components/formPostes/formPostes.vue');
const formPhonesMails = httpVueLoader('./components/formPhonesMails/formPhonesMails.vue');
const Chart = httpVueLoader('./components/chart/chart.vue');
const Table = httpVueLoader('./components/table/table.vue');
const Header = httpVueLoader('./components/header/myheader.vue');


export default {
    routes: [
        {
            path:'/formPostes',
            name:'formPostes',
            component: FormPostes
        },
        {
            path:'/formPhonesMails',
            name:'formPhonesMails',
            component: formPhonesMails
        },
        {
            path:'/home',
            name:'Home',
            component: Home
        },
        {
            path:'/chart',
            name:'Chart',
            component: Chart
        },
        {
            path:'/table',
            name:'table',
            component: Table
        },
        {
            path:'/header',
            name:'header',
            component: Header
        }
    ],
};