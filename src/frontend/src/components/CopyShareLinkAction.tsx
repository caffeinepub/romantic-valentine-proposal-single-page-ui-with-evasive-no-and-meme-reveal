import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCleanShareUrl, copyToClipboard } from '@/utils/shareLink';

/**
 * Reusable "Copy Share Link" UI control that copies the clean URL (without hash)
 * and shows a brief confirmation message.
 */
export function CopyShareLinkAction() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const cleanUrl = getCleanShareUrl();
    const success = await copyToClipboard(cleanUrl);

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={handleCopyLink}
        variant="outline"
        size="sm"
        className="bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-romantic-primary/30 hover:border-romantic-primary text-romantic-primary shadow-lg"
        aria-label="Copy Share Link"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-2" />
            Link copied
          </>
        ) : (
          <>
            <Share2 className="w-4 h-4 mr-2" />
            Copy Share Link
          </>
        )}
      </Button>
      
      {/* Screen reader announcement */}
      {copied && (
        <div role="status" aria-live="polite" className="sr-only">
          Link copied to clipboard
        </div>
      )}
    </div>
  );
}
