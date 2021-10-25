import { User } from "./models/User";

const user = new User({ id: 1, name: "ThanhNT" });
// user.fetch();

user.on("aaa", () => {});

const name = user.get("name");
console.log("name", name);

console.log({ user });
