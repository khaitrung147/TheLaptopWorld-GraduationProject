import passport from "passport";
const LocalStatery = require("passport-local").Strategy;
const JwtStatery = require("passport-jwt").Strategy;
import { CustomersModel } from "../models/customersModel.js";

passport.use(
  new LocalStatery((TenKhachHang, Password, done) => {
    CustomersModel.findOne({ TenKhachHang }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      user.comparePassword(passport, done);
    });
  })
);

const cookiesExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

passport.use(
  new JwtStatery(
    {
      jwtFromRequest: cookiesExtractor,
      secretOrKey: "test",
    },
    (payload, done) => {
      CustomersModel.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);
