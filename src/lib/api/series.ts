import { get } from './apiBase';
import { Series } from '../types';

export async function getAllSeries(): Promise<Series[]> {
    const res = await get('/series');
    return res.data;
}

export async function getSeries({ id }: { id: string }): Promise<Series> {
    const res = await get(`/series/${id}`);
    return res.data;
}
