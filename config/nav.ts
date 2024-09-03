export interface NavItem {
  name: string;
  url?: string;
  subItems?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    name: "Invest",
    subItems: [
      {
        name: "INDstocks",
        subItems: [
          {
            name: "Stocks",
            url: "https://www.indmoney.com/stocks",
          },
          {
            name: "IPO",
            url: "https://www.indmoney.com/ipo",
          },
          {
            name: "Futures & Options",
            url: "https://www.indmoney.com/futures-and-options",
          },
          {
            name: "SIP in Stocks",
            url: "https://www.indmoney.com/stocks/category/sip-in-stocks",
          },
          {
            name: "Indices",
            url: "https://www.indmoney.com/indices",
          },
        ],
      },
      {
        name: "US Stocks",
        subItems: [
          {
            name: "US Stocks",
            url: "https://www.indmoney.com/us-stocks",
          },
        ],
      },
      {
        name: "ETFs",
        subItems: [
          {
            name: "Global ETFs",
            url: "https://www.indmoney.com/us-stocks/top-etfs?heading=Explore+US+Stocks+Categories",
          },
          {
            name: "Gold ETFs",
            url: "https://www.indmoney.com/stocks/category/gold-etfs",
          },
        ],
      },
      {
        name: "Mutual Funds",
        subItems: [
          {
            name: "All Mutual Funds",
            url: "https://www.indmoney.com/mutual-funds",
          },
          {
            name: "Equity Funds",
            url: "https://www.indmoney.com/mutual-funds/equity-funds",
          },
          {
            name: "Index Funds",
            url: "https://www.indmoney.com/mutual-funds/best-index-funds",
          },
          {
            name: "Debt Funds",
            url: "https://www.indmoney.com/mutual-funds/debt-funds",
          },
          {
            name: "Hybrid Funds",
            url: "https://www.indmoney.com/mutual-funds/hybrid-funds",
          },
        ],
      },
      {
        name: "NPS",
        subItems: [
          {
            name: "Invest in NPS",
            url: "https://www.indmoney.com/features/nps-national-pension-scheme",
          },
          {
            name: "NPS Calculator",
            url: "https://www.indmoney.com/calculators/nps-calculator",
          },
        ],
      },
      {
        name: "Other Instruments",
        subItems: [
          {
            name: "Fixed Deposits",
            url: "https://www.indmoney.com/fixed-deposit",
          },
          {
            name: "Insurance",
            url: "https://www.indmoney.com/insurance",
          },
        ],
      },
    ],
  },
  {
    name: "Features",
    subItems: [
      {
        name: "Calculators",
        subItems: [
          {
            name: "SIP Calculator",
            url: "https://www.indmoney.com/calculators/sip-calculator",
          },
          {
            name: "Brokerage Calculator",
            url: "https://www.indmoney.com/calculators/brokerage-calculator",
          },
          {
            name: "SWP Calculator",
            url: "https://www.indmoney.com/calculators/swp-calculator",
          },
          {
            name: "Regular vs Direct MF Calculator",
            url: "https://www.indmoney.com/calculators/direct-regular-mutual-funds",
          },
          {
            name: "Lumpsum Calculator",
            url: "https://www.indmoney.com/calculators/lumpsum-calculator",
          },
          {
            name: "GST Calculator",
            url: "https://www.indmoney.com/calculators/gst-calculator",
          },
          {
            name: "NPS Calculator",
            url: "https://www.indmoney.com/calculators/nps-calculator",
          },
          {
            name: "Post Office RD Calculator",
            url: "https://www.indmoney.com/calculators/post-office-rd-calculator",
          },
          {
            name: "Salary Calculator",
            url: "https://www.indmoney.com/calculators/salary-calculator",
          },
          {
            name: "Gratuity Calculator",
            url: "https://www.indmoney.com/calculators/gratuity-calculator",
          },
          {
            name: "Mutual Fund Returns Calculator",
            url: "https://www.indmoney.com/calculators/mutual-funds-returns-calculator",
          },
          {
            name: "View all Calculator",
            url: "https://www.indmoney.com/calculators",
          },
        ],
      },
      {
        name: "Features",
        subItems: [
          {
            name: "Trading App",
            url: "https://www.indmoney.com/features/best-trading-app",
          },
          {
            name: "Goals Tracker",
            url: "https://www.indmoney.com/features/goals-tracker",
          },
          {
            name: "Track Your Finances",
            url: "https://www.indmoney.com/features/track-all-investments",
          },
          {
            name: "Track Credit Card Bills",
            url: "https://www.indmoney.com/features/track-credit-card-bills",
          },
          {
            name: "Credit Score",
            url: "https://www.indmoney.com/check-free-credit-score",
          },
          {
            name: "Blogs",
            url: "https://www.indmoney.com/articles",
          },
          {
            name: "View all Features",
            url: "https://www.indmoney.com/features",
          },
          {
            name: "Mutual Fund Analytics",
            url: "https://www.indmoney.com/features/mutual-fund-analytics",
          },
          {
            name: "Compare Mutual Funds",
            url: "https://www.indmoney.com/mutual-funds/compare",
          },
          {
            name: "Switch Regular to Direct MF",
            url: "https://www.indmoney.com/features/switch-regular-to-direct-mutual-fund",
          },
          {
            name: "Track Family Mutual Funds",
            url: "https://www.indmoney.com/features/track-family-mutual-funds",
          },
          {
            name: "Set Nominee for Mutual Funds",
            url: "https://www.indmoney.com/mutual-funds/mutual-fund-nomination",
          },
        ],
      },
    ],
  },
  {
    name: "Market",
    subItems: [
      {
        name: "Market Movers",
        subItems: [
          {
            name: "Stock Market Today",
            url: "https://www.indmoney.com/market",
          },
          {
            name: "52 Week High",
            url: "https://www.indmoney.com/stocks/category/52-week-high",
          },
          {
            name: "52 Week Low",
            url: "https://www.indmoney.com/stocks/category/52-week-low",
          },
          {
            name: "Top Gainers",
            url: "https://www.indmoney.com/stocks/category/top-gainers",
          },
          {
            name: "Top Losers",
            url: "https://www.indmoney.com/stocks/category/top-losers",
          },
          {
            name: "Only Buyers",
            url: "https://www.indmoney.com/stocks/category/only-buyers",
          },
          {
            name: "Only Sellers",
            url: "https://www.indmoney.com/stocks/category/only-sellers",
          },
        ],
      },
      {
        name: "Stock Category",
        subItems: [
          {
            name: "Stocks to buy today",
            url: "https://www.indmoney.com/stocks/category/buy-stocks",
          },
          {
            name: "Penny Stocks",
            url: "https://www.indmoney.com/stocks/category/penny-stocks",
          },
          {
            name: "Multi-bagger Stocks",
            url: "https://www.indmoney.com/stocks/category/multibagger-stocks",
          },
          {
            name: "Nifty 50 Stocks",
            url: "https://www.indmoney.com/stocks/category/nifty-50-stocks",
          },
          {
            name: "Large Cap Stocks",
            url: "https://www.indmoney.com/stocks/category/large-cap-stocks",
          },
          {
            name: "Mid Cap Stocks",
            url: "https://www.indmoney.com/stocks/category/mid-cap-stocks",
          },
          {
            name: "Small Cap Stocks",
            url: "https://www.indmoney.com/stocks/category/small-cap-stocks",
          },
        ],
      },
      {
        name: "Indices",
        subItems: [
          {
            name: "BSE Sensex",
            url: "https://www.indmoney.com/indices/sensex",
          },
          {
            name: "Nifty 50",
            url: "https://www.indmoney.com/indices/nifty-50",
          },
          {
            name: "Nifty Midcap 100",
            url: "https://www.indmoney.com/indices/nifty-midcap-100",
          },
          {
            name: "Bank Nifty",
            url: "https://www.indmoney.com/indices/bank-nifty",
          },
          {
            name: "FINNIFTY",
            url: "https://www.indmoney.com/indices/nifty-financial",
          },
          {
            name: "Nifty 500",
            url: "https://www.indmoney.com/indices/nifty-500",
          },
          {
            name: "Nifty IT",
            url: "https://www.indmoney.com/indices/nifty-it",
          },
        ],
      },
      {
        name: "Global Indices",
        subItems: [
          {
            name: "Gift Nifty",
            url: "https://www.indmoney.com/indices/gift-nifty",
          },
          {
            name: "Dow Jones Industrial Average",
            url: "https://www.indmoney.com/indices/dow-jones-industrial-average",
          },
          {
            name: "S&P 500",
            url: "https://www.indmoney.com/indices/s-p-500",
          },
          {
            name: "Nasdaq 100",
            url: "https://www.indmoney.com/indices/nasdaq-100",
          },
          {
            name: "Russell 2000 Index",
            url: "https://www.indmoney.com/indices/russell-2000-index",
          },
          {
            name: "Dow Jones Market",
            url: "https://www.indmoney.com/indices/dow-jones-market",
          },
          {
            name: "View all Indices",
            url: "https://www.indmoney.com/indices",
          },
        ],
      },
    ],
  },
  {
    name: "Pricing",
    url: "https://www.indmoney.com/pricing?type=indian-stocks",
  },
  {
    name: "Disclosure",
    subItems: [
      {
        name: "Complaint Status",
        url: "https://www.indmoney.com/complaints-status",
      },
      {
        name: "SEBI Investor Charter - Investment Advisor",
        url: "https://www.indmoney.com/sebi-investor-charter",
      },
      {
        name: "More",
        url: "https://www.indmoney.com/page/policy-center",
      },
    ],
  },
];
