
let vertexShader = `
attribute vec4 a_Position;
void main(){
  gl_Position =  a_Position;
  gl_PointSize = 10.0;
}`;

var fragmentShader = `
precision mediump float;
void main(){
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;


window.onload = function(){
  let canvas = document.getElementById('canvas');
  let gl;
  // catch the error from creating the context since this has nothing to do with the code
  try{
    gl = middUtils.initializeGL(canvas);
  } catch (e){
    alert('Could not create WebGL context');
    return;
  }

  // don't catch this error since any problem here is a programmer error
  let program = middUtils.initializeProgram(gl, vertexShader, fragmentShader);

  // grab a reference to the position attribute
  var a_Position = gl.getAttribLocation(program, "a_Position");


  // set the background or clear color
  gl.clearColor(1.0, 1.0, 1.0, 1.0);



  // clear the context for new content
  gl.clear(gl.COLOR_BUFFER_BIT);

  // set the position
  gl.vertexAttrib2f(a_Position,0.0, 0.0);

  // tell the GPU to draw the point
  gl.drawArrays(gl.POINTS, 0, 1);
};
