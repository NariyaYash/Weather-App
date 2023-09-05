const forcast = require("./utils/forcast");

const address = process.argv[2];

if (!address) {
  console.log("Please Enter Address in Commnd Line");
} else {
  forcast(address, (error, data) => {
    if (error !== undefined) {
      return console.log("Error : ", error);
    }

    const { temp_c, temp_f } = data;
    console.log(" temp_c: ", temp_c, " temp_f: ", temp_f);
  });
}
