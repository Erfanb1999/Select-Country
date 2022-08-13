const allCountriesStr = `Afghanistan, Albania, Algeria, Andorra, Angola, Antigua and Barbuda, Argentina, Armenia, Australia, Austria, Austrian Empire, Azerbaijan, Baden, Bahamas, Bahrain, Bangladesh, Barbados, Bavaria, Belarus, Belgium, Belize, Benin (Dahomey), Bolivia, Bosnia and Herzegovina, Botswana, Brazil, Brunei, Brunswick and Lüneburg, Bulgaria, Burkina Faso (Upper Volta), Burma, Burundi, Cabo Verde, Cambodia, Cameroon, Canada, Cayman Islands, Central African Republic, Central American Federation, Chad, Chile, China, Colombia, Comoros, Congo Free State, Costa Rica, Cote d'Ivoire (Ivory Coast), Croatia, Cuba, Cyprus, Czechia, Czechoslovakia, Democratic Republic of the Congo, Denmark, Djibouti, Dominica, Dominican Republic, Duchy of Parma, East Germany (German Democratic Republic), Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia, Eswatini, Ethiopia, Fiji, Finland, France, Gabon, Gambia, Georgia, Germany, Ghana, Grand Duchy of Tuscany, Greece, Grenada, Guatemala, Guinea, Guinea-Bissau, Guyana, Haiti, Hanover, Hanseatic Republics, Hawaii, Hesse, Holy See, Honduras, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Israel, Italy, Jamaica, Japan, Jordan, Kazakhstan, Kenya, Kingdom of Serbia/Yugoslavia, Kiribati, Korea, Kosovo, Kuwait, Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Lew Chew (Loochoo), Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Marshall Islands, Mauritania, Mauritius, Mecklenburg-Schwerin, Mecklenburg-Strelitz, Mexico, Micronesia, Moldova, Monaco, Mongolia, Montenegro, Morocco, Mozambique, Namibia, Nassau, Nauru, Nepal, Netherlands, New Zealand, Nicaragua, Niger, Nigeria, North German Confederation, North German Union, North Macedonia, Norway, Oldenburg, Oman, Orange Free State, Pakistan, Palau, Panama, Papal States, Papua New Guinea, Paraguay, Peru, Philippines, Piedmont-Sardinia, Poland, Portugal, Qatar, Republic of Genoa, Republic of Korea (South Korea), Republic of the Congo, Romania, Russia, Rwanda, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, Samoa, San Marino, Sao Tome and Principe, Saudi Arabia, Schaumburg-Lippe, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Solomon Islands, Somalia, South Africa, South Sudan, Spain, Sri Lanka, Sudan, Suriname, Sweden, Switzerland, Syria, Tajikistan, Tanzania, Texas, Thailand, Timor-Leste, Togo, Tonga, Trinidad and Tobago, Tunisia, Turkey, Turkmenistan, Tuvalu, Two Sicilies, Uganda, Ukraine, Union of Soviet Socialist Republics, United Arab Emirates, United Kingdom (USK), United State (USA), Uruguay, Uzbekistan, Vanuatu, Venezuela, Vietnam, Württemberg, Yemen, Zambia, Zimbabwe`;
const countriesArray = allCountriesStr.split(", ")
const countriesElem = document.querySelector(".countries");
for(let i = 0; i < countriesArray.length; i++) {
    const createElemP = document.createElement("p");
    createElemP.textContent = countriesArray[i];
    countriesElem.appendChild(createElemP);
}

const openItems = document.querySelector(".title");
openItems.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("d-none");
});

const items = document.querySelectorAll(".sub_items p");
items.forEach(e => {
    e.addEventListener("click", function () {
        openItems.firstElementChild.textContent = this.textContent;
    })
})

const input = document.querySelector(".sub_items .search input");
input.addEventListener("keyup", function () {
    let index = 0;
    items.forEach(e => {
        if (e.textContent.toUpperCase().includes(this.value.toUpperCase())) {
            e.classList.remove("d-none");
            index = 1;
        } else {
            e.classList.add("d-none");
        }
    })
    if (!index) {
        document.querySelector(".empty").classList.remove("d-none");
    } else {
        document.querySelector(".empty").classList.add("d-none");
    }
})