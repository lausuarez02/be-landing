import Image from 'next/image'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Eye from '../components/EyeModel'
// Dynamically import the Canvas to avoid SSR issues
const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Logo */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="relative text-center z-10 pt-20 flex flex-col items-center">
          {/* Logo */}
          <div className="mb-6 w-16 h-16 relative">
            <Image
              src="/eye.png"
              alt="BlindEye Logo"
              width={64}
              height={64}
              priority
            />
          </div>
          
          <h1 className="text-7xl font-bold mb-6 text-white">
            BlindEye
          </h1>
          <p className="text-2xl text-gray-300 mb-8 font-light">Verify with Privacy</p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto backdrop-blur-sm bg-black/30 p-6 rounded-xl">
            The first fully private on-chain KYC solution. Empowering developers to implement secure identity verification while maintaining user privacy.
          </p>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Roadmap
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Phase 1 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Phase 1: Core Infrastructure</h3>
            <ul className="space-y-4">
              <li>Secure enclave development on ICP</li>
              <li>End-to-end encryption implementation</li>
              <li>Scalable AI model deployment</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Phase 2: Business Integration</h3>
            <ul className="space-y-4">
              <li>Enterprise-grade API development</li>
              <li>Compliance framework for regulatory standards</li>
              <li>Automated identity verification system</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Phase 3: Market Expansion</h3>
            <ul className="space-y-4">
              <li>Industry-specific verification solutions (Fintech, Web3, E-commerce)</li>
              <li>Advanced fraud detection and risk analysis</li>
              <li>Strategic partnerships for real-world adoption</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Why BlindEye?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Privacy First</h3>
            <p className="text-gray-300">Zero-knowledge proofs ensure user data stays private while maintaining compliance</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Developer Friendly</h3>
            <p className="text-gray-300">Simple NPM package integration with comprehensive documentation</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-purple-900/30 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">On-Chain Verification</h3>
            <p className="text-gray-300">Trustless verification system built directly on blockchain technology</p>
          </div>
        </div>
      </div>
    </main>
  )
}

// Add this component for the 3D eye
function EyeModel() {
  const eyeRef = useRef()

  return (
    <mesh ref={eyeRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#6b46c1" metalness={0.7} roughness={0.2} />
    </mesh>
  )
}