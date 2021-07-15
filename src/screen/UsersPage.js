import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, } from 'mdbreact';
import SideNavigation from '../components/SideNavigation'
import { connect } from 'react-redux';
import api from '../api/api'
import { _getUsers } from '../store/middlewares/appMiddleware';
import Header from "../components/Header";

class UsersPage extends React.Component {
  constructor() {
    super();
    this.state = {
        name: '',
        email: ' ',
        phone: '',

    }
}
async componentDidMount(){
   let res = await this.props._getUser()
}
getuser = async (e) => {
  e.preventDefault()
  // this.props.setLoading(true)
  let res = await this.props._getUsers({
     
      } )
//   if (res.success === true) {
      // window.location ="App"
      
      // if (this.props.admin) {
      //     this.props.admin()
      // }
      // else {
      //     window.history.back()

      // }
//   }
  // this.props.setLoading(false)
}
  // state = {
     
  //   orderdata:[],
  
  // }
// async componentDidMount(){
//     console.log(this.props);

//     let customer = await api.getUsers()
//     console.log(customer);
//     this.setState({orderdata:customer.result})
// }

  render(){
    // console.log(this.props.users)
    // alert(this.props.users)
  return(
    <div className = "flexible-content" >
    <Header/>
        <SideNavigation />
        <main id="content" className="p-5">
        <div className="dashboard" style={{ paddingTop: 100 }}>
                {/* <ResponsiveDrawer /> */}
                <section class="content-admin">

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <tfooter>
                                </tfooter>
                                <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div class="row"><div class="col-sm-12 col-md-6">
                                        {/* <div class="dataTables_length" id="example1_length">
                                            <label>Show
                                                <select class="custom-select custom-select-sm form-control form-control-sm">
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select>
                                                     entries
                                            </label>
                                        </div> */}
                                    </div>
                                        {/* <div class="col-sm-12 col-md-6">
                                            <div id="example1_filter" class="dataTables_filter">
                                                <label>Search:
                                                                 <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example1"></input>
                                                </label>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <table id="example1" class="table table-bordered table-hover dataTable no-footer dtr-inline" role="grid" aria-describedby="example1_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th className='center' rowspan="1" colspan="1"  >No.</th>
                                                        <th className='center' rowspan="1" colspan="1"  >Image</th>
                                                        <th className='center' rowspan="1" colspan="1"  >Email</th>
                                                        <th className='center' rowspan="1" colspan="1"  >City</th>
                                                        <th className='center' rowspan="1" colspan="1"  >phone</th>
                                                        <th className='center' rowspan="1" colspan="1"  >First Name</th>
                                                        <th className='center' rowspan="1" colspan="1"  >Last Name</th>
                                                        {/* <th className='center' rowspan="1" colspan="1"  >Age</th> */}
                                                        {/* <th className='center' rowspan="1" colspan="1"  >Date</th> */}
                                                        {/* <th className='center' rowspan="1" colspan="1"  >Date</th> */}
                                                       
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.props.users.map((u, index) =>
                                                            <tr role="row" class="odd">
                                                                <td className='center' class="sorting_1">{index + 1}</td>
                                                                <td className='center' style={{ textAlign: 'center' }}><img style={{ width: 100 }} src={u.avatar} alt='noIamge' /></td>
                                                                <td className='center'>{u.email}</td>
                                                                <td className='center'>{u.city}</td>
                                                                <td className='center'>{u.phone}</td>
                                                                <td className='center'>{u.firstName}</td>
                                                                <td className='center'>{u.lastName}</td>
                                                               
                                                                {/* <td className='center'>{u.creationDate.slice(0, 15)}</td> */}
                                                               </tr>
                                                        )   
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-5">
                                            <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">
                                                Showing 1 to 10 of {this.props.users.length} entries
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-7">
                                            <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                                <ul class="pagination">
                                                    <li class="paginate_button page-item previous disabled" id="example1_previous">
                                                        <a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" class="page-link">
                                                            Previous
                                                        </a>
                                                    </li>
                                                    <li class="paginate_button page-item active">
                                                        <a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" class="page-link">
                                                            1
                                                    </a>
                                                    </li>
                                                    <li class="paginate_button page-item ">
                                                        <a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0" class="page-link">
                                                            2
                                                            </a>
                                                    </li>
                                                    <li class="paginate_button page-item next" id="example1_next">
                                                        <a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0" class="page-link">
                                                            Next</a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        
    </main>
    </div>  
  
  )
}
}



// export default UsersPage;
const mapState = state => {
  return {
    logged: state.authReducer.logged,
    // user: state.authReducer.user,
    users: state.appReducer.users,

  }
}
const mapDispatch = dispatch => {
  return {
    // _login: (param) => dispatch(_login(param)),
    // setLoading: (bol) => dispatch(_setLoading(bol)),
    _getUser: () => dispatch(_getUsers())


  }
}
export default connect(mapState, mapDispatch)(UsersPage)






