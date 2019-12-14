import { Book } from '../types';
import { get } from './apiBase';

export async function getBook({ id }: { id: string }): Promise<Book> {
    const res = await get(`/books/${id}`);
    return res.data;
}
