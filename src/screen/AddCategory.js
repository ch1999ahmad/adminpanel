
import React from "react";
import '../styles/adminlte.min.css'
import '../styles/dataTables.bootstrap4.min.css'
import '../styles/responsive.bootstrap4.min.css'
import '../styles/index.css'
// import ResponsiveDrawer from './ResponsiveDrawer'
// import { Alert } from '@material-ui/lab';
import { connect } from "react-redux";
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

class AddCategory extends React.Component {
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
            categoryID:"",
            description:"",
            price:"",
            image:""
           
        }
    }



    uploadImage = async (e) => {
        e.preventDefault()
        let file = this.state.image
        let folderName = 'categories'
        let fileName = this.state.name + '_' + new Date().toISOString()
        var ref = firebase.storage().ref().child(folderName + "/" + fileName);
        ref.put(file).then(() => {
            firebase.storage().ref().child(folderName + "/" + fileName).getDownloadURL()
                .then((URL) => {
                    this.setState({ image: URL }, () => {
                        this.AddCategory()


                    })

                })
        })

    }

AddCategory = async (e) => {
    let param = {
        "name": this.state.name,
        "categoryID": this.state.categoryID,
        "description": this.state.description,
        "price": this.state.price,
        "image": this.state.image,
        // "categoryID": this.state.categoryID,
       
    }
    let response = await api(path.categoriesadd, "POST", param)
    // alert(response.message)
    console.log(response.message)
    alert(response.message)
}

pickImage = (e) => {
    e.preventDefault()
    if (e.target.files)
        this.setState({ image: e.target.files[0] })
}






    // componentDidMount() {
    //     const search = this.props.location.search; // returns the URL query String
    //     const params = new URLSearchParams(search);
    //     const id = parseInt(params.get('id'));
    //     if (id) {
    //         let item = this.props.categories.filter(c => c.categoryID === id)
    //         item = item[0];

    //         this.setState({
    //             categoryName: item.categoryName, categoryNameArabic: item.categoryNameArabic,
    //             categoryDescription: item.categoryDescription,
    //             categoryDescriptionArabic: item.categoryDescriptionArabic,
    //             categoryID: item.categoryID, firebaseLink: item.categoryImage, edit: true,
    //         })
    //     }
    // }
// use in previous
    // uploadHandler = (e) => {
    //     e.preventDefault();
    //     this.setState({ message: false })
    //     if (this.props.loading)
    //         return;

    //     if (this.state.firebaseLink) {
    //         return this.addCategory(this.state.firebaseLink)
    //     }

    //     if (!this.state.categoryImage) {
    //         return alert("please selecet a image")
    //     }

    //     this.props.setLoading(true)
    //     let file = this.state.categoryImage
    //     let name = this.state.categoryName
    //     let dir = 'category'
    //     let t = this;
    //     const uploadTask = firebase.storage().ref(dir + '/' + name).put(file)
    //     uploadTask.on('state_changed', function (snapshot) {
    //         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         t.setState({ progress })
    //     }, function (error) {
    //         return alert(error.message)
    //     }, function () {
    //         firebase.storage().ref(dir).child(name).getDownloadURL()
    //             .then(url => {
    //                 t.addCategory(url)
    //             })
    //     });


    // }

    // addCategory = async (url) => {
    //     this.props.setLoading(true)
    //     await this.setState({ firebaseLink: url })
    //     let category = {
    //         categoryID: this.state.categoryID,
    //         categoryName: this.state.categoryName,

    //         categoryDescription: this.state.categoryDescription,

    //         categoryImage: this.state.firebaseLink,
    //     }

        //     let res;

        //     if (this.state.edit) {
        //         res = await api.editCategory(this.props.token, category)
        //     }
        //     else {   

        //         res = await api.addCategory(this.props.token, category)
        //     }
        //     if (res) {
        //         this.setState({ message: 'Operation successfull' })
        //         await this.props._getCategory()
        //         if (this.state.edit) {
        //             window.location.reload()
        //         }
        //     }
        //     this.setState({ progress: 0 })
        //     this.props.setLoading(false)
        // }
    // }

    render() {
       
        
            console.log(this.props.categories)
        


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
                                                        <label> Name</label>
                                                        <input type="text" name="name" placeholder="Add Categories" required class="form-control" onChange={(e) => this.setState({ name: e.target.value })}></input>
    
    
                                                    </div>
    
                                                  
    
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

export default AddCategory