import { User } from "@/types/auth";
import UserCard from "./UserCard";


export default function UserList({users}:{users:User[]}) {
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-4
        md:gap-5
        lg:grid-cols-3
        lg:gap-6
      "
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}