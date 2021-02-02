function maxProfit(prices: number[]): number {
    let profit = 0;
    
    if (prices.length) {
        for (let index = 0; index < prices.length - 1; index++) {
            const price_difference = prices[index + 1] - prices[index]
            
            if (price_difference > 0) {
                profit += price_difference
            }
        }
    }

    return profit
}