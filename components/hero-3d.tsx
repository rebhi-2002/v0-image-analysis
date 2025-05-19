"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x5b8def,
      transparent: true,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Create a sphere
    const sphereGeometry = new THREE.IcosahedronGeometry(1.5, 2)
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x5b8def,
      wireframe: true,
      emissive: 0x5b8def,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.7,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005
      sphere.rotation.y += 0.001
      controls.update()
      renderer.render(scene, camera)
    }

    animate()
    setIsLoaded(true)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      scene.remove(particlesMesh)
      scene.remove(sphere)
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      sphereGeometry.dispose()
      sphereMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10" ref={containerRef}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
        </div>
      )}
    </div>
  )
}
