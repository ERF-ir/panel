'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

export default function TopLoadingBar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // وقتی مسیر تغییر کرد، یعنی صفحه جدید شروع شده
        setLoading(true);

        const timeout = setTimeout(() => {
            // بعد از زمان کافی، لودینگ حذف بشه
            setLoading(false);
        }, 500); // اگر خیلی سریع بود، کمی نوار بمونه برای زیبایی

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <>
            {loading && (
                <div className="fixed top-0 left-0 w-full h-1 bg-purple-500 animate-progressBar z-[9999]" />
            )}

            <style jsx>{`
        @keyframes progressBar {
          0% {
            width: 0%;
          }
          30% {
            width: 50%;
          }
          60% {
            width: 80%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-progressBar {
          animation: progressBar 1.2s ease-out forwards;
        }
      `}</style>
        </>
    );
}
