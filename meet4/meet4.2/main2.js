class CoffeeMachine {
    #temperature = 90;
  
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.#temperature = this.#defaultTemperature();
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this.#temperature;
    }
  
    #defaultTemperature() {
      return 90;
    }
  }
  /*
  Sejak JavaScript versi ES2022, kita dapat menggunakan tanda hashtag (#) untuk membuat hak akses private pada property dan method. Pada contoh di atas, kita menambahkan tanda hashtag di variable dan method yang bersifat private. Selain itu, kita mendeklarasikan property yang bersifat private di enclosing class seperti berikut.
   */