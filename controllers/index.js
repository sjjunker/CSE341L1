//Get the name of someone I  know
let getName = (req, res) => {
    res.send("<html><body><h1>Trayton John Gough</h1></body></html>");
};

//Export the result
module.exports = { getName };
