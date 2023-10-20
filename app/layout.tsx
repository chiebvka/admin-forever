import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css'
import Sidebar from '@/components/SidebarToggle';
import { Toaster } from "react-hot-toast";
import ProtectedLayout from './(protected)/layout';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const dynamic = "force-dynamic";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <main >
            {/* <Sidebar /> */}
            <ProtectedLayout>
              
            {children}
            </ProtectedLayout>
          </main>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}