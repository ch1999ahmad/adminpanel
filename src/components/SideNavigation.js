import React from 'react';
import logo from "../assets/img2.jpg";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/authActions';

const TopNavigation = (props) => {

    const logout=()=>{
        window.history.go(-(window.history.length-1))
        props.logout()
    }
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="Grocery Cart" className="img-fluid" src={logo} />
                </a>
            <MDBListGroup className="list-group-flush">
                <a href="/products" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-shopping-basket" className="mr-3" />
                        Products
                    </MDBListGroupItem>
                </a>
                <a href="/Addproduct" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-user-friends" className="mr-3" />
                        Add products
                    </MDBListGroupItem>
                </a>

                <a href="/catogaries" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-bars" className="mr-3" />
                        Catogories
                    </MDBListGroupItem>
                </a>
                <a href="/AddCategory" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-user-friends" className="mr-3" />
                        Add Category
                    </MDBListGroupItem>
                </a>
                <a href="/order" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-shopping-cart" className="mr-3" />
                        Order
                    </MDBListGroupItem>
                </a>
                <a href="/user" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="fas fa-user-friends" className="mr-3" />
                        Users
                    </MDBListGroupItem>
                </a>

                <div onClick={logout} className="row justify-content-center mt-5 mr-3">
                    <MDBBtn className="Btn">Log out</MDBBtn>
                </div>
            </MDBListGroup>
        </div>
    );
}

const mapState=()=>{
    
}
const mapDispatch=(dispatch)=>{
    return {
        logout:()=>dispatch(logout())
    }

}

export default connect(mapState,mapDispatch) (TopNavigation);