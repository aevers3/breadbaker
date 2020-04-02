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
                const waterPercent = this.formatPercent(this.water / this.flour);
                this.hydration = waterPercent + '%';
            },
            calcSalt: function () {
                this.saltContent = saltPercent + '%';
            }, 
            calcYeast: function () {
                const yeastPercent = this.formatPercent(this.yeast / this.flour);
                this.yeastContent = yeastPercent + '%';
            },
            formatPercent: function (decimal) {
                const percent = decimal * 100;
                const roundedNum = percent.toFixed(2);
                return roundedNum;
            }
        }
    })
}