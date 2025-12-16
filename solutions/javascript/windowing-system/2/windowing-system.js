// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width=80,height=60){
  this.width = width
  this.height = height
}

Size.prototype.resize = function(width,height){
  this.width = width
  this.height = height
}

export function Position(x=0,y=0){
  this.x = x
  this.y = y 
}

Position.prototype.move = function(x,y){
  this.x = x
  this.y = y
}
export class ProgramWindow{
  constructor(){ 
    this.screenSize = new Size(800,600) 
    this.size = new Size()
    this.position = new Position()
  }
  resize(size){
   let maxWidth = this.screenSize.width - this.position.x
   let maxHeight = this.screenSize.height - this.position.y
   let newWidth = size.width < 1 ? 1 : Math.min(size.width,maxWidth)
   let newHeight =  size.height < 1 ? 1 :  Math.min(size.height,maxHeight)
   this.size.resize(newWidth,newHeight)
  }
  move(position){
   let maximumX = this.screenSize.width - this.size.width
   let maximumY = this.screenSize.height - this.size.height
   let newX = position.x < 0 ? 0 : Math.min(position.x, maximumX)
   let newY =  position.y < 0 ? 0 : Math.min(position.y, maximumY)
   this.position.move(newX,newY)
  }
}
export function changeWindow(programWindow){
  programWindow.resize( new Size(400,300) )
  programWindow.move( new Position(100,150))
  return programWindow
}