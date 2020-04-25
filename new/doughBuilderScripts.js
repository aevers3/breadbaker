new Vue({
    el: '#app',
    data: {
        baseFlour: '',
        waterEntered: '',
        saltEntered: '',
        yeastEntered: ''
    },
    computed: {
        flourDisplay: function() {
            return this.baseFlour + 'g Flour';
        },
        flourIsEntered: function() {
            return this.baseFlour.length > 0;
        },
        waterDisplay: function() {
            return this.waterEntered + 'g Water';
        },
        waterPercent: function() {
            const decimal = parseInt(this.waterEntered) / parseInt(this.baseFlour) * 100;
            return decimal.toFixed(2) + '% Hydration';
        },
        waterAndFlour: function() {
            return this.baseFlour.length > 0 && this.waterEntered.length > 0;
        },
        saltDisplay: function() {
            return this.saltEntered + 'g Salt';
        },
        saltPercent: function() {
            const decimal = parseInt(this.saltEntered) / parseInt(this.baseFlour) * 100;
            return decimal.toFixed(2) + '% Salt';
        },
        saltandFlour: function() {
            return this.baseFlour.length > 0 && this.saltEntered.length > 0;
        },
        yeastDisplay: function() {
            return this.yeastEntered + 'g Yeast';
        },
        yeastPercent: function() {
            const decimal = parseInt(this.waterEntered) / parseInt(this.baseFlour) * 100;
            return decimal.toFixed(2) + '% Yeast'
        }
    }
})