// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

// =========================================== //
export function Size(width=80,height=60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

// =========================================== //
export function Position(x=0, y=0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

// =========================================== //
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  } 
  resize(newSize) {
    // let reWidth = newSize.width;
    // let reHeight = newSize.height;
    
    // if (reWidth < 1) {reWidth = 1}
    // if (reWidth > 400) {reWidth = 400}
    // if (reHeight < 1) {reHeight = 1}
    // if (reHeight > 300) {reHeight = 300}

    // this.size.resize(reWidth, reHeight);

    const maxW = (this.screenSize.width - this.position.x);
    const maxH = (this.screenSize.height - this.position.y);

    const newW = Math.max(1, (Math.min(newSize.width, maxW)));
    const newH = Math.max(1, (Math.min(newSize.height, maxH)));

    this.size.resize(newW, newH);
  }
  move(newPosition) {
    // console.log(newPosition);
    console.log(this);
    
    const maxX = (this.screenSize.width - this.size.width);
    const maxY = (this.screenSize.height - this.size.height);

    const newX = Math.max(0,(Math.min(newPosition.x, maxX)));
    const newY = Math.max(0,(Math.min(newPosition.y, maxY)));

    this.position.move(newX, newY);
  }
}

// =========================================== //
export function changeWindow(programWindow) {
  console.log(programWindow);
  const newSize = new Size(400,300);
  const newPosition = new Position(100,150);
  programWindow.resize(newSize);
  programWindow.move(newPosition);
  return programWindow;
};
