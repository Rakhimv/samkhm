import axios from "axios";
import { burl } from "../../Utils/Global";

export const GetNewsArray = async (limit?: number) => {
    try {
        const req = await axios.get(burl + `news.json${limit ? `?orderBy="$key"&limitToLast=${limit}` : ''}`);
        return Object.keys(req.data).map(key => {
            const newsItem = req.data[key];
            newsItem.key = key;
            return newsItem;
        }).reverse();
    } catch {
        return [];
    }
};

