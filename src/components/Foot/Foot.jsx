import "./foot.css";

export const Foot = () => {
  return (
    <footer className="footer">
      <div className="social">
        <div className="contact_us">
          <h2 className="contact_us--title">CONTACT_US</h2>
          <section className="iconsection">
              <div>
                  <a href="https://www.facebook.com/people/M-Mugammadhu-Sate/pfbid0Ph1YDN5jCfsFALv2bkXMJjSN1YFoanRm4jfpsVAdSkYBJJEipfc9nyHLHFMtvZ6Ul/?mibextid=ZbWKwL" target="_blank">
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
              </div>
              <div>
              <a href="https://www.linkedin.com/in/m-mugammadhu-sate-484b50292/" target="_blank">
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
              </div>
              <div>
              <a href="mailto:mugammadhuoff@gmail.com" target="_blank">
                <i className="fa fa-envelope fa-2x"></i>
              </a>
              </div>
              <div>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FshifaMugammadhu" target="_blank">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              </div>
          </section>
        </div>
        <div className="ipl_social">
          <h2 className="ipl_social--title">IPL</h2>
          <section className="iconsection">
            <div>
          <a href="https://www.facebook.com/IPL/" target="_blank">
            <i className="fa fa-facebook fa-2x"></i>
          </a>
          </div>
          <div>
          <a href="https://www.youtube.com/@bcciofficial" target="_blank">
            <i className="fa fa-youtube-play fa-2x"></i>
          </a>
          </div>
          <div>
          <a href="https://www.instagram.com/iplt20/?hl=en" target="_blank">
            <i className="fa fa-instagram fa-2x"></i>
          </a>
          </div>
          <div>
          <a href="https://twitter.com/IPL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
            <i className="fa fa-twitter fa-2x"></i>
          </a>
          </div>
          <div>
          <a href="https://www.iplt20.com/" target="_blank">
            <i className="fa fa-globe fa-2x"></i>
          </a>
          </div>
      </section>
        
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright &copy;2024; Designed by 
          <span className="name"> MUGAMMADHU SATE</span>
        </p>
      </div>
    </footer>
  );
};
