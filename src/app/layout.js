import './globals.css'
import LoadingIndicator from "@/components/LoadingIndicator";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir={'rtl'} className={'font-iran'}>
      <LoadingIndicator />
             {children}
      </body>
    </html>
  );
}
