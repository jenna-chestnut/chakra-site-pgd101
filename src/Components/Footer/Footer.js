import './Footer.css';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-8 col-sm-12">
						<h6 className="text-uppercase font-weight-bold">
							About Us
						</h6>
						
            <p><i>All information shared here is for entertainment purposes only.</i></p>
            <p>
							This website was created as a final project for the Front End Foundations
               class (PGD101) at Eastern Gateway Community College. 
						</p>
						<p>
            This website showcases the 
            different chakras, their location, color, and other details, as well as a 
            quiz to determine which chakra to meditate on. The goal of this website 
            is to encourage the user to meditate, even if it’s only for 5 minutes.
						</p>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<h6 className="text-uppercase font-weight-bold">Contact</h6>
						<p>
							222 Moonlit Drive, Nashtown, Tennessee
							<br />jenna@jennachestnut.com <br />+ 01 234-5678 <br />+ 01 234 567
							89
						</p>
					</div>
					<div className="footer-copyright text-center mt-3">
						© 2023 Copyright: Jenna Chestnut, PGD101
					</div>
				</div>
			</div>
    </footer>
  );
}

export default Footer;
