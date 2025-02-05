import { json } from "@sveltejs/kit";

export function GET({ locals, url }) {
  return json({ hello: "world" });
}
