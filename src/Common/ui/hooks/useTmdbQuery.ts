import { useCallback, useEffect, useState } from 'react'

export type QueryStatus = 'idle' | 'loading' | 'success' | 'error'

type QueryState<T> =
  | { status: 'idle'; data: null; error: null }
  | { status: 'loading'; data: null; error: null }
  | { status: 'success'; data: T; error: null }
  | { status: 'error'; data: null; error: Error }

export const useTmdbQuery = <T>(
  queryFn: (signal: AbortSignal) => Promise<T>,
  deps: ReadonlyArray<unknown> = [],
  enabled = true,
) => {
  const [state, setState] = useState<QueryState<T>>({
    status: 'idle',
    data: null,
    error: null,
  })
  const [reloadToken, setReloadToken] = useState(0)
  const refetch = useCallback(() => setReloadToken((token) => token + 1), [])

  useEffect(() => {
    if (!enabled) return
    const controller = new AbortController()
    // Resetting to "loading" when deps change is the intended behavior for a
    // data-fetching hook; the lint rule over-reports this legitimate case.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ status: 'loading', data: null, error: null })
    queryFn(controller.signal)
      .then((data) => setState({ status: 'success', data, error: null }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        setState({
          status: 'error',
          data: null,
          error: error instanceof Error ? error : new Error('Unknown error'),
        })
      })
    return () => controller.abort()
    // queryFn is intentionally omitted; re-runs are driven by `deps`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, enabled, reloadToken])

  return { ...state, refetch }
}