# Specification

## Summary
**Goal:** Add an in-app share action that copies a safe, clean link by stripping any URL hash content (including `#caffeineAdminToken=...`) and guide users away from sharing admin links.

**Planned changes:**
- Add a “Copy Share Link” action that copies the current page URL without any hash fragment content.
- Surface the “Copy Share Link” control on the PasswordGate view, proposal view, and YesTapSequence view in a way that does not interfere with existing tap-to-advance interactions.
- When `caffeineAdminToken` is present in the URL hash, show a small non-blocking English notice that the current link is an admin link and users should use “Copy Share Link” to share a safe link.
- Provide a brief English confirmation after copying (e.g., “Link copied”) and ensure the control is accessible (visible text + matching aria-label).

**User-visible outcome:** Users can tap “Copy Share Link” on key screens to copy a shareable URL that removes the token/hash, see a quick “Link copied” confirmation, and (when applicable) see a notice warning them not to share the admin link.
