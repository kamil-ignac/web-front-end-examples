# Re-rendering
Snippet code: [https://github.com/kamil-ignac/web-front-end-examples/blob/main/re-rendering.tsx](https://github.com/kamil-ignac/web-front-end-examples/blob/main/re-rendering.tsx)

## Questions
### 1. When I click `Increment`, what gets re-rendered and why? Does `Child` re-render even though it’s wrapped in memo?
- Yes, `Child` will still re-render.
- Even though `Child` is wrapped in memo, it receives new props on every render because `options` is a new object each time and `onSelect` is a new function each time.
- Key answer: **Because memo uses shallow comparison.**

### 2. When does the `useEffect` in `Child` run, and when does the cleanup run?
- The effect runs when `userId` changes.
- The cleanup runs right before the effect runs again, and also when the component unmounts.
    - on initial mount → effect runs
    - on userId change → cleanup runs → new effect runs
    - on unmount → cleanup runs

### 3. How would you make sure that `Child` does not re-render when count changes, assuming `userId` stays the same?*
- By stabilizing the props:
    - wrap `onSelect` in `useCallback`
    - wrap `options` in `useMemo`

## Snippet internal notes
- `const onSelect = (id: number) => {...}` -> new function on every render
- `const options = { showDetails: count % 2 === 0 }` -> new object on every render