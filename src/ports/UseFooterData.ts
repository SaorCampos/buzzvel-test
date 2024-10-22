import { getCurrentYear, getCompanyInfo } from "@/core/FooterContent";

export const useFooterData = () => {
    const year = getCurrentYear();
    const company = getCompanyInfo();

    return {
        year,
        company,
    };
};