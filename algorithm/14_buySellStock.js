//LeetCode 121. Best Time to Buy and Sell Stock
const maxProfit = (prices) => {

    let minBuyPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices){
        if(price < minBuyPrice){
            minBuyPrice = price;
        }else if(price - minBuyPrice > maxProfit){
            maxProfit = price - minBuyPrice;
        }
    }
    return maxProfit;
}

const prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));

//LeetCode 122. Best Time to Buy and Sell Stock(can buy and sell at the same day)

const maxProfit2 = (prices) => {
    let profit = 0;
    for( let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i-1]){
            profit += prices[i] - prices[i-1];
        }
    }

    return profit;
}

const prices2 = [7,1,5,3,6,7];

console.log(maxProfit2(prices2));
