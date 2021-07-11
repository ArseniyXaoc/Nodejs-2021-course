export class CreateBoardDto {

    id: string

    title: string;

    columns: Array<{title: string, order: number}>
}
