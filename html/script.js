fetch('temp.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('includedContent').innerHTML = data;
    })

document.addEventListener('DOMContentLoaded', function () {
    const countryCodeDropdown = document.getElementById('countryCode');
    
        // Fetch the countries from the JSON file
    fetch('CountryCodes.json')
        .then(response => response.json())
        .then(countries => {
                // Populate the dropdown with country options
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.code;
                option.text = `${country.name} (${country.dial_code}) (${country.code})`;
                countryCodeDropdown.appendChild(option);
            });
        })
});