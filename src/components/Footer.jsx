import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { 
  SiInstagram, 
  SiTiktok, 
  SiWhatsapp, 
  SiKlarna, 
  SiPaypal, 
  SiApplepay, 
  SiMastercard, 
  SiVisa 
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <style>{`
      .m4{ font-size: 11px; }
        .footer { background:black ; color: white; padding: 40px 60px 30px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .footer-content { max-width: 1200px; margin: 0 auto; }
        .top-section { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 90px; margin-bottom: 40px; }
        .support-info { max-width: 300px; }
        .support-info p {    font-size: 12px;
    line-height: 2; margin: 5px 0; color: white; }
        .support-info a { text-decoration: underline; color: white; display: inline-flex; align-items: center; gap: 5px; }
        .services-grid { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 50px; }
        .service-column h4 { font-size: 14px; font-weight: bold; margin-bottom: 15px; display: flex; align-items: center; gap: 5px; }
        .service-column p {     font-size: 16px;
    margin: 8px 0;
    cursor: pointer;
    margin-left: -28px; }
    .m1{    margin-left: 56px;
}
    .m2{    margin-left: 60px;}
        .social-icons {   display:flex;  margin-left: 40px; flex :gap; }
        .social-icon { font-size: 24px; cursor: pointer; }
        .payment-methods { display: flex; gap: 12px; margin-top: 8px; font-size: 24px; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #ccc; padding-top: 20px; margin-top: 30px; flex-wrap: wrap; gap: 10px; }
        .copyright { font-size: 12px; }
        .accessibility-text { font-size: 12px; }
        .country-selector { display: flex; align-items: center; gap: 5px; font-size: 12px; font-weight: bold; }
        .country-flag { width: 20px; height: 14px; }
        @media (max-width: 768px) {
          .top-section { flex-direction: column; gap: 20px; }
          .services-grid { flex-direction: column; gap: 20px; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <div className="footer-content">
        <div className="top-section">
          {/* Support */}
          <div className="support-info">
            <p>
              <AiOutlineInfoCircle color="#00BFFF" size={16} /> 
              <strong>
                SUPPORT
                
              </strong>
            </p>
            <p>FOR QUESTIONS REGARDING ORDERS PLEASE CONTACT</p>
            <p>
              <a href="mailto:support@6pmseason.com">SUPPORT@mariamlotfySEASON.COM</a> (MO-FR)
            </p>
              <SiWhatsapp color="#25D366" size={20} />  <strong class="m4">JOIN mariam WHATSAPP CHANNEL</strong>
            <p>EARLY ACCESS, DISCOUNTS & SPECIALS</p>
            <p>
              <a href="#">
             <a href="" >JOIN NOW</a>
              </a>
            </p>
          </div>

          {/* Service Columns */}
          <div className="services-grid">
            <div className="service-column">
              <h4>SERVICE</h4>
              <p>SUPPORT</p>
              <p>RETURNS</p>
              <p>SHIPPING</p>
              <p>ORDER TRACKING</p>
            </div>

            <div className="service-column">
              <h4 class="m1">LEGAL</h4>
              <p>IMPRESSUM</p>
              <p>DATENSCHUTZ</p>
              <p>AGB</p>
              <p>WIDERRUFSRECHT</p>
              <p>BARRIEREFREIHEITSERKLÄRUNG</p>
            </div>

            <div className="service-column">
              <h4 className="m2">MORE</h4>
              <p>SOCIALS</p>
              <div className="social-icons">
                <SiInstagram color="#E1306C" size={24} />
                <SiTiktok color="#000000" size={24} />
                <SiWhatsapp color="#25D366" size={24} />
              </div>
              <p>SECURE PAYMENTS</p>
              <div className="payment-methods">
                <SiKlarna color="#FFB3C1" size={24} />
                <SiPaypal color="#003087" size={24} />
                <SiApplepay color="white" size={24} />
                <SiMastercard color="#EB001B" size={24} />
                <SiVisa color="#1A1F71" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            © 2025 - mariamlotfy. All rights reserved.{" "}
            <span style={{textDecoration: "underline", cursor: "pointer"}}>Cookie Settings</span>
          </div>
          <div className="accessibility-text">
            Barrierefreiheit Toolbar
          </div>
          <div className="country-selector">
            <img src="https://flagcdn.com/w20/eg.png" alt="Egypt" className="country-flag" />
            <span>EGYPT / EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
