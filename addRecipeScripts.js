window.onload = function () {
    const app = new Vue({
        el: '#app',
        data: {
            flour: '',
            water: '',
            hydration: '',
            salt: '',
            saltContent: '',
            yeast: '',
            yeastContent: ''
        },
        methods: {
            calcHydration: function() {
                this.hydration = 'Hydration: ' + (this.water / this.flour);
            },
            calcSalt: function () {
                this.saltContent = 'Salt content:' + (this.salt / this.flour);
            }, 
            calcYeast: function () {
                this.yeastContent = 'Yeast content:' + (this.yeast / this.flour);
            }
        }
    })
}