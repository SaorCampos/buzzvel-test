export interface HeaderData {
    phoneNumber: string;
    requestQuoteUrl: string;
}

export interface MenuItem {
    label: string;
    link: string;
}

export class GetHeaderData {
    execute(): HeaderData {
        return {
            phoneNumber: '555 818 282',
            requestQuoteUrl: '/quote'
        };
    }
}