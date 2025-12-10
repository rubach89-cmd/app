// Database of crops with planting information
const cropsDatabase = [
    {
        name: "Tomat",
        icon: "🍅",
        season: "vår",
        plantingTime: "April-Mai (innendørs), Juni (utendørs)",
        description: "Populær grønnsak som trives i varme forhold",
        tips: [
            "Start innendørs 6-8 uker før siste frost",
            "Trenger mye sollys (6-8 timer daglig)",
            "Vann jevnlig, men unngå å vanne bladene",
            "Gi støtte med stikker eller bur"
        ]
    },
    {
        name: "Gulrot",
        icon: "🥕",
        season: "vår",
        plantingTime: "April-Juli",
        description: "Robust rotgrønnsak som er enkel å dyrke",
        tips: [
            "Så direkte i jorda, 1-2 cm dypt",
            "Hold jorda fuktig under spiring",
            "Tynn ut plantene til 5 cm mellomrom",
            "Trenger løs, steinfri jord"
        ]
    },
    {
        name: "Salat",
        icon: "🥬",
        season: "vår",
        plantingTime: "Mars-September",
        description: "Rask-voksende bladgrønnsak",
        tips: [
            "Kan såes tidlig på våren",
            "Høst bladene jevnlig for kontinuerlig vekst",
            "Trenger regelmessig vanning",
            "Foretrekker kjøligere temperaturer"
        ]
    },
    {
        name: "Agurk",
        icon: "🥒",
        season: "sommer",
        plantingTime: "Mai-Juni",
        description: "Varmekjær plante som gir rik avling",
        tips: [
            "Trenger varme forhold (minst 15°C)",
            "Vann rikelig, spesielt under fruktutvikling",
            "Kan klatre, gi støtte eller la dem spre seg",
            "Høst regelmessig for mer frukt"
        ]
    },
    {
        name: "Paprika",
        icon: "🫑",
        season: "vår",
        plantingTime: "Mars-April (innendørs), Juni (utendørs)",
        description: "Næringsrik og fargerik grønnsak",
        tips: [
            "Start tidlig innendørs",
            "Trenger varm jord (minst 18°C)",
            "Vann jevnlig og gjødsle regelmessig",
            "Beskyt mot sterke vinder"
        ]
    },
    {
        name: "Ærter",
        icon: "🫛",
        season: "vår",
        plantingTime: "April-Mai",
        description: "Kaldtolerante belgfrukter",
        tips: [
            "Tåler lett frost",
            "Gi støtte til høye sorter",
            "Vann moderat, for mye vann kan skade",
            "Høst når belgene er fyldige"
        ]
    },
    {
        name: "Poteter",
        icon: "🥔",
        season: "vår",
        plantingTime: "April-Mai",
        description: "Allsidig og næringsrik knollvekst",
        tips: [
            "Plant i rishøyder eller gruver",
            "Hypp opp jord rundt plantene etter hvert",
            "Vann regelmessig, spesielt når knollene dannes",
            "Høst når bladverket visner"
        ]
    },
    {
        name: "Løk",
        icon: "🧅",
        season: "vår",
        plantingTime: "April-Mai",
        description: "Viktig basis-grønnsak i kjøkkenet",
        tips: [
            "Plant løksett 2-3 cm dypt",
            "Trenger godt drenert jord",
            "Vann moderat",
            "Høst når bladene begynner å falle"
        ]
    },
    {
        name: "Squash",
        icon: "🥒",
        season: "sommer",
        plantingTime: "Mai-Juni",
        description: "Produktiv og lettdyrket sommervekst",
        tips: [
            "Trenger mye plass",
            "Vann ved roten, ikke på bladene",
            "Høst unge frukter for best smak",
            "Gi rikelig med kompost"
        ]
    },
    {
        name: "Reddik",
        icon: "🌶️",
        season: "vår",
        plantingTime: "April-September",
        description: "Rask-voksende rotgrønnsak",
        tips: [
            "Klar til høsting på 3-4 uker",
            "Så tynt eller tynn ut tidlig",
            "Trenger jevn fuktighet",
            "Kan såes flere ganger i sesongen"
        ]
    },
    {
        name: "Brokkoli",
        icon: "🥦",
        season: "vår",
        plantingTime: "April-Mai",
        description: "Næringsrik kålvekst",
        tips: [
            "Trenger kjølig vær for best resultat",
            "Vann jevnlig",
            "Høst hovedhodet før blomstene åpnes",
            "Sideskudd vil fortsette å vokse"
        ]
    },
    {
        name: "Spinat",
        icon: "🥬",
        season: "vår",
        plantingTime: "Mars-April og August-September",
        description: "Sunt og raskt-voksende bladgrønn",
        tips: [
            "Foretrekker kjølige temperaturer",
            "Kan såes tidlig om våren",
            "Hold jorda fuktig",
            "Høst ytre blader først"
        ]
    },
    {
        name: "Kål",
        icon: "🥬",
        season: "høst",
        plantingTime: "Mai-Juni",
        description: "Robust vekst for høst og vinter",
        tips: [
            "Trenger lang vekstsesong",
            "Tåler frost godt",
            "Gi rikelig plass mellom plantene",
            "Beskyt mot kålorm"
        ]
    },
    {
        name: "Urter (basilikum, persille)",
        icon: "🌿",
        season: "vår",
        plantingTime: "Mai-Juni",
        description: "Aromatiske kjøkkenurter",
        tips: [
            "De fleste urter trives i sol",
            "Basilikum er varmekjær, persille er hardførere",
            "Klipp jevnlig for buskete vekst",
            "Kan dyrkes i potter"
        ]
    },
    {
        name: "Bønner",
        icon: "🫘",
        season: "sommer",
        plantingTime: "Mai-Juni",
        description: "Produktiv og enkel å dyrke",
        tips: [
            "Venter med såing til jorda er varm",
            "Stangbønner trenger støtte",
            "Høst regelmessig for mer bønner",
            "Vann ved roten"
        ]
    }
];

