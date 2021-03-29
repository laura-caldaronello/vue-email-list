var app = new Vue({
    el: '#root',
    data: {
        list: []
    },
    methods: {},
    mounted() {

        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((got) => {
                    this.list.push(got.data.response);
            });
        };
        console.log(this.list);
    }
});
Vue.config.devtools = true;
