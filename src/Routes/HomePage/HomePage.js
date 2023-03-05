import './HomePage.css';
import { Link } from 'react-router-dom';
import ChakraSVG from '../../Components/ChakraSVG/ChakraSVG';

function HomePage() {
  return (
    <div className="homepage">
      <header className="page-header header container-fluid">
			<div className="description">
				<h1>The 7 Chakras</h1>
				<p>
        The seven chakras are thought of as the main energy points 
        in your body, which run down the spine. Each chakra has a respective 
        color, symbol, and name — and corresponds to bundles of nerves, 
        major organs, and areas of our energetic body that affect our emotional and physical well-being.
				</p>
        <p>
        Chakras should stay “open” and aligned, and this can be done through meditation. 
        You can meditate on a specific chakra, or meditate on aligning all of the chakras at once.
				</p>
				<Link to="/quiz"><button className="btn btn-outline-light btn-lg homepage-btn">Take the chakra quiz!</button></Link>
        <ChakraSVG></ChakraSVG>
			</div>
		</header>
    </div>
  );
}

export default HomePage;
