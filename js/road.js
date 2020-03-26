import * as THREE from "three";
export class CarLights {
  constructor(webgl, options) {
    this.webgl = webgl;
    this.options = options;
  }
  init() {
      const options = this.options;
    let curve = new THREE.LineCurve3(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -1)
    );
    let baseGeometry = new THREE.TubeBufferGeometry(curve, 25, 1, 8, false);
    let material = new THREE.MeshBasicMaterial({ color: 0x545454 });
    let mesh = new THREE.Mesh(baseGeometry, material);
	
      this.mesh = mesh;
    this.webgl.scene.add(mesh);
  }
}

class App {
    constructor(container, options){
        super(container);
            this.camera.position.z = -4;
            this.camera.position.y = 7;
            this.camera.position.x = 0;

            this.road = new Road(this, options);
    }
    init() {
            this.road.init();
            this.tick();
    }
}

export class Road {
    constructor(webgl, options) {
        this.webgl = webgl;
        this.options = options;
    }
    init() {
        const option = this.options;
        const geometry = new THREE.PlaneBufferGeometry(
            options.width,
            options.length,
            20,
            200
        );
        const material = new THREE.ShaderMaterial({
            fragmentShader,
            vertexShader,
            uniforms: {
                uColor: new THREE.Uniform(new THREE.Color(0x101012))
            }
        });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.rotation.x = -Math.PI / 2;
        mesh.position.z = -optioins.length / 2;

        this.webgl.scene.add(mesh);
    }
}

const fragmentShader = `
    uniform vec3 uColor;
	void main(){
        gl_FragColor = vec4(uColor,1.);
    }
`;
const vertexShader = `
	void main(){
        vec3 transformed = position.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed.xyz, 1.);
	}
`