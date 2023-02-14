//This is where we will add our auth strategies
import { Strategy, ExtractJwt } from "passport-jwt";

export default function setupJWTStrategy(passport) {

    passport.use(
        new Strategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  //get jwt from request headers
            secretOrKey: "djfklsfklkdjflsk778797hkh7897ihi90709kkl09870iohkh86y0h" //same key from auth route. Should be in .env
        }, function(payload, done) {
             try {
                return done(null, { username: payload.username, id: payload.id});
             } catch(e) {
                return done(e, null);
             }
        })
    )
}