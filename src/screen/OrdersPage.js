import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, } from 'mdbreact';
import SideNavigation from "../components/SideNavigation"

const OrdersPage = () => {
  return (
    <div className="flexible-content">
        <SideNavigation />
        <main id="content" className="p-5">
    <>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard className="mt-2 ">
            <MDBView className="gradient-card-header brown darken-2">
              <h4 className="h4-responsive text-white font-bold">Orders</h4>
            </MDBView>
            <MDBCardBody className="scrolling-wrapper">

              <h3 className=" text-left"><strong>Check all your order details here.</strong></h3>
        
               
              <MDBTable striped>
                <MDBTableHead>
                  <tr>
                    <th>Id</th>
                    <th>created_at</th>
                    <th>AddressType</th>
                    <th>Deliverd To</th>
                    <th>Products Id</th>
                    <th>productDetails</th>
                    <th>User Id</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>1</td>
                    <td>Thu Nov 26 2020 19:03:03</td>
                    <td>Home</td>
                    <td>Mr junaid</td>
                    <td>1gWuicZxgdIvo0R6jYsW</td>
                    <td>Dove Shampoo=2,Corn Flakes=1</td>
                    <td>TssVjz7IlmNEHGVHII</td>

                  </tr>
                  <tr>
                    <td>2</td>

                    <td>Wed Dec 12 2020 17:11:51</td>
                    <td>Home</td>
                    <td>Mr Ahmad</td>
                    <td>1gWuicZxgdIvo0R6jYsW</td>
                    <td>Corn Flakes=9,Dove Shampoo=3,Apple=5</td>
                    <td>3lKiUK296ocueT4d</td>

                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sat Jan 09 2020 06:56:36</td>
                    <td>Home</td>
                    <td>Mr Sahaab</td>
                    <td>1gWuicZxgdIvo0R6jYsW</td>
                    <td>Apple=1,Corn Flakes=1</td>
                    <td>LKvcu2KfMyTx4uL</td>

                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Wed Feb 17 2021 02:04:24</td>
                    <td>Home</td>
                    <td>Mr Husnain</td>
                    <td>1gWuicZxgdIvo0R6jYsW</td>
                    <td>Dove Shampoo=2</td>
                    <td>3lKiUK296ocueT4</td>

                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Thu Mar 11 2021 03:43:10</td>
                    <td>Home</td>
                    <td>Mr Usama</td>
                    <td>1gWuicZxgdIvo0R6jYsW</td>
                    <td>Corn Flakes=4</td>
                    <td>YD2lhm4WOsMg</td>

                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
    </main>
    </div>
  )
}

export default OrdersPage;






