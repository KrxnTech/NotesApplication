const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
const { v4: uuidv4 } = require("uuid");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs"); // SETUP EJS
app.use(express.static(path.join(__dirname, "public")));

let NOTES = [
    {
        id: uuidv4(),
        note: "I have to solve 10 JavaScript question 😔"
    },
    {
        id: uuidv4(),
        note: "I have to workout for 1 hours 💪"
    },
    {
        id: uuidv4(),
        note: "read Book 30 Min 📕"
    }
]


// LISTEN
app.listen(PORT, () => {
    console.log("APP START")
})

// HOMEPAGE 🟢
app.get("/homePage", (req, res) => {
    res.render("homePage.ejs", { NOTES })
})

// SERVE FORM
app.get("/AddNote", (req, res) => {
    res.render("AddNote.ejs")
})

// PUSHING THE NEW FORM IN THE NOTES OBJECT AND SHOWING IT ON THE MAIN HOME PAGE
app.post("/AddNote", (req, res) => {
    let newNote = req.body.note
    NOTES.push({ note: newNote });
    res.redirect("/homePage") 
})


// UNIVERSAL
app.get("/", (req, res) => {
    res.send("YOU ARE ON UNIVERSAL ROUTING")
})