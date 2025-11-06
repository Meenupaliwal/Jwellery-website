import React from "react";
import PageTitleImage from "../components/PageTitleImage";

const Checkout = () => {
  return (
<>
<PageTitleImage
  title="CHECKOUT"
  subtitle="COMPLETE YOUR PURCHASE SECURELY"
  image="images/Gold-jwellery/slider-24.jpg"
  buttonText="Back to Cart"
  buttonLink="/cart"
/>

<section className="flat-spacing">
    <div className="container">
        <div className="row">
                <div className="col-lg-7">
      <div className="tf-page-checkout mb-lg-0">
        {/* Coupon Section */}
        <div className="wrap-coupon">
          <h5 className="mb-12">
            Have a coupon? <span className="text-primary">Enter your code</span>
          </h5>
          <form>
            <div className="ip-discount-code mb-0 d-flex">
              <input
                type="text"
                placeholder="Enter your code"
                required
                className="form-control me-2"
              />
              <button className="tf-btn animate-btn" type="submit">
                Apply Code
              </button>
            </div>
          </form>
        </div>

        {/* Checkout Form */}
        <form className="tf-checkout-cart-main mt-4">
          {/* Information Section */}
          <div className="box-ip-checkout estimate-shipping">
            <h2 className="title type-semibold">Information</h2>
            <div className="form_content">
              <div className="cols tf-grid-layout sm-col-2">
                <fieldset>
                  <input
                    type="text"
                    name="first-name_infor"
                    placeholder="First name"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    name="last-name_infor"
                    placeholder="Last name"
                    required
                  />
                </fieldset>
              </div>

              <div className="cols tf-grid-layout sm-col-2">
                <fieldset>
                  <input
                    type="email"
                    name="email_infor"
                    placeholder="Email address"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="number"
                    name="phone_infor"
                    placeholder="Phone number"
                    required
                  />
                </fieldset>
              </div>

              <fieldset>
                <div className="tf-select">
                  <select
                    className="w-100"
                    id="shipping-country-form"
                    name="address[country]"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Choose country / Region
                    </option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Canada">Canada</option>
                    <option value="Czech Republic">Czechia</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="Mexico">Mexico</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Spain">Spain</option>
                    <option value="Italy">Italy</option>
                    <option value="Vietnam">Vietnam</option>
                  </select>
                </div>
              </fieldset>

              <div className="cols tf-grid-layout sm-col-2">
                <fieldset>
                  <input
                    type="text"
                    name="city_infor"
                    placeholder="Town/City"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    name="street_infor"
                    placeholder="Street"
                    required
                  />
                </fieldset>
              </div>

              <div className="cols tf-grid-layout sm-col-2">
                <fieldset>
                  <div className="tf-select">
                    <select
                      id="shipping-province-form"
                      name="address[province]"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Choose State
                      </option>
                    </select>
                  </div>
                </fieldset>
                <fieldset>
                  <input
                    type="number"
                    name="number_card"
                    placeholder="Postal code"
                    required
                  />
                </fieldset>
              </div>

              <textarea
                placeholder="Note about your order"
                style={{ height: "180px" }}
              ></textarea>
            </div>
          </div>

          {/* Payment Options */}
          <div className="box-ip-payment">
            <h2 className="title type-semibold">Choose Payment Option</h2>
            <div className="payment-method-box" id="payment-method-box">
              {/* Direct Bank */}
              <div className="payment_accordion">
                <label
                  htmlFor="direct"
                  className="payment_check checkbox-wrap"
                  data-bs-toggle="collapse"
                  data-bs-target="#direct-bank"
                  aria-controls="direct-bank"
                >
                  <input
                    type="radio"
                    name="payment-method"
                    className="tf-check-rounded style-2"
                    id="direct"
                    defaultChecked
                  />
                  <span className="pay-title">Direct bank transfer</span>
                </label>
                <div
                  id="direct-bank"
                  className="collapse show"
                  data-bs-parent="#payment-method-box"
                >
                  <p className="payment_body h6">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>

              {/* Credit Card */}
              <div className="payment_accordion">
                <label
                  htmlFor="credit-card"
                  className="payment_check checkbox-wrap"
                  data-bs-toggle="collapse"
                  data-bs-target="#credit-card-payment"
                  aria-controls="credit-card-payment"
                >
                  <input
                    type="radio"
                    name="payment-method"
                    className="tf-check-rounded style-2"
                    id="credit-card"
                  />
                  <span className="pay-title">Credit card</span>
                </label>
                <div
                  id="credit-card-payment"
                  className="collapse"
                  data-bs-parent="#payment-method-box"
                >
                  <div className="payment_body form_content">
                    <fieldset>
                      <input type="text" placeholder="Name on card" />
                    </fieldset>
                    <fieldset className="ip-card">
                      <input type="number" placeholder="Card numbers" />
                      <div className="card-logo">
                        <img
                          src="images/payment/visa-pay.svg"
                          alt="Payment Logo"
                        />
                        <img
                          src="images/payment/master-pay.svg"
                          alt="Payment Logo"
                        />
                        <img
                          src="images/payment/amex-pay.svg"
                          alt="Payment Logo"
                        />
                      </div>
                    </fieldset>
                    <div className="cols tf-grid-layout sm-col-2">
                      <fieldset>
                        <input type="date" />
                      </fieldset>
                      <fieldset>
                        <input type="number" placeholder="Postal code" />
                      </fieldset>
                    </div>
                    <div className="checkbox-wrap">
                      <input
                        id="save"
                        type="checkbox"
                        className="tf-check style-2"
                      />
                      <label htmlFor="save" className="h6">
                        Save card details
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cash on Delivery */}
              <div className="payment_accordion">
                <label
                  htmlFor="cash-on"
                  className="payment_check checkbox-wrap"
                  data-bs-toggle="collapse"
                  data-bs-target="#cash-on-payment"
                  aria-controls="cash-on-payment"
                >
                  <input
                    type="radio"
                    name="payment-method"
                    className="tf-check-rounded style-2"
                    id="cash-on"
                  />
                  <span className="pay-title">Cash On Delivery</span>
                </label>
                <div
                  id="cash-on-payment"
                  className="collapse"
                  data-bs-parent="#payment-method-box"
                ></div>
              </div>

              {/* Paypal */}
              <div className="payment_accordion">
                <label
                  htmlFor="paypal"
                  className="payment_check checkbox-wrap"
                  data-bs-toggle="collapse"
                  data-bs-target="#paypal-payment"
                  aria-controls="paypal-payment"
                >
                  <input
                    type="radio"
                    name="payment-method"
                    className="tf-check-rounded style-2"
                    id="paypal"
                  />
                  <span className="pay-title">Paypal</span>
                </label>
                <div
                  id="paypal-payment"
                  className="collapse"
                  data-bs-parent="#payment-method-box"
                ></div>
              </div>
            </div>

            <p className="h6 mb-20">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            <div className="checkbox-wrap">
              <input
                id="agree"
                type="checkbox"
                className="tf-check style-2"
              />
              <label htmlFor="agree" className="h6">
                I have read and agree to the website{" "}
                <a href="terms" className="text-primary">terms and conditions *</a>
              </label>
            </div>
          </div>

          {/* Shipping */}
          <div className="box-ip-shipping">
            <h2 className="title type-semibold">Shipping Method</h2>
            <label htmlFor="freeship" className="check-ship mb-12">
              <input
                type="radio"
                id="freeship"
                className="tf-check-rounded style-2 line-black"
                name="checkshipping"
                defaultChecked
              />
              <span className="text h6">
                <span>Free shipping (Estimate in 01/05 - 05/05/2025)</span>
                <span className="price">$00.00</span>
              </span>
            </label>

            <label htmlFor="express" className="check-ship">
              <input
                type="radio"
                id="express"
                className="tf-check-rounded style-2 line-black"
                name="checkshipping"
              />
              <span className="text h6">
                <span>Express shipping (Estimate in 01/05 - 05/05/2025)</span>
                <span className="price fw-medium">$5.00</span>
              </span>
            </label>
          </div>

          <div className="button_submit mt-4">
            <button type="submit" className="tf-btn animate-btn w-100">
              Payment
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="col-lg-5">
  <div className="fl-sidebar-cart sticky-top" style={{ top: "15px" }}>
    <div className="box-your-order">
      <h2 className="title type-semibold">Your Order</h2>

      <ul className="list-order-product">
        <li className="order-item">
          <a href="product/productdetail" className="img-prd">
            <img
              className="ls-is-cached lazyloaded"
              src="images/Gold-jwellery/ring.jpeg"
              data-src="images/Gold-jwellery/ring.jpeg"
              alt="nosepin"
            />
          </a>
          <div className="infor-prd">
            <h6 className="prd_name">
              <a href="product/productdetail" className="link">
                Gold Ring
              </a>
            </h6>
          </div>
          <p className="price-prd h6">$22.99</p>
        </li>

        <li className="order-item">
          <a href="product/productdetail" className="img-prd">
            <img
              className="ls-is-cached lazyloaded"
              src="images/Gold-jwellery/chauker.jpeg"
              data-src="images/Gold-jwellery/chauker.jpeg"
              alt="T Shirt"
            />
          </a>
          <div className="infor-prd">
            <h6 className="prd_name">
              <a href="product/productdetail" className="link">
                Chauker
              </a>
            </h6>
          </div>
          <p className="price-prd h6">$59.99</p>
        </li>

        <li className="order-item">
          <a href="product/productdetail" className="img-prd">
            <img
              className="ls-is-cached lazyloaded"
              src="images/Gold-jwellery/nojpin.jpeg"
              data-src="images/Gold-jwellery/nojpin.jpeg"
              alt="nosepin"
            />
          </a>
          <div className="infor-prd">
            <h6 className="prd_name">
              <a href="product/productdetail" className="link">
               Nosepin
              </a>
            </h6>
          </div>
          <p className="price-prd h6">$99.99</p>
        </li>
      </ul>

      <ul className="list-total">
        <li className="total-item h6">
          <span className="fw-bold text-black">Discounts</span>
          <span>$20.00</span>
        </li>
        <li className="total-item h6">
          <span className="fw-bold text-black">Shipping</span>
          <span>Free</span>
        </li>
      </ul>

      <div className="last-total h5 fw-medium text-black">
        <span>Total</span>
        <span>$60.00</span>
      </div>
    </div>
  </div>
</div>

        </div>
    </div>
</section>

</>
  );
};

export default Checkout;
