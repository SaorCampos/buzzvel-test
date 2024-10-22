import { HeaderData } from "@/core/UseCases/GetHeaderData";

export interface HeaderProvider {
    getHeaderData(): HeaderData;
}