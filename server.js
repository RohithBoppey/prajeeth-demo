const app = require("./app");
const { dbconnection } = require("./config/database");
dbconnection();
app.listen(process.env.PORT || 3000, () => {
    console.log("Website running on port:3000");
});
