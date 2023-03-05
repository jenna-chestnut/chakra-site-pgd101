import './ChakraSVG.css';
import { Link } from 'react-router-dom';

function ChakraSVG() {
	return (
		<div className="chakra-SVG">
			<div className="chakra-row-desktop">
				<Link to="/root">
					<svg style={{ width: '100%' }} xmlns="http://www.w3.org/2000/svg">
						<circle
							cx="25"
							cy="25"
							r="20"
							stroke="white"
							stroke-width="3"
							fill="red"
						/>
					</svg>
				</Link>

				<Link to="/sacral">
					<svg
						style={{ width: '100%', height: '100%' }}
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="25"
							cy="25"
							r="20"
							stroke="white"
							stroke-width="3"
							fill="orange"
						/>
					</svg>
				</Link>

				<Link to="/solar-plexus">
					<svg
						style={{ width: '100%', height: '100%' }}
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="25"
							cy="25"
							r="20"
							stroke="white"
							stroke-width="3"
							fill="yellow"
						/>
					</svg>
				</Link>

				<Link to="/heart">
					<svg
						style={{ width: '100%', height: '100%' }}
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="25"
							cy="25"
							r="20"
							stroke="white"
							stroke-width="3"
							fill="#00ff00"
						/>
					</svg>
				</Link>

				<Link to="/throat">
					<svg
						style={{ width: '100%', height: '100%' }}
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="25"
							cy="25"
							r="20"
							stroke="white"
							stroke-width="3"
							fill="#00fff2"
						/>
					</svg>
				</Link>

				<Link to="/third-eye">
					<svg
						style={{ width: '100%', height: '100%' }}
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="25"
							cy="25"
							r="20"
							stroke="white"
							stroke-width="3"
							fill="#6877ff"
						/>
					</svg>
				</Link>

				<Link to="/crown">
					<svg
						style={{ width: '100%', height: '100%' }}
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="25"
							cy="25"
							r="20"
							stroke="white"
							stroke-width="3"
							fill="violet"
						/>
					</svg>
				</Link>
			</div>

			<div className="chakra-row-mobile">
				<svg style={{ width: '100%' }} xmlns="http://www.w3.org/2000/svg">
					<circle
						cx="20"
						cy="20"
						r="15"
						stroke="white"
						stroke-width="3"
						fill="red"
					/>
				</svg>

				<svg
					style={{ width: '100%', height: '100%' }}
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="20"
						cy="20"
						r="15"
						stroke="white"
						stroke-width="3"
						fill="orange"
					/>
				</svg>

				<svg
					style={{ width: '100%', height: '100%' }}
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="20"
						cy="20"
						r="15"
						stroke="white"
						stroke-width="3"
						fill="yellow"
					/>
				</svg>

				<svg
					style={{ width: '100%', height: '100%' }}
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="20"
						cy="20"
						r="15"
						stroke="white"
						stroke-width="3"
						fill="#00ff00"
					/>
				</svg>

				<svg
					style={{ width: '100%', height: '100%' }}
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="20"
						cy="20"
						r="15"
						stroke="white"
						stroke-width="3"
						fill="#00fff2"
					/>
				</svg>

				<svg
					style={{ width: '100%', height: '100%' }}
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="20"
						cy="20"
						r="15"
						stroke="white"
						stroke-width="3"
						fill="#6877ff"
					/>
				</svg>

				<svg
					style={{ width: '100%', height: '100%' }}
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="20"
						cy="20"
						r="15"
						stroke="white"
						stroke-width="3"
						fill="violet"
					/>
				</svg>
			</div>
		</div>
	);
}

export default ChakraSVG;
