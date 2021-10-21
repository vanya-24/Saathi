// eslint-disable-next-line
import React from "react";
import "./Footer.css";

class Footer extends React.Component{
  render(){
    return(
        <footer class="footer-distributed">
      <div class="footer-left">
        <img SRC="images/revised-final-gif.gif" alt="hi" style={{width:'150px', height:'100px' }}/>
        <p>   <br /></p>
        <p class="footer-company-name">Sowmind &copy; 2021<br />We are always there.</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-phone"></i>
          <p>911</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>Contact Us</span> Lets catch up :)
        </p>

        <div class="footer-icons">

          <a href=".."><i class="fa fa-facebook"></i></a>
          <a href=".."><i class="fa fa-twitter"></i></a>
          <a href=".."><i class="fa fa-linkedin"></i></a>
          <a href=".."><i class="fa fa-github"></i></a>

        </div>

      </div>

    </footer>
    );
  }
}

export default Footer;
