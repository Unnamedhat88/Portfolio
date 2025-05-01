const Vertexobject = `
uniform mat4 view_matrix;
uniform mat4 model_matrix;
varying vec2 vUv;
varying vec3 newpos;
varying vec4 worldpos;
void main(){
  newpos=position;
  vUv=uv;
  vec4 worldpos=vec4(position,1.0)*modelMatrix;
  gl_Position= projectionMatrix * modelViewMatrix *vec4(position,1.0);

}
`

export default Vertexobject;