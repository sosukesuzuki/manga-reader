export type Book = {
    titile: string;
    seriesId: string;
    pageNum: number;
    imageData: {
        imageId: string;
        imageUrl: string;
    }[];
    width: string;
    height: string;
};

export type Series = {
    title: string;
    author: string;
    seriesId: string;
    publisher: string;
    volumes: number;
    description: string;
    seriesImage: string;
    books: {
        id: string;
        image: string;
        title: string;
    }[];
    width: string;
    height: string;
};
