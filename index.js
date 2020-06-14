const { sequelize } = require("./src/utils/db");
const { Customer } = require("./src/models/customer");

const init = async () => {
  console.log(Customer === sequelize.models.Customer); // true

  const c = await Customer.findOne({
    where: {
      Id: 5,
    },
  });

  console.log(c);

  console.log(c.Email);
};
init();
