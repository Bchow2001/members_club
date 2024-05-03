require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require("./config/passport");

const indexRouter = require("./routes/index");
const messageRouter = require("./routes/messageRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect(mongoDB);
	console.log("Connected to MongoDB");
}

// view engine setup
app.engine("ejs", require("express-ejs-extend"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Passport set up
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
	}),
);
app.use(passport.session());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});

app.use("/", indexRouter);
app.use("/messages", messageRouter);
app.use("/users", userRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
