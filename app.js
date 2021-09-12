require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const connection = require('./db/connect')

const port = process.env.PORT || 5001;


// serving static file
app.use(express.static(path.join(__dirname, 'public')))

// setting ejs as template engine
app.set('view engine', 'ejs');

// using middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', async (req, res) => {
    try {
        let errors = [];
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) {
            errors.push({ msg: "Invalid information...Fill all the fields" })
        }
        if (errors.length > 0) {
            res.render('index', {
                errors,
                name,
                email,
                subject,
                message
            })
        } else {
            //  store data into database
            let storeData = `insert into anmslist (name, email, subject, message) values('${name}', '${email}', '${subject}', '${message}') `;

            connection.query(storeData, async function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("data stored");
                }
            });
            res.render('index')
        }


    } catch (error) {
        console.log(error)
    }

})

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});