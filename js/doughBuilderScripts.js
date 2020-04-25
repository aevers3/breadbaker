

window.onload = function () {

  Vue.component('flour-type', {
    props: {
      name: this.String,
      amount: this.Number
    },
    template: `<li>
                  <input class="m-2" 
                      placeholder="Flour Name" 
                      v-model="name"
                      value="name" />
                  <input class="m-2" 
                      placeholder="Flour Amount" 
                      type="number" 
                      v-model="amount" 
                       />
                </li>`  
  })

  const app = new Vue({
    el: '#app',
    data: {
      baseFlour: '',
      flourDisplay: '0',
      waterEntered: '70',
      waterDisplay: '0',
      saltEntered: '2',
      saltDisplay: '0',
      yeastEntered: '1',
      yeastDisplay: '0',
      flourIsEntered: true,
      flourSubmitClicked: false,
      addInFlours: [
        { name: "" },
      ]
    },
    methods: {
      submitFlourAmount: function () {
        // test for user input - if none, return false.
        if (this.baseFlour.length > 0) {
          this.flourDisplay = this.baseFlour;
          this.flourIsEntered = true;
          this.resubmitIngredients();
        } else {
          return false;
        }
      },
      submitWater: function () {
        const percent = this.waterEntered / 100;
        const hydration = Math.round(percent * this.baseFlour);
        this.waterDisplay = hydration;
      },
      submitSalt: function () {
        const percent = this.saltEntered / 100;
        const saltContent = Math.round(percent * this.baseFlour);
        this.saltDisplay = saltContent;
      },
      submitYeast: function () {
        const percent = this.yeastEntered / 100;
        const yeastContent = Math.round(percent * this.baseFlour);
        this.yeastDisplay = yeastContent;
      },
      addNewFlour: function () {
        console.log(this.addInFlours[0].name);
        this.addInFlours.push({ name: 'I have been added!' });
        console.log(this.addInFlours)
      },
      submitFlourBlend: function () {
        console.log('hi');
      },
      resubmitIngredients: function () {
        // Recalculate other ingredients
        if (this.flourSubmitClicked) {
          this.submitWater();
          this.submitSalt();
        } else {
          this.flourSubmitClicked = true;
        }
      }
    }
  })
}