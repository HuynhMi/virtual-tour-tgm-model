import * as THREE from 'three';
import { GLTFLoader } from 'three/GLTFLoader';
import { OrbitControls } from 'three/OrbitControls';
import { RGBELoader } from 'three/RGBELoader';
const products = [
    {
        name: 'Item 1',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia. Dolore libero ea cum, neque quo laboresint eveniet minus, possimus sed maxime corrupti perferendis suscipit eum exercitationem?',
        img: './assets/images/1.webp',
    },
    {
        name: 'Item 2',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia. Dolore libero ea cum, neque quo laboresint eveniet minus, possimus sed maxime corrupti perferendis suscipit eum exercitationem?',
        img: './assets/images/2.webp',
    },
    {
        name: 'Item 3',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia. Dolore libero ea cum, neque quo laboresint eveniet minus, possimus sed maxime corrupti perferendis suscipit eum exercitationem?',
        img: './assets/images/3.webp',
    },
    {
        name: 'Item 4',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia. Dolore libero ea cum, neque quo laboresint eveniet minus, possimus sed maxime corrupti perferendis suscipit eum exercitationem?',
        img: './assets/images/4.webp',
    },
    {
        name: 'Item 5',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia. Dolore libero ea cum, neque quo laboresint eveniet minus, possimus sed maxime corrupti perferendis suscipit eum exercitationem?',
        img: './assets/images/5.webp',
    },
    {
        name: 'Item 6',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia. Dolore libero ea cum, neque quo laboresint eveniet minus, possimus sed maxime corrupti perferendis suscipit eum exercitationem?',
        img: './assets/images/6.webp',
    },
    {
        name: 'Item 7',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia. Dolore libero ea cum, neque quo laboresint eveniet minus, possimus sed maxime corrupti perferendis suscipit eum exercitationem?',
        img: './assets/images/7.webp',
    },
    {
        name: 'Item 8',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia. Dolore libero ea cum, neque quo laboresint eveniet minus, possimus sed maxime corrupti perferendis suscipit eum exercitationem?',
        img: './assets/images/8.webp',
    },
    {
        name: 'Item 9',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisapiente alias mollitia. Dolore libero ea cum, neque quo laboresint eveniet minus, possimus sed maxime corrupti perferendis suscipit eum exercitationem?',
        video: './assets/images/dynamic-charting.mp4',
        img: './assets/images/9.webp',
    },
];

const ACTION1 = 'SHOW SLIDER';
const ACTION2 = 'SHOW MODAL';

const BUTTON1 = 'Explore Full Report';
const BUTTON2 = 'Read full story';

const consumerSnapshot = [
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/consumer-snapshot/1.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/consumer-snapshot/2.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/consumer-snapshot/3.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/consumer-snapshot/4.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/consumer-snapshot/5.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/consumer-snapshot/6.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/consumer-snapshot/7.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/consumer-snapshot/8.jpg',
    },
];

const employeeStories = [
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/employee-stories/3.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/employee-stories/4.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/employee-stories/5.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/employee-stories/6.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/employee-stories/7.jpg',
    },
];

const tgmMoments = [
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/2.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/3.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/4.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/5.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/6.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/7.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/8.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/9.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/10.jpg',
    },
    {
        link: 'https://tgmresearch.com',
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/11.jpg',
    },
];

const presents = [
    {
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/infographics/1.jpg',
        action: [ACTION2],
    },
    {
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/tgm-moments/1.jpg',
        action: [ACTION1, ACTION2],
        items: tgmMoments,
    },
    {
        imgUrl: 'https://tgmresearch.com/images/library/8th-anniversary/employee-stories/2.jpg',
        action: [ACTION1, ACTION2],
        items: employeeStories,
    },
    ...consumerSnapshot.map((it) => ({ ...it, action: [ACTION2] })),
];

