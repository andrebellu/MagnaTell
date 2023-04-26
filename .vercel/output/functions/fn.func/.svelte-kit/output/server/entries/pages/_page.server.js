import { r as redirect } from "../../chunks/index.js";
async function load({ locals }) {
  throw redirect(302, "/home");
}
export {
  load
};
