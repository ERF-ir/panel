import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir={'rtl'} className={'font-iran'}>

      {children}
      </body>
    </html>
  );
}
