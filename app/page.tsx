"use client";

import { useRouter } from "next/navigation";
import { Link, Save, Wallet, Zap, Shield, Sparkles } from "lucide-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      router.push('/start');
    }
  }, [isConnected, router]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-red-950/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Animated Red Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-32 w-64 h-64 bg-red-600/30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-red-400/40 rounded-full blur-xl animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-50 mx-8 mt-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg">
                <Link className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-xl blur opacity-50"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-red-200 to-red-300 bg-clip-text text-transparent">
                Sei Actions
              </h1>
              <p className="text-xs text-red-300">Powered by Sei Network</p>
            </div>
          </div>
          <div className="flex items-center">
            <ConnectButton />
          </div>
        </div>
      </nav>

      {/* Main Hero Section - Centered Layout */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-8 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Content */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-red-200 font-medium">Revolutionary Payment Links</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              
              <span className="block text-red-600 font-pixelated">
                Sei Actions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Create, share, and execute payment links with ease using AI-powered technology on the Sei Network.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-white group-hover:text-red-400 transition-colors">0.001s</div>
                <div className="text-red-300 text-sm uppercase tracking-wide">Transaction Speed</div>
              </div>
              <div className="w-px h-16 bg-red-500/30"></div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-white group-hover:text-red-400 transition-colors">$0.0001</div>
                <div className="text-red-300 text-sm uppercase tracking-wide">Average Fee</div>
              </div>
              <div className="w-px h-16 bg-red-500/30"></div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-white group-hover:text-red-400 transition-colors">100%</div>
                <div className="text-red-300 text-sm uppercase tracking-wide">Uptime</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/50 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Save className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Generate Sei Actions</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Create intelligent payment links powered by AI on the Sei network with customizable parameters and instant deployment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Secure</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Customizable</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Instant</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/50 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Execute Sei Actions</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Load payment details instantly and execute transactions seamlessly with your connected wallet in one click.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">One-Click</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Fast</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Reliable</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/50 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-700 to-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Customization</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Tailor your payment links with AI-generated designs and prompts for personalized user experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">AI-Powered</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Custom UI</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Smart</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-600/20 to-red-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-black/40 border border-red-500/30 rounded-3xl p-12 backdrop-blur-md">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-red-400" />
                  <h2 className="text-3xl font-bold text-white">Ready to revolutionize payments?</h2>
                </div>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Connect your wallet to access all features and start creating secure, AI-powered payment links instantly on the Sei Network.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-red-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    Generate Sei Actions
                  </div>
                  <div className="flex items-center gap-2 text-red-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    AI-Powered Creation
                  </div>
                  <div className="flex items-center gap-2 text-red-300">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    Instant Execution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Animation Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">
            Experience the Magic of <span className="text-red-400">AI + Payments</span>
          </h3>
          <p className="text-gray-400 text-lg mb-12">Watch as AI transforms your payment needs into instant Sei Actions</p>
          
          {/* Horizontal Animation */}
          <div className="relative h-24 bg-gradient-to-r from-black via-red-900/20 to-black rounded-2xl border border-red-500/20 overflow-hidden">
            {/* Moving Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center space-x-8 animate-slide-sequence">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center font-bold text-white">
                    AI
                  </div>
                  <div className="text-red-300">+</div>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    $
                  </div>
                  <div className="text-red-300">=</div>
                  <div className="flex items-center space-x-2 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/40">
                    <Sparkles className="w-4 h-4 text-red-400" />
                    <span className="text-white font-semibold">SeiLink Magic!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slide-sequence {
          0% { transform: translateX(-100px); opacity: 0; }
          20% { transform: translateX(0); opacity: 1; }
          80% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(100px); opacity: 0; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-sequence {
          animation: slide-sequence 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}