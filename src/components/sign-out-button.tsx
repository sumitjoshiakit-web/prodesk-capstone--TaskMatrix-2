import { LogOut } from "lucide-react";
import { signOut } from "@/lib/actions/auth";
export function SignOutButton() {
  return (
    <form action={signOut}>
      <button className="button subtle" type="submit">
        <LogOut size={16} /> Sign out
      </button>
    </form>
  );
}
