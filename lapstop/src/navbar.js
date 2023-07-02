import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from "mdb-react-ui-kit";
import { Outlet, useNavigate } from "react-router-dom";
export default function Appbar() {
    const [showBasic, setShowBasic] = useState(false);
    const [car, setCar] = useState("");
    const nav = useNavigate();
    const Email = localStorage.getItem("Email");
    const HandleLogout = () => {
        localStorage.setItem("Email", null)
        nav("/")
    }
    const HandleLogin = (e) => {
        if (Email !== "null") {
            return (
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="" onClick={HandleLogout}>
                        Logout
                    </MDBNavbarLink>
                </MDBNavbarItem>
            );
        }
        else {
            return (
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="" href="/login">
                        Login
                    </MDBNavbarLink>
                </MDBNavbarItem>
            );

        }
    }
    const HandleAdmin = (e) => {
        if (Email === "admin@gmail.com") {
            console.log("Appbar", Email);
            return (
                <>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current="page" href="/add">
                            Add Laptop
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current="page" href="/Adminalllap">
                            AllLaptops
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                </>
            );
        } else {
            return (
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/products">
                        Products
                    </MDBNavbarLink>
                </MDBNavbarItem>
            );
        }
    };
    return (
        <>
            <MDBNavbar expand="lg" dark overflow-hidden bgColor="black" static>
                <MDBContainer fluid>
                    <MDBNavbarBrand href="/">LaptopSync</MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current="page" href="/home">
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current="" href="/search">
                                    Search for a Laptop
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <HandleAdmin />
                            <HandleLogin />
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <Outlet />
        </>
    );
}