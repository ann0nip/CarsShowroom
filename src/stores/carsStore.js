import { observable, toJS, makeObservable, action } from "mobx";
import { db } from "../common/firebase";

class CarsStore {
  cars = [];
  constructor() {
    makeObservable(this, {
      cars: observable,
      add: action,
    });
    db.cars.on("value", (snapshot) => {
      this.cars = snapshot.val();
    });
  }

  get json() {
    return toJS(this.cars);
  }

  add = (name) => {
    const id = db.cars.push().key;
    this.update(id, name);
  };

  update = (id, name) => {
    db.cars.update({ [id]: { name } });
  };

  delete = (id) => {
    db.cars.child(id).remove();
  };

  deco;
}
 
export const carsStore = new CarsStore();
