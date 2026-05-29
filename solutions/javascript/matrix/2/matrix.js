//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(s) {
    this.matrix = s.split('\n')
      .map(e => ( e.split(' ')
        .map( e => Number(e) ) )
      )
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map(
      (_, colIndex) => this.matrix.map(row => row[colIndex])
    )
  }
}
