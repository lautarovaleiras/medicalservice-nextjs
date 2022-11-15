import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.CLIENT_GOOGLE_ID || "",
        clientSecret: process.env.CLIENT_GOOGLE_SECRET || ""      
    })
    // CredentialProvider({
        
    //     clientSecret: process.env.GOOGLE_SECRET || ""        
    // }),
    
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)