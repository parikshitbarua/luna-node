# luna-node
Get details of any LUNA wallet. 

<h3> Initial Setup </h3>
<br>
Clone the repo and run <br><br>

```
npm install
```
<h3> Endpoints </h3><br>

POST <br>
This endpoint returns the different tokens and their balances in the wallet. It also returns details about all the transactions executed by the wallet.
You can limit the number of transactions by changing the LIMIT variable in script.ts.<br>

```
http://localhost:3000/getBalace
```
Body: <br>
```
{
  "address": "terra14l46jrdgdhaw4cejukx50ndp0hss95ekt2kfmw"
}
```
Response: <br>

```
{
  netBalance: string, // net LUNA balance in the wallet based on the last LIMIT transactions
  tokenDetails: Array, // list of tokens in the wallet along with the balance of each token
  transactions: Array, // details such as sender, receiver and amount of the last LIMIT transactions.
}
```

