if ( ! Detector.webgl ) Detector.addGetWebGLMessage();


var camera, scene, renderer, w, h, canvas;
var geometry, material, mesh;



  canvas = document.getElementById("myCanvas");
  //w = window.innerWidth;
  //h = window.innerHeight;
  var w = canvas.width;
  var h = canvas.height;

  var renderer = new THREE.WebGLRenderer({canvas});

  //renderer.setClearColor(0x00ff00);
  //renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w,h);

  var camera = new THREE.PerspectiveCamera(35, w / h, .1, 3000);
  camera.position.z =100;
  var scene = new THREE.Scene();


  var geometry = new THREE.CubeGeometry(20, 20, 20);
  var material = new THREE.MeshBasicMaterial({shading: THREE.SmoothShading, color: 0x000000, wireframe: true, wireframeLinewidth: 8, transparent: true, opacity: 1});
  var mesh = new THREE.Mesh(geometry, material);
  //mesh.position.x = 100;
  scene.add(mesh);
  requestAnimationFrame( render );

function render(){
  mesh.rotation.x = Date.now() * 0.0008;
  mesh.rotation.y = Date.now() * 0.0003;
  mesh.rotation.z = Date.now() * 0.001;
  renderer.render( scene, camera );
  requestAnimationFrame( render );
}

  //controls = new THREE.OrbitControls(camera);
