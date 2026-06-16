//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = sides;
  }

  get isEquilateral() {
    if ((this.a <= 0) || (this.b <= 0) || (this.c <= 0)) return false;
    if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.c + this.b < this.a)) return false;
    return (this.a === this.b) && (this.c === this.b);
  }

  get isIsosceles() {
    if ((this.a <= 0) || (this.b <= 0) || (this.c <= 0)) return false;
    if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.c + this.b < this.a)) return false;
    return (this.a === this.b) || (this.c === this.b) || (this.c === this.a);
  }

  get isScalene() {
    if ((this.a <= 0) || (this.b <= 0) || (this.c <= 0)) return false;
    if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.c + this.b < this.a)) return false;
    return (this.a !== this.b) && (this.c !== this.b) && (this.c !== this.a);
  }
}
