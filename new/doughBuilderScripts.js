new Vue({
    el: '#app',
    data: {
        baseFlour: '',
        waterEntered: '',
        saltEntered: '',
        yeastEntered: '',
    },
    computed: {
        flourIsEntered: function() {
            return this.baseFlour.length > 0;
        },
        waterPercent: function() {
            return this.percentify(this.waterEntered) + '% Hydration';
        },
        waterAndFlour: function() {
            return this.checkForDisplay(this.waterEntered);
        },
        saltPercent: function() {
            return this.percentify(this.saltEntered) + '% Salt';
        },
        saltAndFlour: function() {
            return this.checkForDisplay(this.saltEntered);
        },
        yeastPercent: function() {
            return this.percentify(this.yeastEntered) + '% Yeast';
        },
        yeastAndFlour: function() {
            return this.checkForDisplay(this.yeastEntered);
        },       
    },
    methods: {
        percentify: function(value) {
            const decimal = parseInt(value) / parseInt(this.baseFlour) * 100;
            return decimal.toFixed(2)
        },
        checkForDisplay: function(ingredient) {
            return this.baseFlour.length > 0 && ingredient.length > 0;
        },
        ingredientDisplay: function(amount, ingredient) {
            return `${amount}g ${ingredient}`
        }
    }
})