console.log('presents', presents);
console.log('products');
//create scene, camera, renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
);
camera.position.set(-9.186, 4, 7.829);
camera.rotation.set(0, 0, 0);
camera.lookAt(0, 0, 0);
//load room
let room;
const loaderGLTF = new GLTFLoader();
loaderGLTF.load(
    './room.glb',
    function (gltf) {
        room = gltf.scene;
        // Try these adjustments after loading the model
        room.position.set(0, -0.59, 0);
        room.scale.set(1, 1, 1); // Adjust scale as needed
        // room.traverse((child) => {
        //     if (child.isMesh) {
        //         child.material.emissiveIntensity = 0.1; // Adjust if needed
        //         child.material.needsUpdate = true;
        //     }
        // });
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                // Ensure materials respond to lights
                child.material.metalness = 0; // Default for non-metals
                child.material.roughness = 0; // Default for matte surfaces

                // For glass/metal parts
                if (child.name.includes('glass')) {
                    child.material.metalness = 0;
                    child.material.roughness = 0;
                }
            }
        });
        scene.add(room);
    },
    function (xhr) {},
    function (error) {}
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

renderer.render(scene, camera);

//create lights
// Add these right after your scene creation (before loading objects)
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7); // Adjust position as needed
scene.add(directionalLight);
//create controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Adds smoothness
controls.dampingFactor = 0.05;

//create animate
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    // console.log(camera.position);
    // document.getElementById('log').innerHTML = `
    //     <div>${camera.position.x}</div>
    //     <div>${camera.position.y}</div>
    //     <div>${camera.position.z}</div>
    // `;
}

animate();
//add products
const textureLoader = new THREE.TextureLoader();
const interactiveObjects = [];
const objectLoader = new THREE.ObjectLoader();
objectLoader.load('./group.json', (obj) => {
    scene.add(obj);

    products.forEach((product) => {
        // Find the corresponding mesh in the loaded object
        obj.traverse((child) => {
            if (child.isMesh && child.name === product.name) {
                // Create texture from image
                interactiveObjects.push(child);
                if (product.img) {
                    textureLoader.load(
                        product.img,
                        (texture) => {
                            console.log(
                                'Attempting to load from:',
                                product.img
                            );
                            // console.log(
                            //     'Resolved URL:',
                            //     new URL(product.img, window.location.href).href
                            // );
                            // Configure texture properties
                            texture.encoding = THREE.sRGBEncoding;
                            texture.anisotropy =
                                renderer.capabilities.getMaxAnisotropy();

                            // Create new material with texture
                            child.material = new THREE.MeshStandardMaterial({
                                map: texture,
                                side: THREE.DoubleSide,
                                roughness: 0.3,
                                metalness: 0.1,
                                transparent: false,
                            });

                            // Force update
                            child.userData = { ...product };
                            child.material.needsUpdate = true;
                        },
                        undefined,
                        (error) => {
                            console.error('Error loading texture:', error);
                        }
                    );
                }
            }
        });
    });
});
//clicks handle
const mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();

window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);
    // console.log('intersects', intersects);
    toggleModal(intersects.length > 0);
    intersects.forEach((intersect) => {
        // console.log(`Clicked ${intersect.object.name}`);
        // console.log(intersect.object);
        // console.log(123);
        console.log(intersect.object.userData.name);
        updateModalContainer(intersect.object.userData);
        // handleActiveSlideFromIntersect(intersect.object.userData);
        // handleDelayIntervalAutoChangingSlide();
        // Add your interaction logic here
    });
});

//resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function toggleModal(condition) {
    const modal = document.getElementById('modal');
    modal.classList.toggle('open', condition);
}
closeModal();
function closeModal() {
    const btn = document.querySelector('#modal button');
    const modal = document.getElementById('modal');
    btn.addEventListener('click', function () {
        modal.classList.remove('open');
    });
}
function updateModalContainer(item) {
    const container = document.getElementById('modal-container');
    if (!modal || !container) return;

    container.innerHTML = `
        <div class="title">
            ${item.title}
        </div>
        <p class="content">
            ${item.desc}
        </p>
        ${
            item.video
                ? `<video width="400" controls>
                    <source src="${item.video}" type="video/mp4">
                    </video>`
                : `<img src="${item.img}" alt width="150" height="50"/>`
        }
       
    `;
}

document.addEventListener('keydown', onKeyDown);

function onKeyDown(e) {
    let keyCode = e.which;
    // alert(keyCode);
    const moveAmount = 0.5;
    switch (keyCode) {
        //right arrow key
        case 39:
            camera.position.x += moveAmount;
            break;
        //left arrow key
        case 37:
            camera.position.x -= moveAmount;
            break;
        case 40:
            camera.position.y -= moveAmount;
            break;
        case 38:
            camera.position.y += moveAmount;
            break;
    }
}

