Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { name: '', no: '', email: '', password: '', address: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.name    = "";
            this.no           = "";
            this.data.email   = "";
            this.data.pass    = "";
            this.data.address = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        user: {}
    },
    methods: {
        getData: function (value) {
            this.user = {
                name     : value.name,
                no       : value.no,
                email    : value.email,
                pass     : value.pass,
                address  : value.address
            }
        }
    }
})
