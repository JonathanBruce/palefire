import { useState, useEffect} from 'react'

export default function useDebounce(value: any, delay: number) {
	const [debounceValue, setDebouncedValue] = useState(value)

	useEffect(
		() => {
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay)

			return () => {
				clearTimeout(handler)
			}
		}, [value]
	)

	return debounceValue
}