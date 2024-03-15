import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2djMpZ0oCvvZtLjHNOTUb9I15mP",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
