/**
 * Compute a clean share URL by removing all hash content from the current location.
 * This ensures sensitive tokens (like caffeineAdminToken) are never included in shared links.
 */
export function getCleanShareUrl(): string {
  const url = new URL(window.location.href);
  // Remove the hash fragment entirely
  url.hash = '';
  return url.toString();
}

/**
 * Copy text to clipboard with a safe fallback for browsers where navigator.clipboard is unavailable.
 * Returns true if successful, false otherwise.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    // Modern clipboard API (preferred)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // Fallback for older browsers or when clipboard API is unavailable
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
}
