

window.onload = function () {


  
  const app = new Vue({
    el: '#app',
    data: {
      flourEntered: '',
      flourDisplay: '0',
      waterEntered: '70',
      waterDisplay: '0',
      saltEntered: '2',
      saltDisplay: '0',
      yeastEntered: '1',
      yeastDisplay: '0',
      flourIsEntered: true,
      flourSubmitClicked: false
    },
    methods: {
      submitFlour: function () {
        // test for user input - if none, return false.
        if (this.flourEntered.length > 0) {
          this.flourDisplay = this.flourEntered;
          this.flourIsEntered = true;
          // Recalculate other ingredients
          if (this.flourSubmitClicked) {  
            this.submitWater();
            this.submitSalt();
          } else {
            this.flourSubmitClicked = true;
          }
        } else {
          return false;
        }
      },
      submitWater: function () {
        const percent = this.waterEntered / 100;
        const hydration = Math.round(percent * this.flourEntered);
        this.waterDisplay = hydration;
      },
      submitSalt: function () {
        const percent = this.saltEntered / 100;
        const saltContent = Math.round(percent * this.flourEntered);
        this.saltDisplay = saltContent;
      },
      submitYeast: function () {
        const percent = this.yeastEntered / 100;
        const yeastContent = Math.round(percent * this.flourEntered);
        this.yeastDisplay = yeastContent;
      },
    }
  })
}