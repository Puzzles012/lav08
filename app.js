<<<<<<< HEAD
const greeting = require('./src/greeting');
const app = require("./src/api");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {  
	console.log("Server running on port " + PORT);
});
console.log(greeting('Totoro'));
=======
import greeting;

const greeting = require('./greeting');
console.log(greeting('Totoro'));
>>>>>>> 51b717b7ef64ebe53e9c4cb279dfe773e240b062
