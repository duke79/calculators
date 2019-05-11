class Portfolio {
  AGE = 29; //// Starting year
  CTC = 1000000; // Total CTC, it's assumed that only 75% comes in hand
  HIKE = 120000; // Assuming 1 lakh hike every year
  EXPENSES_PER_MONTH = 40000; // Assuming monthly expenses are 40k, inflation taken into account while calculating though
  INFLATION = 1.07; // Assuming 7% inflation
  ASSETS = 0; // Assuming there's no investment so far
  DURATION = 60; // Assuming death after 50 years
  RETIRE_AFTER = 10; // Assuming a wish to retire after 10 years
  TAG_LINE = "";
}

let net_worth = [];

function calculate(p) {
  net_worth = [];
  let INFLATION_SO_FAR = 1; // For calculation purposes
  for (var i = 0; i < p.DURATION; i++) {
    // console.log("AGE: " + (p.AGE + i));
    let adjusted_assets = p.ASSETS / INFLATION_SO_FAR;
    adjusted_assets = Math.floor(Math.floor(adjusted_assets) / 100) * 100;
    // console.log(adjusted_assets); // Adjusted inflation

    net_worth.push({
      age: p.AGE + i,
      worth: Math.floor(Math.floor(p.ASSETS) / 100) * 100,
      adjusted_worth: adjusted_assets
    });

    if (p.RETIRE_AFTER == i) {
      p.CTC = 0;
      p.HIKE = 0;
      // console.log("\n");
      // console.log("*****************RETIRED****************");
    }

    p.CTC = p.CTC + p.HIKE;
    p.EXPENSES_PER_MONTH = p.EXPENSES_PER_MONTH * p.INFLATION;
    p.ASSETS =
      p.ASSETS * p.RETURNS_PER_ANNUM + p.CTC - 12 * p.EXPENSES_PER_MONTH;
    INFLATION_SO_FAR = INFLATION_SO_FAR * p.INFLATION;

    // console.log("\n");
  }
  // console.log("<Net worth estimates (inflation adjusted).>\n");
  // console.log(p.TAG_LINE);
}

export default function plan({
  age = 29,
  income = 750000,
  hike = 1,
  expense = 40,
  returns = 1.2,
  retirement = 50,
  death = 60,
  assets = 0,
  inflation = 1.07
}) {
  let p = new Portfolio();
  p.AGE = age;
  p.CTC = income;
  p.HIKE = hike * 100000;
  p.EXPENSES_PER_MONTH = expense * 1000;
  p.RETURNS_PER_ANNUM = 1 + returns / 100;
  p.RETIRE_AFTER = retirement - age > 0 ? retirement - age : 0;
  p.DURATION = death - age;
  p.ASSETS = assets;
  p.INFLATION = 1 + inflation / 100;

  calculate(p);
  return net_worth;
}
