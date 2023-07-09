import Out from "./navbars/Out";
import "/Users/ugneadamo/todoblog/src/styling/Scene.scss"
import * as THREE from 'three';
import {useEffect} from 'react';

function Home() {

    useEffect( () => {
      // building a red cube 
    const scene = new THREE.Scene()
    const geometry = new THREE.BoxGeometry(1,1,1) // units for side sizes
    const material = new THREE.MeshBasicMaterial({color: 0xf8284})
    
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
  
    // camera
    const sizes = {
      width: 800,
      height: 600
    }
  
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)// desgrees of vision / width and height of vsion filed
    camera.position.z = 4
    camera.position.x = 0 // left AND right, can work with - ofc
    camera.position.y = 1 // height
    scene.add(camera)
  
    // rendered
    const canvas = document.querySelector('canvas.backgr')
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.render(scene,camera)
  
    
    }, [])
  
    return (
      <div className="holder" >
        <Out/>
        <canvas class="backgr"></canvas>
      </div>
    );
}

export default Home;