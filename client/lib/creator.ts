export const isCreator = (userId?: string | null) => {
  return userId === process.env.NEXT_PUBLIC_CREATOR_ID;
};
