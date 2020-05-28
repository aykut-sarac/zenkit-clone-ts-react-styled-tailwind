import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="bg-black text-gray-500">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="">
            <Link className="flex flex-row justify-center items-center" to="/">
              <img
                className="h-8"
                src="https://zenkit.com/wp-content/themes/zenkit-com/img/todo/to-do-icon.png"
                alt="zen"
              />
              <span className="text-white font-semibold tracking-wider text-2xl px-2">
                Zenkit
              </span>
              <span className="text-white text-2xl px-1 text">To Do</span>
            </Link>
          </div>
          <div>
            <button
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
              onClick={this.handleToggle}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <ul className={this.state.isOpen ? "px-2 pt-2 pb-4" : "hidden"}>
            <li>
              <Link
                to="/features"
                className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
