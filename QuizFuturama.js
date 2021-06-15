import React, { useState } from 'react';

export default function Quiz() {
	const questions = [
		{
			questionText: 'Коронная фраза Бендера?',
			answerOptions: [
				{ answerText: 'Хорошие новости', isCorrect: false },
				{ answerText: 'Кийия!', isCorrect: false },
				{ answerText: 'Укуси мой блестящий металлический зад!', isCorrect: true },
				{ answerText: 'Я всех вас уничтожу!', isCorrect: false },
			],
		},
		{
			questionText: 'Кто победил временной парадокс, став собственным дедушкой?',
			answerOptions: [
				{ answerText: 'Гермес', isCorrect: false },
				{ answerText: 'Фрай', isCorrect: true },
				{ answerText: 'Зойдберг', isCorrect: false },
				{ answerText: 'Запп', isCorrect: false },
			],
		},
		{
			questionText: 'Кто из героев, будучи мужчиной, забеременел и родил детей?',
			answerOptions: [
				{ answerText: 'Киф', isCorrect: true },
				{ answerText: 'Фрай', isCorrect: false },
				{ answerText: 'Запп', isCorrect: false },
				{ answerText: 'Фарнсворт', isCorrect: false },
			],
		},
		{
			questionText: 'Кто в одном из эпизодов съедает по ошибке почку Фрая?',
			answerOptions: [
				{ answerText: 'Эми', isCorrect: false },
				{ answerText: 'Фрай', isCorrect: false },
				{ answerText: 'Гермес', isCorrect: false },
				{ answerText: 'Лила', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Хорошие новости! У тебя {score} очка из {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}