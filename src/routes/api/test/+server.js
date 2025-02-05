import { json } from "@sveltejs/kit";
import Database from "better-sqlite3";

export function GET({ locals, url }) {
  console.log(Database);
  return json({ hello: "world" });
}
