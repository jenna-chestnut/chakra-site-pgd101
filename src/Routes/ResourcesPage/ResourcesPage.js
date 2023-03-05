import './ResourcesPage.css';
import { Link } from 'react-router-dom';
import ChakraSVG from '../../Components/ChakraSVG/ChakraSVG';
import chakrasOverview from '../../img/the-seven-chakras-an-overview.jpg';
import wellAndGood from '../../img/wellandgood-chakra.png';
import taosWinds from '../../img/taos-winds.png';
import mindBodyGreen from '../../img/mindbodygreen.png';

function ResourcesPage() {
	const confirmNav = (e) => {
		if (!window.confirm('This will open a new website. Are you sure?'))
			e.preventDefault();
	};

	return (
		<div className="resources-page">
			<header className="page-header header container-fluid">
				<div className="description">
					<h1>Resources</h1>
					<p>
						This website was made possible utilizing some great resources. If
						you'd like to learn more about a specific chakra, please check these
						pages out!
					</p>

					<div className="container features mt-5">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 my-5">
								<a
									href="https://www.arhantayoga.org/blog/7-chakras-introduction-energy-centers-effect/"
									onClick={confirmNav}
									target="_blank"
									rel="noreferrer"
								>
									<h3 className="feature-title">arhantayoga.org</h3>
									<img
										src={chakrasOverview}
										class="img-fluid"
										alt="chakras overview"
									/>
								</a>
								<p>Complete Guide to the 7 Chakras and their Effects</p>
							</div>

							<div className="col-lg-6 col-md-6 col-sm-12 my-5">
								<a
									href="https://www.wellandgood.com/what-are-chakras/"
									onClick={confirmNav}
									target="_blank"
									rel="noreferrer"
								>
									<h3 className="feature-title">wellandgood.com</h3>
									<img
										src={wellAndGood}
										class="img-fluid"
										alt="well and good chakras"
									/>
								</a>
								<p>
									Your 7 Chakras, Explained—Plus, How To Tell if They’re Blocked
								</p>
							</div>

							<div className="col-lg-6 col-md-6 col-sm-12 my-5">
								<a
									href="https://www.youtube.com/channel/UC-ZD5jU1gQfLQ6t9eNuI0uA"
									onClick={confirmNav}
									target="_blank"
									rel="noreferrer"
								>
									<h3 className="feature-title">Taos Winds Youtube</h3>
									<img
										src={taosWinds}
										class="img-fluid"
										alt="taos winds spirit music"
									/>
								</a>
								<p>Music from the spirit... Music for the spirit.</p>
							</div>

							<div className="col-lg-6 col-md-6 col-sm-12 my-5">
								<a
									href="https://www.mindbodygreen.com/articles/7-chakras-for-beginners"
									onClick={confirmNav}
									target="_blank"
									rel="noreferrer"
								>
									<h3 className="feature-title">mindbodygreen.com</h3>
									<img
										src={mindBodyGreen}
										class="img-fluid"
										alt="mind body green chakras"
									/>
								</a>
								<p>A Beginner's Guide To The 7 Chakras + How To Unblock Them</p>
							</div>
						</div>
					</div>

					<ChakraSVG></ChakraSVG>
					<Link to="/quiz">
						<button className="btn btn-outline-light btn-lg">
							Take the chakra quiz!
						</button>
					</Link>
				</div>
			</header>
		</div>
	);
}

export default ResourcesPage;
