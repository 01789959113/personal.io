const express = require('express');
const app = express();
const path = require('path');
require('./db/connect')
const User = require('./models/model')


const port = process.env.PORT || 5000;


// serving static file
app.use(express.static(path.join(__dirname, 'public')))

// setting ejs as template engine
app.set('view engine', 'ejs');

// using middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/', async (req, res) => {
    try {
        const userList = new User(req.body);
        let errors = [];
        const { name, email, subject, message } = req.body;
        // console.log(`${name} is ${email}`)
        if (!name || !email || !subject || !message) {
            errors.push({ msg: "Please fill all the field" })
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
            // saving user data into database
            const saveUser = await userList.save()
            res.render('index')
        }


    } catch (error) {
        console.log(error)
    }

})

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});