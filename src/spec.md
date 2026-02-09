# Specification

## Summary
**Goal:** Simplify the post-"Yes" tap sequence to two images + final message, and make tap transitions feel instant by preloading the images.

**Planned changes:**
- Update `frontend/src/components/YesTapSequence.tsx` to remove the third image step so the loop is: IMG-20260210-WA0002.jpg → IMG-20260210-WA0000.jpg → final love message text → (tap loops back to first image).
- Ensure keyboard accessibility remains: Enter/Space advances through steps and loops from the final message back to the first image.
- Preload IMG-20260210-WA0002.jpg and IMG-20260210-WA0000.jpg early so advancing on tap does not show a blank/loading state.
- Remove the unused asset `IMG-20260210-WA0001.jpg` from frontend public assets if it exists, and remove any remaining code references to it.

**User-visible outcome:** After tapping "Yes", the user taps through two images and a final love message that loops back to the first image, with fast/instant-feeling transitions and no third image appearing.
