import { makeAutoObservable } from "mobx";
import { firebase } from "../common/firebase";

export class CarsStore {
  cars = [];
  filteredCars = [];
  carDetails = null;
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
    this.loadCars();
  }

  sortCars() {
    this.filteredCars = this.filteredCars.sort((a, b) =>
      a.model > b.model ? 1 : b.model > a.model ? -1 : 0
    );
  }

  filterCars(filter) {
    const result = this.cars.filter((car) =>
      car.brand.toUpperCase().includes(filter.toUpperCase())
    );
    console.log(`result`, result);
    this.filteredCars = result;
  }

  loadCars() {
    firebase
      .database()
      .ref("cars")
      .on("value", (snapshot) => {
        let result = [];
        console.log("1");
        snapshot.forEach((child) => {
          result.push({ ...child.val(), key: child.key });
        });
        console.log(result);
        this.cars = [...result];
        this.filterCars("");
        this.isLoading = false;
      });
  }

  getDetails(id) {
    firebase
      .database()
      .ref("cars")
      .child(id)
      .once("value", (snapshot) => {
        console.log(`snapshot.val()`, snapshot.val());
        this.carDetails = snapshot.val();
      });
  }

  add(values) {
    const id = firebase.database().ref("cars").push().key;
    this.update(id, values);
  }

  update(id, values) {
    firebase
      .database()
      .ref("cars")
      .update({ [id]: { ...values } });
  }

  delete = (id) => {
    firebase.database().ref("cars").child(id).remove();
  };
}
