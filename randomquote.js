
let quote=document.getElementById("quote")
const quotes=[
    "ప్రతి సమస్యకూ పరిష్కారం ఉంది. దాన్ని కనిపెట్టడమే మన పని.",
   " Don’t tell people your plans. Show them your results",
    "అవకాశాలు కలిసివచ్చినప్పుడు వాటిని వినియోగించుకోండి.",
    "Happiness depends upon ourselves",
    "నమ్మకం సగం విజయానికీ, సమయ పాలన పూర్తిగా విజయానికీ దారి చూపిస్తాయి.",
    "Life isn't about finding yourself. Life is about creating yourself",
    "పరాజయం వద్దు అనుకునేవారు, విజయం పొందడంలో విఫలమవుతారు.",
    "Every moment is a fresh beginning",
    "తప్పు చేయడం తప్పు కాదు, కానీ తప్పుని ఒప్పుకోకపోవడం తప్పు.",
    "Success is going from failure to failure without losing enthusiasm",
    "సంతోషం మనిషి చేతుల్లోనే ఉంది, అదీ ఆలోచనల పైనే ఆధారపడి ఉంటుంది.",
    "The best way to appreciate your job is to imagine yourself without one",
    "మనస్సు సమాధానం తెలిస్తే సమస్య కూడా సులువుగానే పరిష్కరించుకోవచ్చు.",

];
function getQuote(){
    let singleQuote=Math.floor(Math.random()*quotes.length)
    console.log(singleQuote);
    quote.textContent=quotes[singleQuote]
}