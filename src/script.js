import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import GUI from 'lil-gui';
import gsap  from 'gsap';
import fireworkVertexShader from './shaders/firework/vertex.glsl';
import fireworkFragmentShader from './shaders/firework/fragment.glsl';

/* We are going to use particles and animate them in a single vertex shader(for performance reason)
-the same code will be executed for all particles:
     - They start to expand fast in every direction
     - They scale up even faster
     - They start to fall down slowly
     - They scale down
     - They twinkle as they disappear   
     - All the animation steps are interwined -remap the progress

     1.FIREWORKS. 
     - We muss create a function to create fireworks => createFireworks() => because we want to create it when we click
     - function's parameters: position, radius, amount of particles(count), color, etc
     - Inside that function(createFireworks) we are going to create: geometry, material, points
     - we are going to start from a empty geometry (BufferGeometra) and fill it with random positions
     - Geometry: the geometry is empty we need to fill it with position through attributes.
     - Material: we initially use PointsMaterial to initially see something which we will then replace by ShaderMaterial
     - Change the position of the firework according to a position parameter => firework.position.capy(position) to control the positon
     - Create the custom shader: shaders/firework/vertex.glsl & shaders/firework/fragment.glsl & import them into the file script.js

     2. PERSPECTIVE:
     - To add perspective to the particles, we need to multiply gl_PointSize by 1.0/ - viewPosition.z
     - Uniforms (uSize) to control the size of the particles => sent it to the js file script to the shaders, and add the size parameter into
      createFireworks function.
      3.PROPORTIONATE TO THE RENDER HEIGHT;
      - To fixed 2 issues: A. the pixel ratio & B.the size relative to the render height
      - B.the size relative to the render height: Resize the window vertically and check how the particles behave => Test:
      - We i resize the viewport the plane test get smaller/bigger:  the plane size is proportional to the height of the renderer
      - but when we have particles that they don't behave like that: the particles don't get smaller/bigger
      - Uniforms (uResolution): To fix the issue B. we need to send the whole resolution of the renderer to the shader: uResolution: new THREE.Uniform(new THREE.Vector2(sizes.width, sizes.height))
        - in the resize callback function we want to update uResolution but we do not have access to the material & cannot creat it outside of the function createFirework()
        - to solve that we have to create the Vector2(sizes.width, sizes.height) outside the function sizes.resolution = new THREE.Vector2() and send into uSize,  and than update it in the resize callback function
     - A. Pixel Ratio issue: we have to include the pixel ration in sizes object to be abble to handle it
       - then we have to update it in the callback function resize & update too the renderer ( renderer.setPixelRatio(sizes.pixelRatio);)
       - when instantiating and updating sizes.resolution, we have to multiply sizes.width & sizes.height by sizes.pixelRatio
    3.TEXTURE(/static/particles folder) => uniforms:  uTexture
        - We do not access the texture coordinates the same way when it comes to particles & despite we use gl_PointCoord, but we need uV coordinates
        to pick the rigth pixel from the texture. We cannot use the uv attribute because it is inside the particle
 
    4. RANDOM SIZE 
        - Perfect particles do not exists and would look unrealistic, we are going despite to use an attribute => sizesArray <=> aSize attribute & 
        in vertex.glsl retrieve the aSize attribute and multiply th gl_PointSize
    
    5. SPHERE DISTRIBUTION:
        - We want to position the particles on a sphere (instead on a cube)=> we have to use three.js class Spherical
        - First we need to add a new parameter into the function createFirework: radius parameter
        - Create const spherical and convert it to a 3D position by creating a position from a Vector3
    6.COLOR:
        - Adding color parameter into createFirework function
        - Adding uColor uniform , send it the color parameter
        - Aplying the uniform vec3 uColor in the file fragment.glsl
    7.PROGRESS:(uniforms uProgress)
        - To be able to control the animation we need a value that changes from 0 to 1
        - We are going to use that uniuqe value in the vertex shader to contron  all the aspects of the animation
        - To animate uProgress we are going to use "gsap"
        - DISPOSE OF OBJECTS(destroy function): When the animation ends, the particles of the fireworks should not be visible
        and we can get rid of it properly
        - REGENERATE THE FIREWORKS WITH A CLICK: addEventListener function
    8. ANIMATION: 
        - The animation is composed of 5 diffetent phases
            a) The particles start to expand fast in every direction (exploding)
            b) They scale up even faster (scaling)
            c) They start to fall down slowly (falling)
            d) They scale down
            e) They twinkle as they dissapear (twinking)
        - We have to separete these phases and remap the progrees to suit the phase we are dealing with (vertex.glsl)
        - We need to update the position of the particles an attribute: vec3 newPosition = positon
        - All particles follow a similar animaion at the exact same time => We must make that their life span
        should be different: creation a timeMultiplier as an attribute and make the particles randomly faster
        - With the aTimeMultiplier attribute in vertex.glsl we create a new progress. 




*/  
/**
 * Base
 */
// Debug
//const gui = new GUI({ width: 340 });

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Loaders
const textureLoader = new THREE.TextureLoader();
const rgbeLoader = new RGBELoader();
// const exrLoader = new EXRLoader();




/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2)
};

//sizes.resolution = new THREE.Vector2(sizes.width, sizes.height);
sizes.resolution = new THREE.Vector2(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio);

// callback funcion resize
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);
    sizes.resolution.set(sizes.width, sizes.height);

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(sizes.pixelRatio);
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height, 0.1, 100);
camera.position.set(1.5, 0, 6);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(sizes.pixelRatio);

/**
 * Environment map
 */


