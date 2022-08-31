const barista = {
  nameCoffes: {
    espresso: 5,
    Americano: 5,
    iceLatte: 5,
    cappuccino: 5,
    coffeeWithMilk: 5,
  },
  syrups: {
    caramel: 1,
    Vanilla: 3,
    Almond: 2,
    chocolate: 1,
    SaltedCaramel: 3,
  },
  status() {
    if (this.nameCoffes.espresso <= 0) {
      console.log("Простите у нас нету в наличии экспрессо");
    }
    if (this.nameCoffes.Americano <= 0) {
      console.log("Простите у нас нету в наличии Американо");
    }
    if (this.nameCoffes.iceLatte <= 0) {
      console.log("Простите у нас нету в наличии Айс-латте");
    }
    if (this.nameCoffes.cappuccino <= 0) {
      console.log("Простите у нас нету в наличии капучино");
    }
    if (this.nameCoffes.coffeeWithMilk <= 0) {
      console.log("Простите у нас нету в наличии кофе с молоком");
    }
    if (this.syrups.caramel <= 0) {
      console.log("нам еще не завезли сироп из карамеля");
    }
    if (this.syrups.Vanilla <= 0) {
      console.log("нам еще не завезли сироп из ваниля");
    }
    if (this.syrups.Almond <= 0) {
      console.log("нам еще не завезли сироп из миндаля");
    }
    if (this.syrups.chocolate <= 0) {
      console.log("нам еще не завезли сироп из шоколада");
    }
    if (this.syrups.SaltedCaramel <= 0) {
      console.log("нам еще не завезли сироп из соленего карамеля");
    }
  },
  orderEspresso() {
    if (this.nameCoffes.espresso > 0) {
      this.nameCoffes.espresso--;
      console.log("... Ваш коффе Экспрессо готов");
    }
  },
  orderAmericano() {
    if (this.nameCoffes.Americano > 0) {
      this.nameCoffes.Americano--;
      console.log("... Ваш коффе Американо готов");
    }
  },
  orderIceLatte() {
    if (this.nameCoffes.iceLatte > 0) {
      this.nameCoffes.iceLatte--;
      console.log("... Ваш коффе Айс-латте готов");
    }
  },
  orderCappucсino() {
    if (this.nameCoffes.cappuccino > 0) {
      this.nameCoffes.cappuccino--;
      console.log("... Ваш коффе Капучино готов");
    }
  },
  orderCoffeWithMilk(){
    if(this.nameCoffes.coffeeWithMilk > 0){
        this.nameCoffes.coffeeWithMilk--
        confirm.log('... Ваш коффе c Молоком готов')
    }
  },
  orderEspressoWithCaramel() {
    if (this.nameCoffes.espresso > 0 && this.syrups.caramel > 0) {
      this.nameCoffes.espresso--;
      this.syrups.caramel--
      console.log("... Ваш коффе Экспрессо с  карамелем готов");
    }
  },
  orderAmericanoWithVanilla() {
    if (this.nameCoffes.Americano > 0 && this.syrups.Vanilla > 0) {
      this.nameCoffes.Americano--;
      this.syrups.Vanilla--
      console.log("... Ваш коффе Американо с ванилью готов");
    }
  },
  orderIceLatteWithAlmond() {
    if (this.nameCoffes.iceLatte > 0 && this.syrups.Almond > 0) {
      this.nameCoffes.iceLatte--;
      this.syrups.Almond--
      console.log("... Ваш коффе Айс-латте с миндалью готов");
    }
  },
  orderCappucсinoWithChocolate() {
    if (this.nameCoffes.cappuccino > 0 && this.syrups.chocolate > 0) {
      this.nameCoffes.cappuccino--;
      this.syrups.chocolate--
      console.log("... Ваш коффе Капучино с шоколадом готов");
    }
  },
  orderCoffeWithMilkWithSaltAlmond(){
    if(this.nameCoffes.coffeeWithMilk > 0 && this.syrups.SaltedCaramel > 0){
        this.nameCoffes.coffeeWithMilk--
        this.syrups.SaltedCaramel--
        confirm.log('... Ваш коффе c Молоком из соленой миндали готов')
    }
  },
};
barista.orderAmericanoWithVanilla()
barista.orderEspresso()
barista.orderIceLatteWithAlmond()
barista.orderIceLatteWithAlmond()
barista.orderIceLatteWithAlmond()
barista.orderIceLatteWithAlmond()
barista.orderIceLatteWithAlmond()
barista.orderIceLatteWithAlmond()
barista.status()
