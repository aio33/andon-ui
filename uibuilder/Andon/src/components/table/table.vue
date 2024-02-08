<template>
    <b-container fluid>
        <b-row align-h="center">
            <b-col style="margin-top:5%;">
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="tb-display"
                    style="float:right;">
                </b-pagination>
                <b-table id="tb-display" striped hover small :items="items" :per-page="perPage" :fields="fields"
                    :current-page="currentPage">
                    <template #cell(Selected)="curRow">
                        <b-form-checkbox style="float:center;" v-model="curRow.item.Selected"></b-form-checkbox>
                    </template>
                </b-table>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <input type="submit" style="float:right;" class="btn btn-info" @click="displaylog()">
            </b-col>
        </b-row>
    </b-container>
</template>
<style scoped></style>
<script>
module.exports = {
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            items: [
                { Selected: false, id: 1, age: 40, code: 'Emp1', name: 'Yeva Adrián', remarks: 'Lorem ipsum dolor sit amet,' },
                { Selected: false, id: 2, age: 21, code: 'Emp2', name: 'Graysen Mirabelle', remarks: 'Lorem ipsum dolor sit amet,' },
            ],
            fields: [
                {
                    key: 'Selected',
                    label: 'Selected',
                    thClass: 'text-center',
                    tdClass: 'text-center'
                },
                {
                    key: 'id',
                    label: 'ID',
                    thClass: 'text-center',
                    tdClass: 'text-center'
                },
                {
                    key: 'age',
                    label: 'Age',
                    thClass: 'text-center',
                    tdClass: 'text-center'
                },
                {
                    key: 'code',
                    label: 'Code',
                    thClass: 'text-center',
                    tdClass: 'text-center'
                },
                {
                    key: 'name',
                    label: 'Name',
                    thClass: 'text-center',
                    tdClass: 'text-center'
                },
                {
                    key: 'remarks',
                    label: 'Remarks',
                    thClass: 'text-center',
                    tdClass: 'text-center'
                }
            ],
        };
    },
    computed: {
        rows() {
            return this.items.length
        },
        getitems() {
            return this.items;
        }
    },
    mounted() {
    },
    methods: {
        displaylog() {
            console.log(this.items[0].Selected);
        },
    },
}
</script>
