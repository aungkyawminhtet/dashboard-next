import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { user } from "./lib/models";
import bcrypt from "bcrypt";
import { connectDB } from "./lib/utils";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    connectDB();
    const userr = await user.findOne({ username: credentials.username });
    // console.log(userr);
    if (!userr) throw new Error("Credential Wrong!");

    const iscorrectPass = await bcrypt.compare(
      credentials.password,
      userr.password
    );
    if (!iscorrectPass) throw new Error("Wrong Credential!");
    
    // console.log("correct pass is ", userr);
    return userr;
  } catch (error) {
    console.log(error);
    throw new Error("login credentail is wrong");
  }
};

export const { signOut, signIn, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          // console.log("user is ",user);
          return user;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user}){
      if(user){
        token.username = user.username;
        token.img = user.img;
      }
      // console.log("token is ",token.img);
      return token;
    },
    async session({session, token}){
      if(token){
        session.user.username = token.username;
        session.user.img = token.img;
      }
      // console.log("sesion is ", session);
      return session;
    }
  }
  
  
});
