# Redux
Snippet code: [https://github.com/kamil-ignac/web-front-end-examples/blob/main/redux.tsx](https://github.com/kamil-ignac/web-front-end-examples/blob/main/redux.tsx)

## Questions
### 1. When does this component re-render? What if `ui.selectedId` changes? What if users changes?
- The component re-renders whenever the value returned by `useSelector` changes (by reference).
- If `ui.selectedId changes → find(...)` may return a different user → re-render.
- If `users` changes → `find(...)` runs again → may return a new object reference → re-render.

### 2. Is there any performance issue here?
- Potentially, yes, because:
    - `find()` runs on every store update.
    - it returns an object reference, which may be new each time.
    - this can cause unnecessary re-renders.
    - **extra:** this becomes more problematic with large lists or frequent updates. 

### 3. How would you improve this?
- By memoizing the selector or normalizing the state.
    - use a memoized selector
    - normalize users by `ID` (e.g. `{ usersById: { [id]: user } }`)
    - use `shallowEqual`
    - **Key answer:** avoid recalculating and returning new object references unnecessarily

### 4. What if `selectedId` stays the same, but the users array gets a new reference because of another reducer — what happens?
- The selector runs again, `find()` runs again, and the component may re-render even though the visible data didn’t actually change ... because React Redux compares by reference and if a new object is returned, it assumes the data changed.
