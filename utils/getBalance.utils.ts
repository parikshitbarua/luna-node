import axios from "axios";

export const getBalance = async (address: string) => {
    try {
        const { data } = await axios(`https://terra-classic-lcd.publicnode.com/cosmos/bank/v1beta1/balances/${address}`);
        const balances = data.balances;
        const balaceDetails = [];
        for( let i = 0; i < balances.length; i++) {
            balaceDetails.push({
                token: balances[i].denom,
                amount: balances[i].amount/ 10e5
            })
        }
        return balaceDetails;
    } catch (err) {
        return null;
    }

}