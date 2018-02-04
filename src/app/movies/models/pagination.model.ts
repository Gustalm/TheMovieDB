export class Pagination {
    page: number;
    totalResults: number ;
    totalPages: number;

    constructor(data: any){
        this.page = data['page'] || 1;
        this.totalResults = data['total_results'] || 0;
        this.totalPages = data['total_pages'] || 0;
    }
}