// State
let filteredCrops = [...cropsDatabase];

// DOM elements
const searchInput = document.getElementById('searchInput');
const seasonFilter = document.getElementById('seasonFilter');
const cropsContainer = document.getElementById('cropsContainer');

// Initialize the app
function init() {
    renderCrops();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    seasonFilter.addEventListener('change', handleSeasonFilter);
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filterCrops(searchTerm, seasonFilter.value);
}

// Handle season filter
function handleSeasonFilter(e) {
    const season = e.target.value;
    filterCrops(searchInput.value.toLowerCase(), season);
}

// Filter crops
function filterCrops(searchTerm, season) {
    filteredCrops = cropsDatabase.filter(crop => {
        const matchesSearch = crop.name.toLowerCase().includes(searchTerm) ||
                            crop.description.toLowerCase().includes(searchTerm);
        const matchesSeason = !season || crop.season === season;
        return matchesSearch && matchesSeason;
    });
    renderCrops();
}

// Render crops
function renderCrops() {
    if (filteredCrops.length === 0) {
        cropsContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: white; padding: 40px;">
                <h2>Ingen vekster funnet</h2>
                <p>Prøv å endre søkekriteriene dine</p>
            </div>
        `;
        return;
    }

    cropsContainer.innerHTML = filteredCrops.map(crop => `
        <div class="crop-card">
            <div class="crop-icon">${crop.icon}</div>
            <h2>${crop.name}</h2>
            <p class="crop-info">${crop.description}</p>
            <div class="planting-time">
                <strong>📅 Plantetid:</strong> ${crop.plantingTime}
            </div>
            <div class="tips">
                <h3>💡 Tips for vellykket dyrking:</h3>
                <ul>
                    ${crop.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
