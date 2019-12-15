export type BookImageData = {
    imageId: string;
    imageUrl: string;
};

export type Book = {
    title: string;
    seriesId: string;
    pageNum: number;
    imageData: BookImageData[];
    width: string;
    height: string;
};

export type BookOutline = {
    id: string;
    image: string;
    title: string;
};

export type Series = {
    title: string;
    author: string;
    seriesId: string;
    publisher: string;
    volumes: number;
    description: string;
    seriesImage: string;
    books: BookOutline[];
    width: string;
    height: string;
};
