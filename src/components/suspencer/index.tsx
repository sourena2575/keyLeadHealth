import { Suspense } from "react";

const PageLoading = () => <div></div>;

export const Suspencer = ({ children }) => {
  return <Suspense fallback={<PageLoading />}>{children}</Suspense>;
};