const loadEnvironmentMap = async () => {
    try {
        const environmentMap = await new Promise((resolve, reject) => {
            rgbeLoader.load(
                './environmentMap/night_environment.hdr',//.exr
                resolve,
                undefined,
                reject
            );
        });

        environmentMap.mapping = THREE.EquirectangularReflectionMapping;
        
        
        scene.environment = environmentMap;
        scene.background = environmentMap;

    } catch (error) {
        console.error('Error loading environment map:', error);
    }
};

loadEnvironmentMap();

/**
 * Fireworks
 */

//Textures
    const textures = [
        textureLoader.load('./particles/1.png'),
        textureLoader.load('./particles/2.png'),
        textureLoader.load('./particles/3.png'),
        textureLoader.load('./particles/4.png'),
        textureLoader.load('./particles/5.png'),
        textureLoader.load('./particles/6.png'),
        textureLoader.load('./particles/7.png'),
        textureLoader.load('./particles/8.png')
    ];



const createFirework = (count, position, size, texture, radius, color) => {

    // we have three values per vertex: despite * 3
    const positionsArray = new Float32Array(count * 3);
    //we need only one value per vertex:
    const sizesArray = new Float32Array(count);
    // timeMultipliersArray of count length and fill it  with values going radomly from 1-2
    const timeMultipliersArray = new Float32Array(count);
    // to fill this array:
    for(let i = 0; i < count; i++){

        //i3 ist values goes 3*3 <=> to fill the positionsArray 3*3
        const i3 = i * 3;

        //SPHERICAL (one spherical value per vertex- despite inside the loop)
        const spherical = new THREE.Spherical(
            radius * (0.75 + Math.random() * 0.25),
            Math.random() * Math.PI,//"phi" angle= half circle "from bottom to up"
            Math.random() * Math.PI * 2 // "theta" angle ""
        );
        const position = new THREE.Vector3();
        // convertion the spherical coordinates to a 3D position: 
        position.setFromSpherical(spherical);



        //positions: (Math.random goes from 0 to 1, we apply -0.5 to centered in the scene)
        positionsArray[i3 + 0] =  position.x;//Math.random() - 0.5;//x
        positionsArray[i3 + 1] = position.y; //Math.random() - 0.5;//y
        positionsArray[i3 + 2] = position.z; //Math.random() - 0.5;//z

        //sizes:
        sizesArray[i] = Math.random();

        //timeMultiplier=>a randomly value between 1 and 2:  potentially faster
        timeMultipliersArray[i] = 1 + Math.random();
        
    } 
    //Geometry
    const geometry = new THREE.BufferGeometry();
    // the geometry is empty we need to fill it with position through attributes:
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positionsArray, 3));
    geometry.setAttribute('aSize', new THREE.Float32BufferAttribute(sizesArray, 1));
    geometry.setAttribute('aTimeMultiplier',  new THREE.Float32BufferAttribute(timeMultipliersArray, 1));
    // We have to flip the texture to become the right direction
    texture.flipY = false;
    //Material
    const material = new THREE.ShaderMaterial({
        vertexShader: fireworkVertexShader,
        fragmentShader: fireworkFragmentShader,
        uniforms: {
            uSize: new THREE.Uniform(size),
           // uResolution: new THREE.Uniform(new THREE.Vector2(sizes.width, sizes.height))
            uResolution: new THREE.Uniform(sizes.resolution),
            uTexture: new THREE.Uniform(texture),
            uColor: new THREE.Uniform(color),
            uProgress: new THREE.Uniform(0)
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    // to create the points:
    const fireworks = new THREE.Points(geometry, material);
    fireworks.position.copy(position);// to copy the value from the position parameters
    scene.add(fireworks);

    const destroy = () => {
        scene.remove(fireworks);
        geometry.dispose();
        material.dispose();
        console.log('destroy');
    }
    //Animation with gsap
    gsap.to(
        material.uniforms.uProgress,
        { 
            value: 1, 
            duration: 3,
            ease: 'linear',
            onComplete: destroy
        },
    )




}

/**
 * Firework Sound
 */
const fireworkSound = new Audio('./sounds/fireworks_sound.wav');

const playFireworkSound = () => {
    fireworkSound.currentTime = 0; // Reiniciar sonido si ya se está reproduciendo
    fireworkSound.play().catch(error => console.error("Error al reproducir el sonido:", error));
}

/**
 * CreateRandomFirework function
 */

const createRandomFirework = () => {
    const count = Math.round(400 + Math.random() * 1000);
    const position = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        Math.random(),
        (Math.random() - 0.5) * 2
    ); 
    const size = 0.1 + Math.random() * 0.1;
    const texture = textures[Math.floor(Math.random() * textures.length)];
    const radius = 0.5 + Math.random();
    const color = new THREE.Color();
    color.setHSL(Math.random(), 1, 0.5 + Math.random() * 0.3);
    // const color = new THREE.Color();
    // color.setHex(0xffffff * Math.random()); 
//  const palette = ["#e63946", "#f4a261", "#2a9d8f", "#264653", "#8ab17d"];
// const color = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
    createFirework(count, position, size, texture, radius, color);
}

const handleFireworkClick = () => {
    playFireworkSound();
    createRandomFirework();
}

 /**
 * Regenerate the Fireworks
 */
window.addEventListener('click',handleFireworkClick);
/**
 * Test
 */
// const test = new THREE.Mesh(
//     new THREE.PlaneGeometry(),
//     new THREE.MeshBasicMaterial()
// );
// scene.add(test);

/**
 * Animate
 */
const tick = () =>
{
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
};

tick();