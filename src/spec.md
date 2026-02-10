# Specification

## Summary
**Goal:** Remove the in-app “Copy Share Link” UI and any related admin notice/text from version 12.

**Planned changes:**
- Remove the “Copy Share Link” control from the shared layout so it no longer renders on the PasswordGate view, Valentine proposal view, or YesTapSequence success view.
- Remove the admin-link warning notice shown when a caffeineAdminToken hash fragment is present, and remove any user-facing text that references “Copy Share Link”.
- Clean up unused share-link code by removing remaining imports/references to CopyShareLinkAction, AdminLinkNotice, and share-link utility functions that were only used for this feature.

**User-visible outcome:** The app no longer shows a “Copy Share Link” control anywhere, and no notices or text reference “Copy Share Link”, while the existing Valentine flow and interactions remain unchanged.
