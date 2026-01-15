# Remounting
Snippet code: [https://github.com/kamil-ignac/web-front-end-examples/blob/main/remounting.tsx](https://github.com/kamil-ignac/web-front-end-examples/blob/main/remounting.tsx)

## Questions
### 1. If I type something into the `input` and then switch tabs, what happens to the text?
- The text is lost because `Panel` component is being unmounted and mounted again when the tab changes. Since its local state (text) lives inside the component, it gets reset on every remount.

### 2. Why is `Panel` being unmounted and mounted again instead of just re-rendered? What does the key do?
- Because the key changes.
    - react uses `key` to identify components
    - when the `key` changes, React treats the component as a completely new one, so it unmounts the old instance, mounts a new one, resets its state

### 3. Is `[label]` the correct dependency for this effect? What is this effect actually meant to represent?
- Probably not.
- A more correct dependency for a true mount/unmount effect would be an empty array `[]`.

### 4. How would you implement this if the text should be preserved for each tab?
- You must prevent remounting or lift the state up.
    - A. remove the changing key, so the component is not remounted
    - B. store the text state in the parent (keyed by tab)
    - C. render two panels and conditionally show/hide them

## Snippet internal notes
- `<Panel key={tab}...` .... intentionally “weird” key