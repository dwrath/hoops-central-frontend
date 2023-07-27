import '@styles/resets.css';
import '@styles/layout.css';
import '@styles/globals.css';
import Navbar from "@components/Navbar";

export const metadata = {
  title: 'Hoops Central',
  description: 'A place for basketball fans to follow their favorite teams and players.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
            <Navbar />
          {children}
        </div>
     </body>
    </html>
  )
}
