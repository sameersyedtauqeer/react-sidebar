import React, { useState } from 'react'
import {
    BiBell,
    BiChat,
    BiCheckCircle,
    BiCog,
    BiComment,
    BiHomeCircle,
    BiIdCard,
    BiLineChart,
    BiLogOutCircle,
    BiMenu,
    BiRadioCircleMarked,
    BiSearch,
    BiUser,
    BiPaperPlane,
    BiHome,
    BiAddToQueue,
} from "react-icons/bi";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Link, Navigate, Outlet } from "react-router-dom";
import "./sidebar.css"


const Sidebar = () => {

    const [onHover, setOnHover] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleShow = (show, active) => {
        document.getElementById(active).classList.toggle("mm-active");
        document.getElementById(show).classList.toggle("mm-show");
    };

    return (
        <>
            <div
                className={`wrapper ${toggle ? "toggled" : ""} ${onHover ? "sidebar-hovered" : ""
                    }`}
            >
                {/*sidebar wrapper */}
                <div
                    className="sidebar-wrapper"
                    data-simplebar="true"
                    onMouseEnter={() => setOnHover(true)}
                    onMouseLeave={() => setOnHover(false)}
                >
                    <div className="sidebar-header">
                        {/* <div>
          <img
            src="assets/images/logo-icon.png"
            className="logo-icon"
            alt="logo icon"
          />
        </div> */}
                        <div>
                            <h4 className="logo-text">Project Name</h4>
                        </div>
                        <div
                            className="toggle-icon ms-auto"
                            onClick={() => setToggle(!toggle)}
                        >
                            <BsArrowLeftSquareFill />
                        </div>
                    </div>
                    {/*navigation*/}
                    <ul className="metismenu mm-show" id="menu">
                        {/* <li className="menu-label">UI Elements</li> */}
                        {/* <li>
          <Link to="/home" className="text-decoration-none">
            <div className="parent-icon d-flex">
              <BiHomeCircle />
            </div>
            <div className="menu-title">Home</div>
          </Link>
        </li> */}

                        {/* <li>
          <Link to="/pipeline" className="text-decoration-none">
            <div className="parent-icon d-flex">
              <BiCheckCircle />
            </div>
            <div className="menu-title">Pipeline</div>
          </Link>
        </li> */}

                        {/* <li>
          <Link to="/conversation" className="text-decoration-none">
            <div className="parent-icon d-flex">
              <BiChat />
            </div>
            <div className="menu-title">Conversation</div>
          </Link>
        </li> */}

                        {/* <li>
          <Link to="/contact" className="text-decoration-none">
            <div className="parent-icon d-flex">
              <BiIdCard />
            </div>
            <div className="menu-title">Contacts</div>
          </Link>
        </li> */}

                        {/* <li id="active1">
          <a
            className="has-arrow"
            onClick={() => handleShow("show1", "active1")}
            role="button"
          >
            <div className="parent-icon">
              <BiLineChart />
            </div>
            <div className="menu-title">Funnels & Websites</div>
          </a>
          <ul className="mm-collapse mm-colapsing" id="show1">
            <li>
              <Link to="/websites">
                <BiRadioCircleMarked className="s-3" />
                Websites
              </Link>
            </li>
            <li>
              <Link to="/funnels">
                <BiRadioCircleMarked className="s-3" />
                Funnels
              </Link>
            </li>
          </ul>
        </li> */}

                        {/* <li id="account">
                        <a
                            className="has-arrow"
                            onClick={() => handleShow("show2", "account")}
                            role="button"
                        >
                            <div className="parent-icon">
                                <BiLineChart />
                            </div>
                            <div className="menu-title">Hmme</div>
                        </a>
                        <ul className="mm-collapse mm-colapsing" id="show2">
                            <li>
                                <Link to="/account">
                                    <BiRadioCircleMarked className="s-3" />
                                    Accounts
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-account">
                                    <BiRadioCircleMarked className="s-3" />
                                    Add Account
                                </Link>
                            </li>
                        </ul>
                    </li> */}

                        {/* <li id="role">
                        <a
                            className="has-arrow"
                            onClick={() => handleShow("show3", "role")}
                            role="button"
                        >
                            <div className="parent-icon">
                                <BiLineChart />
                            </div>
                            <div className="menu-title">Roles & Permissions</div>
                        </a>
                        <ul className="mm-collapse mm-colapsing" id="show3">
                            <li>
                                <Link to="/roles">
                                    <BiRadioCircleMarked className="s-3" />
                                    Roles
                                </Link>
                            </li>
                            <li>
                                <Link to="/permissions">
                                    <BiRadioCircleMarked className="s-3" />
                                    Permissions
                                </Link>
                            </li>
                        </ul>
                    </li> */}

                        <li>
                            <Link to="/" className="text-decoration-none">
                                <div className="parent-icon d-flex">
                                    {/* <i className="fas fa-id-card-alt font-14"></i> */}
                                    <BiHome />
                                </div>
                                <div className="menu-title">Home</div>
                            </Link>
                        </li>



                        {/* <li>
                        <Link to="/setting" className="text-decoration-none">
                            <div className="parent-icon d-flex">
                                <BiCog />
                            </div>
                            <div className="menu-title">Setting</div>
                        </Link>
                    </li> */}
                    </ul>
                    {/*end navigation*/}
                </div>

                <header>
                    <div className="topbar d-flex align-items-center">
                        <nav className="navbar navbar-expand">
                            <div
                                className="mobile-toggle-menu"
                                onClick={() => setToggle(!toggle)}
                            >
                                <BiMenu />
                            </div>
                            {/* <div className="search-bar flex-grow-1">
                            <div className="position-relative search-bar-box">
                                <input
                                    type="text"
                                    className="form-control bg-transparent search-control"
                                    placeholder="Type to search..."
                                />
                                <span className="position-absolute top-50 search-show translate-middle-y">
                                    <BiSearch />
                                </span>
                                <span className="position-absolute top-50 search-close translate-middle-y">
                                    <i className="bx bx-x" />
                                </span>
                            </div>
                        </div> */}
                            <div className="top-menu ms-auto">
                                <ul className="navbar-nav align-items-center">
                                    {/* <li className="nav-item mobile-search-icon">
                                    <a className="nav-link" href="#">
                                        <BiSearch />
                                    </a>
                                </li> */}

                                    {/* <li className="nav-item dropdown dropdown-large">
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bx bx-category" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div className="row row-cols-3 g-3 p-3">
                    <div className="col text-center">
                      <div className="app-box mx-auto">
                        <i className="bx bx-group" />
                      </div>
                      <div className="app-title">Teams</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto">
                        <i className="bx bx-atom" />
                      </div>
                      <div className="app-title">Projects</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto">
                        <i className="bx bx-shield" />
                      </div>
                      <div className="app-title">Tasks</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto">
                        <i className="bx bx-notification" />
                      </div>
                      <div className="app-title">Feeds</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto">
                        <i className="bx bx-file" />
                      </div>
                      <div className="app-title">Files</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto">
                        <i className="bx bx-filter-alt" />
                      </div>
                      <div className="app-title">Alerts</div>
                    </div>
                  </div>
                </div>
              </li> */}

                                    {/* <Dropdown className="nav-item dropdown dropdown-large">
                                    <Dropdown.Toggle
                                        as={NavLink}
                                        className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"

                                    >
                                        <span className="alert-count">7</span>
                                        <BiBell />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end ">
                                        <a href="!#">
                                            <div className="msg-header">
                                                <p className="msg-header-title">Notifications</p>
                                                <p className="msg-header-clear ms-auto">
                                                    Marks all as read
                                                </p>
                                            </div>
                                        </a>
                                        <div className="header-notifications-list overflow-auto">
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-group" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Customers
                                                            <span className="msg-time float-end">
                                                                14 Sec ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">5 new user registered</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-cart-alt" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Orders
                                                            <span className="msg-time float-end">
                                                                2 min ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            You have recived new orders
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-file" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            24 PDF File
                                                            <span className="msg-time float-end">
                                                                19 min ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            The pdf files generated
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-send" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Time Response
                                                            <span className="msg-time float-end">
                                                                28 min ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            5.1 min avarage time response
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-home-circle" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Product Approved
                                                            <span className="msg-time float-end">
                                                                2 hrs ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Your new product has approved
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-message-detail" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Comments
                                                            <span className="msg-time float-end">
                                                                4 hrs ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            New customer comments recived
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-check-square" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Your item is shipped
                                                            <span className="msg-time float-end">
                                                                5 hrs ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Successfully shipped your item
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-user-pin" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New 24 authors
                                                            <span className="msg-time float-end">
                                                                1 day ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            24 new authors joined last week
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-door-open" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Defense Alerts
                                                            <span className="msg-time float-end">
                                                                2 weeks ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            45% less alerts last 4 weeks
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a href="javascript:;">
                                            <div className="text-center msg-footer">
                                                View All Notifications
                                            </div>
                                        </a>
                                    </Dropdown.Menu>
                                </Dropdown> */}

                                    {/* <Dropdown className="nav-item dropdown dropdown-large">
                                    <Dropdown.Toggle
                                        as={NavLink}
                                        className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                    // href="#"
                                    // role="button"
                                    // data-bs-toggle="dropdown"
                                    // aria-expanded="false"
                                    >
                                        <span className="alert-count">8</span>
                                        <BiComment />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end me">
                                        <a href="javascript:;">
                                            <div className="msg-header">
                                                <p className="msg-header-title">Messages</p>
                                                <p className="msg-header-clear ms-auto">
                                                    Marks all as read
                                                </p>
                                            </div>
                                        </a>
                                        <div className="header-message-list overflow-auto">
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Daisy Anderson
                                                            <span className="msg-time float-end">
                                                                5 sec ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            The standard chunk of lorem
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Althea Cabardo
                                                            <span className="msg-time float-end">
                                                                14 sec ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Many desktop publishing packages
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Oscar Garner
                                                            <span className="msg-time float-end">
                                                                8 min ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Various versions have evolved over
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Katherine Pechon
                                                            <span className="msg-time float-end">
                                                                15 min ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Making this the first true generator
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Amelia Doe
                                                            <span className="msg-time float-end">
                                                                22 min ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Duis aute irure dolor in reprehenderit
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Cristina Jhons
                                                            <span className="msg-time float-end">
                                                                2 hrs ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            The passage is attributed to an unknown
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            James Caviness
                                                            <span className="msg-time float-end">
                                                                4 hrs ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            The point of using Lorem
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Peter Costanzo
                                                            <span className="msg-time float-end">
                                                                6 hrs ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            It was popularised in the 1960s
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            David Buckley
                                                            <span className="msg-time float-end">
                                                                2 hrs ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Various versions have evolved over
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Thomas Wheeler
                                                            <span className="msg-time float-end">
                                                                2 days ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            If you are going to use a passage
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src={profile}
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Johnny Seitz
                                                            <span className="msg-time float-end">
                                                                5 days ago
                                                            </span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            All the Lorem Ipsum generators
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a href="javascript:;">
                                            <div className="text-center msg-footer">
                                                View All Messages
                                            </div>
                                        </a>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                                </ul>
                            </div>

                            {/* <Dropdown className="user-box">
                            <Dropdown.Toggle
                                as={NavLink}
                                className="d-flex align-items-center nav-link dropdown-toggle-nocaret"
                            >
                                <img
                                    src={profile}
                                    className="user-img"
                                    alt="user avatar"
                                />
                                <div className="user-info ps-3">
                                    <p className="user-name mb-0">Pauline Seitz</p>
                                    <p className="designattion mb-0">Web Designer</p>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="javascript:;">
                                        <BiUser size={16} className="me-2" />
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:;">
                                        <BiCog size={16} className="me-2" />
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:;">
                                        <BiHomeCircle size={16} className="me-2" />
                                        <span>Dashboard</span>
                                    </a>
                                </li>

                                <li>
                                    <div className="dropdown-divider mb-0" />
                                </li>
                                <li>
                                    <a
                                        role="button"
                                        className="dropdown-item"
                                        onClick={handleLogout}
                                    >
                                        <BiLogOutCircle size={16} className="me-2" />
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown> */}
                        </nav>
                    </div>
                </header>

                <div className="page-wrapper">
                    <div className="page-content">
                        <Outlet />
                    </div>
                </div>

                <div className="overlay toggle-icon"></div>

                {/* <footer className="page-footer">
      <p className="mb-0">Copyright © 2023. All right reserved.</p>
    </footer> */}
            </div>


        </>
    )
}

export default Sidebar