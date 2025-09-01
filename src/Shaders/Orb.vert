const Vertexorb = `
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vViewPos;
void main(){
  vUv=uv;
  vPos=position;
  vViewPos =(modelViewMatrix*vec4(position,1.0)).xyz;
  gl_Position= projectionMatrix * modelViewMatrix *vec4(position,1.0);

}
`

export default Vertexorb;