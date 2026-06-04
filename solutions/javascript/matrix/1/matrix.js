//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(s) {
    // s = '1 2\n3 4';
    this.transform = [...s.split('\n')];
    // this._regEx = new RegExp(s);
    // this.rows = [...s.split('\n')];
  }

  get rows() {
    // console.log(this.transform); // ["1 2", "3 4"]
    let arrByRow = [];
    for (let i of this.transform) {
      const stringRow = i.split(' '); // ["1", "2"]
      let numberRow = [];
      for (let i of stringRow) {
        numberRow.push(Number(i)); 
      }
      arrByRow.push(numberRow);
    }
    return arrByRow;
  }

  get columns() {
    // this.transform = ["1 2", "3 4"];
    
    // let arrByRow = [];
    // for (let i of this.transform) {
    //   const stringRow = i.split(' '); // ["1", "2"]
    //   let numberRow = [];
    //   for (let i of stringRow) {
    //     numberRow.push(Number(i)); 
    //   }
    //   arrByRow.push(numberRow);
    // }  

    let arrByRow = this.rows;

    console.log("arrByRow", arrByRow);
    let arrByCol = [];
    for (let j = 0; j < arrByRow[0].length; j++) {
      let numberCol = [];
      for (let i = 0; i < arrByRow.length; i++) {
        numberCol.push(arrByRow[i][j]);
      }
      arrByCol.push(numberCol);
    }
    return arrByCol;
  }
}
