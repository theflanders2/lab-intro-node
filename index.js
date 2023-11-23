class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // console.log(`array before: ${this.items}`)
    this.items.push(item);
    this.items.sort(function(a, b){return a - b});
    // console.log(`array after: ${this.items}`)
    // console.log(`array length before: ${this.length}`)
    this.length++;
    // console.log(`array length after: ${this.length}`)
  }

  get(pos) {
    if (pos <= this.length - 1){
      // console.log(`value at position ${pos}: ${this.items[pos]}`);
      return this.items[pos];
    }
    else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    let max = 0;

    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] > max) {
          max = this.items[i];
          // console.log(`current max: ${max}`)
        }
      }
      return max;
    }
  }

  min() {
    let min = 100;

    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] <= min) {
          min = this.items[i];
          // console.log(`current min: ${min}`)
        }
      }
      return min;
    }
  }

  sum() {
    let sum = 0;

    if (this.length === 0) {
      return 0;
    }
    else {
      for (let i = 0; i < this.length; i++) {
        sum += this.items[i];
      }
      // console.log(`sum: ${sum}`)
      return sum;
    }
  }

  avg() {
    if (this.length === 0) {
        throw new Error("EmptySortedList");
      }
      else {
        return this.sum() / this.length;
      }
  }
}

module.exports = SortedList;
