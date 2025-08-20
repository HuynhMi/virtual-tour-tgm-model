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
        handleActiveSlideFromIntersect(intersect.object.userData);
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

// let isAutoChaningSlide = true;
// setInterval(function () {
//     console.log(isAutoChaningSlide);
//     if (isAutoChaningSlide) {
//         handleNext();
//     }
// }, 4000);

function handleDelayIntervalAutoChangingSlide() {
    isAutoChaningSlide = false;
    console.log(isAutoChaningSlide);
    setTimeout(function () {
        isAutoChaningSlide = true;
    }, 10000);
}
function handleActiveSlideFromIntersect(data) {
    const { name } = data;
    console.log(name);

    slides.forEach((it, idx) => {
        const nameStr = it.getAttribute('data-product-name');
        if (nameStr == name) {
            currentSlide = idx;
            updateSlideActive(idx);
        }
    });
}

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

/**Handle slider */
let currentSlide = 0;
let slides = [];
const slider = document.getElementById('slider');
goToCenter();
function goToCenter() {
    const btn = document.getElementById('model-center');
    if (btn) {
        btn.addEventListener('click', function () {
            camera.position.set(-3, 1.4, 7.2);
            camera.rotation.set(0, 0, 0);
            camera.lookAt(0, 0, 0);
        });
    }
}
function handleNext() {
    const total_slide = slides.length;
    currentSlide = currentSlide >= total_slide - 1 ? 0 : currentSlide + 1;
    updateSlideActive(currentSlide, true);
}

function handlePrevious() {
    const total_slide = slides.length;
    currentSlide = currentSlide == 0 ? total_slide - 1 : currentSlide - 1;
    updateSlideActive(currentSlide, true);
}

function updateSlideActive(index, isScrolling = false) {
    slides.forEach((it, idx) => {
        it.classList.toggle('active', idx === index);
        if (idx === index) {
            if (isScrolling) {
                it.scrollIntoView({ behavior: 'smooth', top: '800px' });
            }
            const productName = it.getAttribute('data-product-name');
            focusOnProduct(productName);
        }
    });
}

function renderSlider() {
    const html = products
        .map(
            (it) => `<div class="slider-item" data-product-name="${it.name}">
                        <img src="${it.img}" alt height="100" />
                    </div>`
        )
        .join('');
    slider.innerHTML = html;
    slides = document.querySelectorAll('.slider-item');
    slides.forEach((item, idx) => {
        item.addEventListener('click', () => {
            const productName = item.getAttribute('data-product-name');
            focusOnProduct(productName);
            // handleDelayIntervalAutoChangingSlide();
        });
    });
}

function enableChangeSlider() {
    const btnNext = document.getElementById('slider-btn-next');
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            // handleDelayIntervalAutoChangingSlide();
            handleNext();
        });
    }
    const btnPre = document.getElementById('slider-btn-pre');
    if (btnPre) {
        btnPre.addEventListener('click', () => {
            // handleDelayIntervalAutoChangingSlide();
            handlePrevious();
        });
    }
}

renderSlider();
updateSlideActive(currentSlide);
enableChangeSlider();
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
function focusOnProduct(productName) {
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

let isAutoChaningSlide = false;
setInterval(function () {
    if (isAutoChaningSlide) {
        handleNext();
    }
}, 4000);
enableRunSliderAuto();

function enableRunSliderAuto() {
    const btn = document.getElementById('auto-slider');
    if (btn) {
        btn.addEventListener('click', function () {
            const disabled = btn.classList.contains('disabled');
            btn.classList.toggle('disabled', !disabled);
            if (disabled) {
                isAutoChaningSlide = true;
            } else {
                isAutoChaningSlide = false;
            }
        });
    }
}
