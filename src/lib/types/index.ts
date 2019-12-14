export type Book = {
    id: string;
    image: string;
    title: string;
};

export type Series = {
    title: string;
    author: string;
    publisher: string;
    volumes: number;
    description: string;
    seriesImage: string;
    books: Book[];
    width: string;
    height: string;
};
