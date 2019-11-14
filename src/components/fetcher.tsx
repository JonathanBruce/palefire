import React from "react";
import useDebounce from "../hooks/useDebounce";

interface IFetcherState {
	input: any | null
    data: any | null
    error: Error | null
    loading: boolean
}

interface IChildrenProps extends IFetcherState {
    fetchData(input: any): void
}

export default function fetcher(props: { fetchData(input: any): any, children:  (props: IChildrenProps) => React.ReactNode }) {
	const [state, setState] = React.useState<IFetcherState>({
		input: null,
		data: null,
		loading: false,
		error: null,
	})
	const { input } = state

	const debouncedInput = useDebounce(input, 1500)

	React.useEffect(() => {
		if (!debouncedInput) {
			return
		}
		setState(prevState => ({ ...prevState, loading: true, data: null, error: null}))
		
		props.fetchData(debouncedInput).then(
			(data: any) => setState(prevState => ({...prevState, data})),
			(error: Error) => setState(prevState => ({ ...prevState, error}))
		)
	}, [debouncedInput])

	const fetchData = (input: any) => {
		setState(prevState => ({ ...prevState, input}))
	}

	return props.children({ ...state, fetchData })
}