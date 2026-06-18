//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = sides;
  }

  get isEquilateral() {
    console.log(this);
    return !((this.a <= 0) || (this.b <= 0) || (this.c <= 0)) &&
      !((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.c + this.b < this.a)) &&
      ((this.a === this.b) && (this.c === this.b));
  }

  get isIsosceles() {
    return !((this.a <= 0) || (this.b <= 0) || (this.c <= 0)) &&
      !((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.c + this.b < this.a)) &&
      ((this.a === this.b) || (this.c === this.b) || (this.c === this.a));
  }

  get isScalene() {
    return !((this.a <= 0) || (this.b <= 0) || (this.c <= 0)) &&
      !((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.c + this.b < this.a)) &&
      ((this.a !== this.b) && (this.c !== this.b) && (this.c !== this.a));
  }
}
