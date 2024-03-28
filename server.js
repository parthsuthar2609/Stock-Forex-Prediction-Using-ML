const symbols = ['TCS', 'HDFCBANK.BSE', 'INFY'];




async function fetchStockData(symbol) {
    const url = `https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&datatype=json`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '403733850fmsh70e5bb62f0b3edep1127e5jsnbd36276b0bf1',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Failed to fetch data for ${symbol}. Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(`Stock data for ${symbol}:`, result);
    } catch (error) {
        console.error(error);
    }
}

(async () => {
    for (const symbol of symbols) {
        await fetchStockData(symbol);
    }
})();


