import './ChakraPage.css';
import chakrasData from './chakrasData';
import fakeImg from '../../img/chakra-standing.png';
import { Link, useLocation } from 'react-router-dom';
import ChakraSVG from '../../Components/ChakraSVG/ChakraSVG';

function ChakraPage(chakraLink) {
	const { state } = useLocation();
	const { userName, isResult } = state ? state : '';

	const chakraName = chakraLink.chakraLink;
	const chakra = chakrasData();
	const {
		name,
		secondName,
		color,
		img,
		about,
		location,
		tagLine,
		pillar,
		element,
		benefits,
		affirmations,
		meditation,
	} = chakra[chakraName];

	const hexCode = Array.isArray(color) ? color[1] : color;
	const chakraColor = Array.isArray(color) ? color[0] : color;

	const bullet = (
		<p className="chakra-bullet" style={{ color: hexCode }}>
			&#9673;
		</p>
	);

	return (
		chakra && (
			<div className="chakra-page">
				<header className="page-header header chakra-header text-white container-fluid">
					<div className="chakra-description">
						{isResult && (
							<p className="quiz-result">
								{userName.length ? `Hi, ${userName}` : 'Hi'}! Based on your quiz results, you should
								focus on the...
							</p>
						)}
						<h1
							style={{ color: hexCode }}
							className={
								`${name && name === 'Entire Kundalini System' && 'all-chakra'}`
							}
						>
							{name || 'Fake'}
						</h1>
						<h2 className="chakra-second">
							{secondName ? secondName.toUpperCase() : 'Fake'} CHAKRA
						</h2>
						<div className="row add-space">
							<div className="col-lg-6 col-md-6 col-sm-12">
								<img src={img || fakeImg} alt="Chakra-placement" />
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 add-space">
								<h2> {tagLine || 'Tag Line'} </h2>
								{bullet}
								<p> {about || 'About'} </p>
								{location && (
									<p> This chakra is located {location || 'somewhere'}.</p>
								)}
								{bullet}
								<h3>Characteristic Pillar</h3>
								<h2 className="indented">
									{pillar || 'Pillar Characteristic'}
								</h2>
								<h3>Color</h3>
								<h2 className="indented">
									<span
										style={{ color: hexCode }}
										className={
											`${name && name === 'Entire Kundalini System' && 'all-chakra'}`
										}
									>
										{chakraColor
											? chakraColor[0].toUpperCase() + chakraColor.substring(1)
											: 'Color'}
									</span>
								</h2>
								{element && (
									<div>
										<h3>Element</h3>
										<h2 className="indented">{element}</h2>
									</div>
								)}
							</div>
						</div>
					</div>
				</header>
				<div className="chakra-description benefits add-space">
					{name && name !== 'Entire Kundalini System' && (
						<h2>When this chakra is in alignment...</h2>
					)}
					{name && name === 'Entire Kundalini System' && (
						<h2>When our chakras are in alignment...</h2>
					)}
					<p>{benefits || 'Emotional and health benefits'}</p>
				</div>
				<div className="healing add-space">
					{affirmations && (
						<div className="affirmations add-space">
							<h1>Affirmations</h1>
							<div className="scroll-container">
								<p className="scroll">
									<span>{affirmations || 'Affirmations'}</span>
								</p>
								<p className="scroll scroll-2">
									<span>{affirmations || 'Affirmations'}</span>
								</p>
							</div>
						</div>
					)}
					{meditation && (
						<div className="meditation add-space">
							<h1>Meditation</h1>
							<h2>
								This meditation is specifically designed to help focus on the{' '}
								{name || 'Fake'}
								{secondName !== 'Every' && ` (${secondName || 'Fake'}) chakra`}.
							</h2>
							<div className="video-container">
								<iframe
									src={meditation}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								></iframe>
							</div>
							<div className="add-space">
								<ChakraSVG></ChakraSVG>
								<Link to="/quiz">
									<button className="btn btn-outline-light btn-lg">
										Take the chakra quiz!
									</button>
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	);
}

export default ChakraPage;
