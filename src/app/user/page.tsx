import type { Metadata } from "next";
import NavBar from "../components/navBar";
import Registration from "../components/registration";

export const metadata: Metadata = {
  title: "users",
};
export default function UsersPage() {
  return (
    <div>
      <NavBar />
      <Registration />
    </div>
  );
}
