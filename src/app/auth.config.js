export const authConfig = {
    providers: [],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        authorized({auth, request: {nextUrl}}){
            const isLoggedin = auth?.user;
            const isOnDashbaord = nextUrl.pathname.startsWith("/dashboard");
            if(isOnDashbaord){
                if(isLoggedin) return true;
                return false;
            } else if (isLoggedin) {
                return Response.redirect(new URL("/dashboard", nextUrl));
            }
            return true;
        }
    }
}