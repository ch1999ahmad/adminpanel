
import React from "react";
import '../styles/adminlte.min.css'
import '../styles/dataTables.bootstrap4.min.css'
import '../styles/responsive.bootstrap4.min.css'
import '../styles/index.css'
// import ResponsiveDrawer from './ResponsiveDrawer'
// import { Alert } from '@material-ui/lab';
// import { connect } from "react-redux";
// import { set_loading } from "../Store/actions/globalActions";
import firebase from "firebase"
// import api from "../services/api";
// import { _getCategories } from "../Store/middlewares/appMiddleware";
// import { Loading } from '../components/Icons'
import { ProgressBar } from 'react-bootstrap'
import SideNavigation from '../components/SideNavigation'
import api from "../api/api";
import path from "../api/path";
import Header from "../components/Header";

class Addproduct extends React.Component {
    constructor() {
        super();

        this.state = {
            // categoryName: "",
            // categoryNameArabic: "",
            // categoryDescription: "",
            // categoryDescriptionArabic: "",
            // categoryImage: "",
            // message: '',
            // firebaseLink: '',
            // progress: 0, edit: false,
            name: "",
            categoryID: "",
            description: "",
            price: "",
            image: ""
        }
    }

    uploadImage = async (e) => {
        e.preventDefault()
        let file = this.state.image
        let folderName = 'item'
        let fileName = this.state.name + '_' + new Date().toISOString()
        var ref = firebase.storage().ref().child(folderName + "/" + fileName);
        ref.put(file).then(() => {
            firebase.storage().ref().child(folderName + "/" + fileName).getDownloadURL()
                .then((URL) => {
                    this.setState({ image: URL }, () => {
                        this.addProduct()


                    })

                })
        })
    }


    addProduct = async (e) => {
        // e.preventDefault()
        let param = {
            "name": this.state.name,

            "categoryID": this.state.categoryID,
            "description": this.state.description,
            "price": this.state.price,
            "image": this.state.image,
        }
        let response = await api(path.itemsadd, "POST", param)
        // alert(response.message)
        console.log(response.message)
        alert(response.message)
    }

    pickImage = (e) => {
        e.preventDefault()
        if (e.target.files)
            this.setState({ image: e.target.files[0] })
    }




    render() {


        // console.log(this.props.items)



        return (
            <div className="flexible-content">
            <Header/>
                <SideNavigation />
                <main id="content" className="p-5">
                    <div className="dashboard">
                        {/* <ResponsiveDrawer /> */}
                        <section class="content-admin" style={{ paddingTop: 100, position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 0, width: '100%' }}>
                                <ProgressBar now={this.state.progress} style={{ opacity: this.state.progress, height: 5 }} />
                            </div>

                            {
                                this.state.message &&
                                <div style={{ position: 'absolute', top: 0 }}>
                                    {/* <Alert onClose={() => this.setState({ message: false })}>{this.state.message}</Alert> */}
                                </div>
                            }
                            <div class="container-fluid">
                                <form onSubmit={this.uploadImage} >
                                    <div class="row">
                                        <div class="col-md-12">
                                            <input type="hidden" name="_token" value="hrxeTL0t5hnBVb8Q3Q4vTc42CXU88qyd320Luzkv"></input>
                                            <div className="row">
                                                <div class="form-group col-md-6">
                                                    <label>Product Name</label>
                                                    <input type="text" name="name" placeholder="john etc" required class="form-control" onChange={(e) => this.setState({ name: e.target.value })}></input>


                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label>Price</label>
                                                    <input type="text" name="name" placeholder="69$" required class="form-control" onChange={(e) => this.setState({ price: e.target.value })}></input>


                                                </div>
                                                {/* <div class="form-group col-md-6">
                                                    <label>Product ID</label>
                                                    <input type="text" name="name" placeholder="0122" required class="form-control" onChange={(e) => this.setState({ categoryID: e.target.value })}></input>


                                                </div>  */}
                                                


                                                <div className="dropdown form-group col-md-6">
                                                    
                                                <label>Categories</label>
                                                    <select className="form-control" value={this.state.Technology} onChange={this.Changetechnology}  onChange={(e) => this.setState({ categoryID: e.target.value })}>
                                                        <option>Toys</option>
                                                        <option>Accessories</option>
                                                        <option>Electronics</option>
                                                        <option>Crockeries</option>
                                                        <option>Fruits</option>
                                                        <option>Vegetables</option>
                                                        <option>Men's Wear</option>
                                                        <option>Women Wear</option>
                                                        <option>Sports</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className='row'>
                                                <div class="form-group col-md-5">
                                                    <label>Description</label>
                                                    <textarea name="description" required class="form-control" onChange={(e) => this.setState({ description: e.target.value })} cols="6" rows="6"></textarea>
                                                </div>

                                            </div>
                                            <div class="form-group">
                                                <label htmlFor="file-loader">Select Image</label>
                                                <input type="file" onChange={this.pickImage} />
                                            </div>
                                            {/* <div class="form-group">
                                                <label htmlFor="file-loader">Select Image</label>
                                                <input maxLength='10' disabled value={this.state.image?.name ? this.state.image.name : this.state.firebaseLink} class="input form-control lenght" ></input>
                                                <input style={{ display: 'none' }} id="file-loader" type="file" class="input form-control" name="category_bottle" accept="image/*" onChange={(e) => this.setState({ image: e.target.files[0], firebaseLink: '' })}></input>
                                            </div> */}

                                            <button type="submit" class="btn btn-success">save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        )

    }
}

// const mapState = state => {
//     return {
//         loading: state.globalReducer.loading,
//         categories: state.appReducer.categories,
//     }
// }
// const mapDispatch = dispatch => {
//     return {
//         setLoading: bol => dispatch(set_loading(bol)),
//         _getCategory: () => dispatch(_getCategories())
//     }
// }

export default Addproduct