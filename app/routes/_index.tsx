import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix + Plasmic</h1>
      <ul>
        <li>
          <Link to="/plasmic">Go to /plasmic route</Link>
        </li>
      </ul>
    </div>
  );
}
