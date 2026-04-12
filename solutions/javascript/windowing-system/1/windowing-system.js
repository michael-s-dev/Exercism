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
   let newWidth = size.width < 1 ? 1 : size.width
   let newHeight =  size.height < 1 ? 1 : size.height
   if( newWidth + this.position.x > this.screenSize.width ) newWidth = this.screenSize.width - this.position.x
   if( newHeight + this.position.y > this.screenSize.height) newHeight = this.screenSize.height - this.position.y
   this.size.resize(newWidth,newHeight)
  }
  move(position){
   let maximumX = this.screenSize.width - this.size.width
   let maximumY = this.screenSize.height - this.size.height
   let newX = position.x < 0 ? 0 : position.x
   let newY =  position.y < 0 ? 0 : position.y
   if( newX > maximumX ) newX = maximumX
   if( newY > maximumY) newY = maximumY
    
   this.position.move(newX,newY)
  }
}
export function changeWindow(programWindow){
  programWindow.size = new Size(400,300)
  programWindow.position = new Position(100,150)
  return programWindow
}