const listPos = {
    'Item 1': {
        x: 3.3,
        y: 0.9,
        z: -1.8,
    },
    'Item 2': {
        x: 0.6,
        y: 1.3,
        z: -1.7,
    },
    'Item 3': {
        x: -1.8,
        y: 1.6,
        z: -1.8,
    },
    'Item 4': {
        x: -1.8,
        y: 1.06,
        z: -1.67,
    },
    'Item 5': {
        x: -1.8,
        y: 1.15,
        z: 0.49,
    },
    'Item 6': {
        x: -1.8,
        y: 1.13,
        z: 2.0,
    },
    'Item 7': {
        x: 1.62,
        y: 1.17,
        z: 3.12,
    },
    'Item 8': {
        x: 1.73,
        y: 0.99,
        z: -0.003,
    },
    'Item 9': {
        x: 1.78,
        y: 1.905,
        z: -2.83,
    },
};
function handleFlyTo3DItem(productName) {
    const targetObject = interactiveObjects.find(
        (obj) => obj.name === productName
    );
    if (!targetObject) return;

    // 1. Get target position
    let targetPosition = new THREE.Vector3();
    targetObject.getWorldPosition(targetPosition);
    const distance = 3;
    const height = 1;
    const forwardVector = new THREE.Vector3(0, 0, 1);
    targetObject.localToWorld(forwardVector);
    forwardVector.sub(targetPosition).normalize();
    // 2. Calculate camera position (default for most items)
    let newCameraPosition;
    if (listPos[productName]) {
        const pos = listPos[productName];
        newCameraPosition = new THREE.Vector3(pos.x, pos.y, pos.z);
    } else {
        newCameraPosition = new THREE.Vector3()
            .copy(targetPosition)
            .sub(forwardVector.multiplyScalar(distance))
            .add(new THREE.Vector3(0, height, 0));
    }

    // 3. Store current values for animation (your existing logic)
    const startPosition = camera.position.clone();
    const startTarget = controls.target.clone();
    controls.enableDamping = false;

    // 4. Animate camera movement (your existing logic)
    gsap.to(camera.position, {
        x: newCameraPosition.x,
        y: newCameraPosition.y,
        z: newCameraPosition.z,
        duration: 2,
        ease: 'power2.inOut',
    });

    // 5. Animate camera focus (your existing logic)
    gsap.to(startTarget, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: () => {
            controls.target.copy(startTarget);
            camera.lookAt(startTarget);

            // Apply special rotation only for Item 2
            if (productName === 'Item 2') {
                camera.rotation.set(
                    THREE.MathUtils.degToRad(-0.21),
                    THREE.MathUtils.degToRad(2.46),
                    THREE.MathUtils.degToRad(0.01)
                );
            }
        },
        onComplete: () => {
            controls.enableDamping = true;
        },
    });
}

function enableAuFlyIn3D() {
    products.forEach((it, idx) => {
        setTimeout(function () {
            handleFlyTo3DItem(it.name);
        }, idx * 3000);
    });
    setInterval(function () {
        products.forEach((it, idx) => {
            setTimeout(function () {
                handleFlyTo3DItem(it.name);
            }, idx * 3000);
        });
    }, products.length * 3000);
}

class Virtual3D {}

//SLIDER
/*
UI
next, previous
show
*/
/*
    slider-wrapper -> slider -> slide
    btn-next
    btn-pre
*/

class Slider {
    constructor(selector) {
        this.slider = document.querySelector(`${selector} .slider`);
        this.current_slide = 1;
        this.slides = [...this.slider.querySelectorAll('.slide')];
        this.totalSlides = this.slides.length;
        this.btnNext = document.querySelector(`${selector} .btn-next`);
        this.btnPre = document.querySelector(`${selector} .btn-pre`);

        this.init();
    }

    init() {
        this.btnNext.addEventListener('click', () => {
            this.next();
            this.handleTransform();
        });
        this.btnPre.addEventListener('click', () => {
            this.pre();
            this.handleTransform();
        });
    }

    next() {
        this.current_slide =
            this.current_slide == this.totalSlides ? 1 : this.current_slide + 1;
    }
    pre() {
        this.current_slide =
            this.current_slide == 1 ? this.totalSlides : this.current_slide - 1;
    }

    handleTransform() {
        this.slides[this.current_slide - 1].scrollIntoView();
    }
}
const slider1 = new Slider('#slider-wrapper');
