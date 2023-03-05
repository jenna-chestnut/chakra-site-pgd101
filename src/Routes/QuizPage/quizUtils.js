const quizQs = [
	{ chakraName: 'root', chakraQ: 'I feel lethargic.' },
	{ chakraName: 'root', chakraQ: 'It is difficult to take action.' },
	{ chakraName: 'root', chakraQ: 'I need help feeling secure and safe.' },
	{ chakraName: 'sacral', chakraQ: 'Creativity does not come easily to me.' },
	{ chakraName: 'sacral', chakraQ: 'Enjoyment makes me nervous. Something might go wrong!' },
	{ chakraName: 'sacral', chakraQ: 'I would like to embrace change.' },
	{ chakraName: 'solar', chakraQ: 'I worry about what others think of me.' },
	{ chakraName: 'solar', chakraQ: 'It is easy to behave impulsively.' },
	{ chakraName: 'solar', chakraQ: 'I need to increase my confidence.' },
	{ chakraName: 'heart', chakraQ: 'It is really hard to be vulnerable with myself and others.' },
	{ chakraName: 'heart', chakraQ: 'Rejection is very scary to me.' },
	{ chakraName: 'heart', chakraQ: 'I want to be more open to love.' },
	{ chakraName: 'throat', chakraQ: 'I have trouble with expressing myself.' },
	{ chakraName: 'throat', chakraQ: 'I often feel misunderstood.' },
	{ chakraName: 'throat', chakraQ: 'Communicating with respect and courage is something I need to learn.' },
	{ chakraName: 'third', chakraQ: 'I feel generally overwhelmed.' },
	{ chakraName: 'third', chakraQ: 'I\'m stuck in the daily grind and don\'t feel a lot of clarity.' },
	{ chakraName: 'third', chakraQ: 'I need to heighten my intuition.' },
	{ chakraName: 'crown', chakraQ: 'There\'s a lack of inspiration in my life.' },
	{ chakraName: 'crown', chakraQ: 'I have self-destructive tendencies.' },
	{ chakraName: 'crown', chakraQ: 'I am seeking a higher wisdom.' },
];

export const quizCheckboxes = quizQs.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value);


export const chakraTally = {
	root: 0,
	sacral: 0,
	solar: 0,
	heart: 0,
	throat: 0,
	third: 0,
	crown: 0
}