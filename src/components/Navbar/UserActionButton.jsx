import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between  gap-2">
      {user ? <Link href="/users/dashboard">Dashboard</Link> : null}
      <Link href={actionURL} className="bg-dark text-primary px-12">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
