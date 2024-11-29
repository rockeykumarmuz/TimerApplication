import { useEffect, useState } from 'react'

const Timer = () => {
	const [time, setTime] = useState(0)
	const [isRunning, setIsRunning] = useState(false)
	const [ref, setRef] = useState()

	const startTimer = () => {
		if (!isRunning) {
			const currentTime = setInterval(() => {
				setTime(prev => prev + 1)
			}, 1000)
			setIsRunning(true)
			setRef(currentTime) // setting the refference of the timer
		}
	}

	const stopTimer = () => {
		if (isRunning) {
			setIsRunning(false)
			clearInterval(ref)
		}
	}

	const resetTimer = () => {
		clearInterval(ref)
		setIsRunning(false)
		setTime(0)
	}

	// Cleanup on component unmount (important to avoid memory leaks)
	useEffect(() => {
		return () => {
			clearInterval(ref) // Clean up the interval when the component unmounts
		}
	})

	return (
		<div>
			<h1>Timer: {time}</h1>
			<button style={{ margin: '1rem', padding: '4px 8px' }} disable={isRunning} onClick={startTimer}>
				Start
			</button>
			<button style={{ margin: '1rem', padding: '4px 8px' }} disable={!isRunning} onClick={stopTimer}>
				Stop
			</button>
			<button style={{ margin: '1rem', padding: '4px 8px' }} onClick={resetTimer}>
				Reset
			</button>
		</div>
	)
}

export default Timer
