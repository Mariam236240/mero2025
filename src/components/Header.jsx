import React, { useState } from "react";

export default function Header() {
const [openPopup, setOpenPopup] = useState(false);
const [openCart, setOpenCart] = useState(false);

return (
<> <style>{`
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; }
.header { background: #000; color: white; padding: 15px 40px; display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 24px; font-weight: bold; letter-spacing: 2px; }
.nav { display: flex; gap: 30px; }
.nav a { color: white; text-decoration: none; font-size: 13px; font-weight: 500; letter-spacing: 0.5px; transition: opacity 0.2s; }
.nav a:hover { opacity: 0.7; }
.icons { display: flex; align-items: center; gap: 20px; }
.icons svg, .flag-icon { cursor: pointer; transition: opacity 0.2s; }
.icons svg:hover, .flag-icon:hover { opacity: 0.7; }
.flag-icon { width: 32px; }


    /* Country Popup Styles */
    .country-popup-backdrop { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 9999; }
    .country-popup { background: white; padding: 30px; width: 400px; max-width: 90%; border-radius: 8px; position: relative; color: #000; }
    .close-btn { position: absolute; right: 15px; top: 15px; font-size: 24px; cursor: pointer; color: #666; background: none; border: none; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; transition: color 0.2s; }
    .close-btn:hover { color: #000; }
    .country-popup h2 { margin-bottom: 15px; font-size: 20px; font-weight: 600; }
    .country-popup p { margin-bottom: 20px; color: #666; font-size: 14px; }
    .country-popup label { display: block; margin-bottom: 8px; font-weight: 500; font-size: 14px; }
    .country-popup select { width: 100%; padding: 12px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; cursor: pointer; }
    .country-popup select:focus { outline: none; border-color: #000; }
    .shop-btn { width: 100%; padding: 14px; background: #000; color: white; border: none; cursor: pointer; font-size: 14px; font-weight: 600; letter-spacing: 1px; border-radius: 4px; transition: background 0.2s; }
    .shop-btn:hover { background: #333; }

    /* Cart Popup Styles */
    .cart-base { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 10000; display: flex; }
    .cart-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); opacity: 1; }
    .cart-content { margin-inline-start: auto; transform: translateX(0px); background: white; width: 380px; max-width: 90vw; height: 100%; display: flex; flex-direction: column; position: relative; }
    .cart-header { padding: 20px; border-bottom: 1px solid #e5e5e5; display: flex; justify-content: space-between; align-items: center; }
    .cart-close-button { background: none; border: none; cursor: pointer; padding: 8px; color: #666; display: flex; align-items: center; justify-content: center; transition: color 0.2s; }
    .cart-close-button:hover { color: #000; }
    .icon-close { width: 14px; height: 14px; }
    .cart-body { flex: 1; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
    .cart-title { font-size: 24px; font-weight: 600; margin-bottom: 20px; letter-spacing: 1px; }
    .cart-empty-message { font-size: 16px; color: #666; margin-bottom: 30px; line-height: 1.5; }
    .start-shopping-btn { width: 100%; padding: 16px; background: #000; color: white; border: none; cursor: pointer; font-size: 14px; font-weight: 600; letter-spacing: 1px; border-radius: 6px; transition: background 0.2s; text-transform: uppercase; }
    .start-shopping-btn:hover { background: #333; }
    .cart-footer { padding: 20px; border-top: 1px solid #e5e5e5; opacity: 1; transform: translateY(0px); }

    @media (max-width: 768px) {
      .header { padding: 15px 20px; }
      .nav { display: none; }
      .icons { gap: 15px; }
      .cart-content { width: 100%; }
    }
  `}</style>

  <header className="header">
    <div className="logo">TWENTIES 20's</div>

    <nav className="nav">
      <a href="#">SHOP ALL</a>
      <a href="#">TWENTIES 20's SALE</a>
      <a href="#">WOMEN SALE</a>
      <a href="#">BLACK WEEK COLLECTION</a>
    </nav>

    <div className="icons">
      <img
        src="https://flagcdn.com/w40/eg.png"
        alt="Egypt Flag"
        className="flag-icon"
        onClick={() => setOpenPopup(true)}
      />

      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ cursor: "pointer" }}
        onClick={() => console.log("Search clicked")}
      >
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"></path>
        <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002"></path>
      </svg>

      {/* Shopping Bag */}
      <svg 
        width="46" 
        height="44" 
        viewBox="0 0 46 44" 
        fill="none"
        onClick={() => setOpenCart(true)}
        style={{ cursor: "pointer" }}
      >
        <path
          d="M115.0382,44.1358c2.2311,0,3.0279.9347,2.664.3046-1.4338,8.8578-2.7435,17.7411-4.1532,26.627-.1342.8349-.4684,1.8042-.9366,2.3434-.668,0.766-.177,1.2363-.8874,1.2711-4.452.167-18.20.134-20.25.067-.9315,0-1.4591-.7003-1.355-.3644.4422-3.1868,2.175-13.298 2.471-15.204.1671-1.208-.2226-1.877-.1567-1.877-4.537.067-9.077.067-13.61.067-1.2078,0-1.9101.4008-2.1109,1.7016-.6683,4.49-1.3373,8.8918-2.076,13.29-.3003,1.808-.5672,3.633-.7519,5.45-.267,1.953.267,2.6448 2.296,2.6448 6.12.067 12.24.100 18.36.134 6.12,0 12.24,0 18.36,0 2.1682,0 3.0779.4682 2.8448,2.6318-.472,4.041-5.541,37.43-6.587,43.665-.2002,1.258-1.0534,2.341-2.6442,2.341H40.496c-.888,0-1.776,0-2.664,0-2.498-.101-2.963-.468-2.832-3.001.134-2.734.534-5.45.934-8.163.110-7.319 8.818-57.74 9.868-64.626.4345-2.765.8683-5.499 1.4035-8.264.3344-1.837 1.868-2.837 4.136-2.837 7.63,0 53.15,0 63.7-.033h.067ZM84.64,92.867c-5.26,0-10.18,0-15.07.067-.434,0-1.534.6001-1.602.967-.367,2.013-2.41,15.5-3.143,20.355-.2,1.333.634,1.8 1.968,1.8 3.94-.067 7.88,0 11.81,0 2.128,0 3.354-1.033 3.683-3.11l2.48-16.55c.134-.7.767-3.63-.226-3.63h0Z"
          fill="none"
          stroke="white"
          strokeWidth="1.4"
        />
        <text x="23" y="22" fill="white" fontSize="17" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">
          20's
        </text>
        <path
          d="M39.62,0L4.76.05,0,9.29l4.51,35.09h35.39l4.56-35.07L39.62,0ZM5.99,2.04l32.43-.04,3.4,6.53-39.14-.06,3.31-6.43ZM38.15,42.38H6.27S2.18,10.46,2.18,10.46l40.12.06-4.15,31.85Z"
          stroke="white"
          fill="white"
          strokeWidth="1.4"
        />
      </svg>
    </div>
  </header>

  {/* COUNTRY POPUP */}
  {openPopup && (
    <div className="country-popup-backdrop" onClick={() => setOpenPopup(false)}>
      <div className="country-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setOpenPopup(false)} aria-label="Close">✖</button>
        <h2>ARE YOU IN THE RIGHT PLACE?</h2>
        <p>Please select your shipping country.</p>
        <label htmlFor="country-select">Country</label>
        <select id="country-select">
          <option>Egypt (EUR)</option>
          <option>Saudi Arabia (SAR)</option>
          <option>United Arab Emirates (AED)</option>
          <option>United States (USD)</option>
        </select>
        <button className="shop-btn">SHOP NOW</button>
      </div>
    </div>
  )}

  {/* CART POPUP */}
  {openCart && (
    <div className="cart-base">
      <div className="cart-overlay" onClick={() => setOpenCart(false)}></div>
      <div className="cart-content">
        <header className="cart-header">
          <button type="button" className="cart-close-button" onClick={() => setOpenCart(false)} aria-label="Close">
            <svg aria-hidden="true" role="presentation" focusable="false" fill="none" width="60" className="icon-close" viewBox="0 0 30 30">
              <path d="m1 1 14 14M1 15 15 1" stroke="currentColor" strokeWidth="1.4"></path>
            </svg>
          </button>
        </header>

        <div className="cart-body">
          <div className="cart-title">CART</div>

          <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <video 
              src="src\\imags\\WhatsApp Video 2025-11-27 at 3.34.51 PM - Copy.mp4" 
              autoPlay 
              loop 
              muted 
              style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}} 
            />
          </div>

          <div className="cart-empty-message">YOUR CART IS EMPTY</div>
          <button className="start-shopping-btn" onClick={() => setOpenCart(false)}>START SHOPPING</button>
        </div>

        <footer className="cart-footer" hidden></footer>
      </div>
    </div>
  )}
</>


);
}
