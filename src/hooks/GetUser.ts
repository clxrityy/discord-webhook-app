import { useUser } from "@clerk/nextjs"

export default function GetUser() {
    const { user } = useUser();

    return user;
}