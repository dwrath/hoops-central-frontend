import '@styles/resets.css';
import '@styles/layout.css';

export const metadata = {
  title: 'Hoops Central',
  description: 'A place for basketball fans to follow their favorite teams and players.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          {children}
        </div>
     </body>
    </html>
  )
}
