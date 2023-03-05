import './QuizPage.css';
import { useState } from 'react';
import { quizCheckboxes } from './quizUtils';
import { chakraTally } from './quizUtils';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
	const navigate = useNavigate();

	const [checkedState, setCheckedState] = useState(
		new Array(quizCheckboxes.length).fill(false)
	);

	const [chakraTallyState, setChakraTally] = useState(chakraTally);

	const [userNameState, setUserName] = useState('');

	const processQuiz = (e) => {
		e.preventDefault();

		const finalTally = Object.entries(chakraTallyState);

		finalTally.sort((a, b) => {
			if (a[1] < b[1]) {
				return 1;
			}

			if (a[1] > b[1]) {
				return -1;
			}

			return 0;
		});

		const winner = finalTally[0][0];

		const finalAnswer =
			finalTally[0][1] === finalTally[1][1]
				? 'all'
				: winner === 'third'
				? 'third-eye'
				: winner === 'solar'
				? 'solar-plexus'
				: winner;

		navigate('/' + finalAnswer, {
			state: { isResult: true, userName: userNameState },
		});
	};

	const handleUserName = (e) => {
		setUserName(e.target.value);
	};

	const handleChecked = (spot) => {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === spot ? !item : item
		);

		setCheckedState(updatedCheckedState);

		let newTally = Object.assign({}, chakraTally);

		updatedCheckedState.forEach((q, i) => {
			if (q) {
				newTally[quizCheckboxes[i].chakraName] += 1;
			}
		});

		setChakraTally(newTally);
	};

	return (
		<div className="quiz-page">
			<header className="page-header header quiz-header container-fluid">
				<div className="description">
					<h1 className="all-chakra">The 7 Chakras Quiz</h1>
					<h2>Which chakra should you focus on?</h2>
					<p>
						Complete this quiz and you will be shown where your attention is
						needed most!
					</p>
					<form onSubmit={(e) => processQuiz(e)}>
						<div className="inputs-container">
							<div className="form-group mb-5">
								<label className="name-label" htmlFor="user-name">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="user-name"
									onChange={(e) => handleUserName(e)}
								></input>
							</div>
							<p>Check each idea if true:</p>
							{quizCheckboxes.map(({ chakraName, chakraQ }, index) => {
								return (
									<div className="form-check m-3" key={'chakra' + index}>
										<input
											type="checkbox"
											className="form-check-input"
											id={`${chakraName}-${index}`}
											name={chakraName}
											value={chakraName}
											checked={checkedState[index]}
											onChange={() => handleChecked(index)}
										></input>
										<label
											className="form-check-label"
											htmlFor={`${chakraName}-${index}`}
										>
											{chakraQ}
										</label>
									</div>
								);
							})}
						</div>
						<button
							type="submit"
							className="btn btn-primary btn-lg quiz-button"
						>
							Submit
						</button>
					</form>
				</div>
			</header>
		</div>
	);
}

export default QuizPage;
