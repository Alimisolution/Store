import bcrypt from "bcryptjs";

const user = [
  {
    name: "Alimi Rosheed",
    email: "alimi@gmail.com",
    isAdmin: true,
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default user;
