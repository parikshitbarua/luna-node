import express, {Request, Response} from 'express';
import bodyParser from "body-parser";
import {getTransactions} from "./utils/getTransactions.utils";
import {cleanTransactions} from "./utils/cleanTransactions.utils";
import {getBalance} from "./utils/getBalance.utils";

const PORT = 3000;
const LIMIT = 10;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`<h3> Please make a POST call to </h3><br><i>http://localhost:3000/getBalance</i><br><br>req body =<br> { <br>"address": "xyz" <br>
}`);
})

app.post('/getBalance', async (req: Request, res: Response) => {
    const { address } = req.body;

    const balanceDetails = await getBalance(address);
    const trxs = await getTransactions(address, LIMIT);
    const addressTransactions = cleanTransactions(trxs);

    if (balanceDetails == null || trxs == null) {
        res.status(500).json({
            message: "Some error occurred. Please try again"
        })
    }

    res.json({
        balanceDetails,
        addressTransactions
    });

});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})