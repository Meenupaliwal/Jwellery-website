import React from "react";
import "../css/styles.css"; // adjust path if needed
import PageTitleImage from "../components/PageTitleImage";

const MyAccount = () => {
  return (
    <>
    <PageTitleImage
  title="MY ACCOUNT"
  subtitle="MANAGE YOUR ORDERS, DETAILS & WISHLIST"
  image="images/slider/slider-24.jpg"
  buttonText="Go to Shop"
  buttonLink="/shop"
/>

    <section className="my-account-section py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">My Account</h2>
        <div className="row">
          {/* Sidebar Navigation */}
          <div className="col-lg-3 mb-4">
            <div className="account-sidebar border rounded-3 shadow-sm p-3">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#profile" className="text-decoration-none d-block py-2 fw-semibold text-dark">
                    👤 Profile Details
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#orders" className="text-decoration-none d-block py-2 fw-semibold text-dark">
                    📦 My Orders
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#address" className="text-decoration-none d-block py-2 fw-semibold text-dark">
                    🏠 Saved Addresses
                  </a>
                </li>
                <li>
                  <a href="#logout" className="text-decoration-none d-block py-2 fw-semibold text-danger">
                    🚪 Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            {/* Profile Details */}
            <div id="profile" className="account-box border rounded-3 shadow-sm p-4 mb-4">
              <h5 className="fw-bold mb-3">Profile Information</h5>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" defaultValue="Divyanshi Paliwal" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" defaultValue="divyanshi@example.com" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" defaultValue="+91 9876543210" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" defaultValue="********" />
                  </div>
                </div>
                <button className="tf-btn animate-btn bg-dark text-white px-4 py-2 rounded-3">
                  Save Changes
                </button>
              </form>
            </div>

            {/* Orders Section */}
            <div id="orders" className="account-box border rounded-3 shadow-sm p-4 mb-4">
              <h5 className="fw-bold mb-3">My Orders</h5>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#12345</td>
                      <td>2 Nov 2025</td>
                      <td>
                        <span className="badge bg-success">Delivered</span>
                      </td>
                      <td>₹2,999</td>
                      <td>
                        <a href="/order-details" className="btn btn-sm btn-outline-dark">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#12346</td>
                      <td>28 Oct 2025</td>
                      <td>
                        <span className="badge bg-warning text-dark">Processing</span>
                      </td>
                      <td>₹1,499</td>
                      <td>
                        <a href="/order-details" className="btn btn-sm btn-outline-dark">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Saved Addresses */}
            <div id="address" className="account-box border rounded-3 shadow-sm p-4">
              <h5 className="fw-bold mb-3">Saved Addresses</h5>
              <div className="address-card border p-3 rounded-3 mb-3">
                <h6 className="fw-semibold">Home</h6>
                <p className="mb-1">
                  21, Rose Villa, Malviya Nagar, Jaipur, Rajasthan, 302017
                </p>
                <p className="small text-muted mb-2">Phone: +91 9876543210</p>
                <button className="btn btn-sm btn-outline-dark">Edit</button>
              </div>

              <button className="tf-btn animate-btn bg-dark text-white px-4 py-2 rounded-3">
                Add New Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MyAccount;
