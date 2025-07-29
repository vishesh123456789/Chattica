import "./rootLayout.css";
import { ClerkProvider, SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Link, Outlet } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <div  className="rootLayout">
        <header>
            <Link to="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>CHATTICA</span>
            </Link>
            <div className="user">
      <SignedIn>
        <UserButton />
      </SignedIn>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
    </ClerkProvider>
  )
}

export default RootLayout