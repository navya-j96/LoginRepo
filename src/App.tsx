import React, { useState } from 'react';
import { Eye, EyeOff, LogIn, Lock, Mail, User } from 'lucide-react';
import LoginForm from './components/LoginForm';
import Logo from './components/Logo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col md:flex-row items-stretch">
      {/* Left side - Hero section */}
      <div className="hidden md:flex md:w-1/2 bg-indigo-600 text-white p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10">
          <Logo />
          <h1 className="text-4xl font-bold mt-16 mb-6">Welcome back to Horizon</h1>
          <p className="text-xl text-indigo-200 mb-8">Log in to access your dashboard, manage your projects, and continue your journey.</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-indigo-100 italic">"Horizon has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 35%."</p>
            <div className="flex items-center mt-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" 
                alt="User testimonial" 
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-indigo-200 text-sm">Product Manager, Acme Inc.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 text-sm text-indigo-200">
          © 2023 Horizon. All rights reserved.
        </div>
      </div>
      
      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8">
            <Logo />
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Sign in</h2>
            <p className="text-gray-600 mt-2">Enter your credentials to access your account</p>
          </div>
          
          <LoginForm />
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500 transition-colors">
                Create one now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
