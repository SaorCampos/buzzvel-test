import { HeaderProvider } from "@/ports/HeaderProvider";
import { GetHeaderData } from "@/core/UseCases/GetHeaderData";

export class InMemoryHeaderProvider implements HeaderProvider {
    getHeaderData() {
        const headerUseCase = new GetHeaderData();
        return headerUseCase.execute();
    }
}