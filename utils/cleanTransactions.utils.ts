export const cleanTransactions = (trxResponse: Array<any>) => {
    const formattedTrx = [];
    for (let i = 0; i < trxResponse.length; i++) {
        let sender, receiver, amount;
        if (trxResponse[i]?.tx?.value?.msg[0]?.type == "wasm/MsgExecuteContract") {

            sender = trxResponse[i]?.tx?.value?.msg[0]?.value?.sender;
            receiver = trxResponse[i]?.tx?.value?.msg[0]?.value?.msg?.transfer?.recipient;
            amount = trxResponse[i]?.tx?.value?.msg[0]?.value?.msg?.transfer?.amount / 10e5;

        } else {

            sender = trxResponse[i]?.tx?.value?.msg[0]?.value?.from_address;
            receiver = trxResponse[i]?.tx?.value?.msg[0]?.value?.to_address;
            amount = trxResponse[i]?.tx?.value?.msg[0]?.value?.amount[0]?.amount / 10e5;

        }

        formattedTrx.push({
            sender,
            receiver,
            amount
        })
    }

    return formattedTrx;

}