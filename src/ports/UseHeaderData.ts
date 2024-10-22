import { InMemoryHeaderProvider } from "@/app/adapters/InMemoryHeaderProvider";

export const useHeaderData = () => {
  const provider = new InMemoryHeaderProvider();
  return provider.getHeaderData();
};