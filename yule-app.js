import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js'

const section = document.querySelector("section.book")

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
renderer.setSize( window.innerWidth, window.innerHeight )
section.appendChild( renderer.domElement )

const ambient = new THREE.AmbientLight(0xddbea9)
scene.add(ambient)

const light = new THREE.DirectionalLight(0xffe5d9)
light.position.set(0, 0, 6)
scene.add(light)

var mixer

const loader = new GLTFLoader()
var obj
loader.load('tree.glb', function (gltf) {
  mixer = new THREE.AnimationMixer(gltf.scene)
  obj = gltf.scene
  scene.add(gltf.scene)
})

camera.position.z = 6

let currentTimeline = window.pageYOffset / 3000
let aimTimeline = window.pageYOffset / 3000

function animate() {
	requestAnimationFrame( animate )

  currentTimeline += (aimTimeline - currentTimeline) * 0.1

  const rx = currentTimeline * -0.5 + 0.5
  const ry = (currentTimeline * 0.9 + 0.1) * Math.PI * 2

  renderer.render(scene, camera)
}
animate()

window.addEventListener("scroll", function () {
  obj.rotation.y -= 0.07
})
