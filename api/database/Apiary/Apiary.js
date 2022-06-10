class Apiary {
  #name;
  #date;
  #apiaryNumber;

  constructor(name, date, apiaryNumber) {
    this.#name = name;
    this.#date = date;
    this.#apiaryNumber = apiaryNumber;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get date() {
    return this.#date;
  }

  set date(date) {
    this.#date = date;
  }

  get apiaryNumber() {
    return this.#apiaryNumber;
  }
  
  set apiaryNumber(apiaryNumber) {
    this.#apiaryNumber = apiaryNumber;
  }
}

export default Apiary;