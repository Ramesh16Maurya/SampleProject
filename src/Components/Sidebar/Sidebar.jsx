import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 800);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({ create: false, todo: false });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false); 
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup the event listener
  }, []);

  const toggleSidebar = () => {
    
    if (isSidebarOpen) {
      setIsSubMenuOpen({ create: false, todo: false });
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubMenu = (menu) => {
    // Open the sidebar if it's closed and toggle the submenu
    if (!isSidebarOpen) {
      setIsSidebarOpen(true); // Open the sidebar
    }
  
    setIsSubMenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu], // Toggle the specified submenu
    }));
  };
  

  return (
    <nav id="sidebar" className={`d-flex flex-column ${isSidebarOpen ? '' : 'close'}`}>
      <ul className="list-unstyled">
        <li className="d-flex justify-content-between">
          {isSidebarOpen && <span className="logo">coding2go</span>}
          <button onClick={toggleSidebar} id="toggle-btn" className={`btn btn-light ${!isSidebarOpen ? 'rotate' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z" />
            </svg>
          </button>

        </li>
        <li className="active sidebar-list">
          <Link to="/" className="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z" />
            </svg>
            <span>Home</span>
          </Link>
        </li>
        <li className='sidebar-list'>
          <Link to="customers" className="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M520-640v-160q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H560q-17 0-28.5-11.5T520-640ZM120-480v-320q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v320q0 17-11.5 28.5T400-440H160q-17 0-28.5-11.5T120-480Zm400 320v-320q0-17 11.5-28.5T560-520h240q17 0 28.5 11.5T840-480v320q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm-400 0v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-360h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
            </svg>
            <span>Customer</span>
          </Link>
        </li>
        <li className='sidebar-list'>
          <button
            onClick={() => toggleSubMenu('create')}
            className={`dropdown-btn d-flex align-items-center ${isSubMenuOpen.create ? 'rotate' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm400-160v-40q0 17 11.5 28.5T600-320q17 0 28.5-11.5T640-360v-40h40q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480h-40v-40q0-17-11.5-28.5T600-560q-17 0-28.5 11.5T560-520v40h-40q-17 0-28.5 11.5T480-440q0 17 11.5 28.5T520-400h40Z" />
            </svg>
            <span>Create</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L495-370q-7 6-13 8.5t-15 2.5Z" />
            </svg>
          </button>
          {isSubMenuOpen.create && (
            <ul className="submenu">
              <li><Link to="#">Create Item</Link></li>
              <li><Link to="#">Create Category</Link></li>
            </ul>
          )}
        </li>

        <li className='sidebar-list'>
          <button
            onClick={() => toggleSubMenu('todo')}
            className={`dropdown-btn d-flex align-items-center ${isSubMenuOpen.todo ? 'rotate' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M640-680v-80h-80v80h80Zm-240-80v80h-80v-80h80Zm-80 400v80h80v-80h-80Zm240 0v80h-80v-80h80Zm-120 80v80h80v-80h-80ZM240-120q-33 0-56.5-23.5T160-200v-400q0-33 23.5-56.5T240-680h320q33 0 56.5 23.5T640-600v400q0 33-23.5 56.5T560-120H240Zm0-80h320v-400H240v400Zm160-240v-80h80v80h-80Zm0-160v-80h80v80h-80Z" />
            </svg>
            <span>Todo</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L495-370q-7 6-13 8.5t-15 2.5Z" />
            </svg>
          </button>
          {isSubMenuOpen.todo && (
            <ul className="submenu">
              <li><Link to="#">Todo List</Link></li>
              <li><Link to="#">Completed Tasks</Link></li>
            </ul>
          )}
        </li>

      </ul>
    </nav>
  );
};

export default Sidebar;
