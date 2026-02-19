import { Component } from 'react';
import "app/app.css";

export function Navbar() {
    return (
        <nav className="navbar rounded-box shadow-base-300/20 shadow-sm  in">
  <div className="w-full md:flex md:items-center md:gap-2">
    <div className="flex items-center justify-between">
      <div className="navbar-start items-center justify-between max-md:w-full">
        <h2 className="text-xl font-bold text-cthulu">FlyonUI</h2>
      </div>
    </div>
  </div>
</nav>
    );
}