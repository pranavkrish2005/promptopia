import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ], async session({ session }) {

    },
    async signIn({ profile }) {
        try {

        } catch (error) {
            
        }
    },
})

// not something we usually do. We either do a get or a post. Not both. For next auth this is how to do it
export { handler as GET, handler as POST }