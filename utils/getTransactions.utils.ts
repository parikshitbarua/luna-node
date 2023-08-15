import axios from "axios";

export const getTransactions = async (address: string, limit: number) => {
    try {
        const response = await axios.get(`https://terra-classic-fcd.publicnode.com/v1/txs?account=${address}&limit=${limit}`);
        const trxs = await response.data;
        return trxs.txs;
    } catch (err) {
        return null;
    }

}