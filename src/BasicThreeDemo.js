import "./styles.css";
import * as THREE from "three";

export class BasicThreeDemo {
  constructor(container) {
    this.container = container;
    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight, false);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    container.append(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      45,
      container.offsetWidth / container.offsetHeight,
      0.1,
      10000
    );
    this.scene = new THREE.Scene();

    this.clock = new THREE.Clock();
    this.assets = {};
    this.disposed = false;
    this.tick = this.tick.bind(this);
    this.init = this.init.bind(this);
  }
  loadAssets() {
    return new Promise((resolve, reject) => {
      // const manager = new THREE.LoadingManager(resolve);
      // this.text.load(manager);
    });
  }
  init() {
    this.tick();
  }
  getViewSizeAtDepth(depth = 0) {
    const fovInRadians = (this.camera.fov * Math.PI) / 180;
    const height = Math.abs(
      (this.camera.position.z - depth) * Math.tan(fovInRadians / 2) * 2
    );
    return { width: height * this.camera.aspect, height };
  }
  dispose() {
    this.disposed = true;
  }
  onResize() {}
  update() {}
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  tick() {
    if (this.disposed) return;
    if (resizeRendererToDisplaySize(this.renderer)) {
      const canvas = this.renderer.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
      this.onResize();
    }
    const delta = this.clock.getDelta();
    this.render(delta);
    this.update(delta);
    requestAnimationFrame(this.tick);
  }
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
