import { AlertCircle } from 'lucide-react';
import { useAdminLinkNotice } from '@/hooks/useAdminLinkNotice';

/**
 * Small, non-blocking notice component that warns when the current link is an admin link
 * and advises to use "Copy Share Link" to share a safe link. Never displays the token value.
 */
export function AdminLinkNotice() {
  const hasAdminToken = useAdminLinkNotice();

  if (!hasAdminToken) {
    return null;
  }

  return (
    <div className="bg-amber-50/95 backdrop-blur-sm border-2 border-amber-400 rounded-lg px-3 py-2 shadow-lg max-w-xs">
      <div className="flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-900 leading-tight">
          <span className="font-semibold">Admin link detected.</span> Use "Copy Share Link" to share safely.
        </p>
      </div>
    </div>
  );
}
