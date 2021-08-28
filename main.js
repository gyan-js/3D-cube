let camera, scene, renderer, cube;

function init() {
    // Init scene
    scene = new THREE.Scene();

    // Init camera (PerspectiveCamera)
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    // Init renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    // Set size (whole window)
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Render to canvas element
    document.body.appendChild(renderer.domElement);

    // Init BoxGeometry object (rectangular cuboid)
    const geometry = new THREE.BoxGeometry(2, 2, 2);


   // const material = new THREE.MeshBasicMaterial({ color: 0x00ffff});
       
    

    
     const texture = new THREE.TextureLoader().load('wood1.png');
    const material = new THREE.MeshBasicMaterial({ map: texture});

    cube = new THREE.Mesh(geometry, material);
    // Add to scene
    scene.add(cube);

    // Position camera
    camera.position.z = 5;
}

// Draw the scene every time the screen is refreshed
function animate() {
    requestAnimationFrame(animate);

    // Rotate cube (Change values to change speed)
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.04;

    renderer.render(scene, camera);
}

function onWindowResize() {
    // Camera frustum aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    // After making changes to aspect
    camera.updateProjectionMatrix();
    // Reset size
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();