
function getData() {
    // Got data from source
    fetch('https://danepubliczne.imgw.pl/api/data/synop')
        // Transformed response to json
        .then(res => res.json())
        // Creanting content from data
        .then(data => {
            
            let row = document.querySelector('.row');

            for (let i = 0; i < data.length; i++) {
                // Creating columns
                let column = document.createElement('div');
                column.classList.add('col-md-4');
                column.classList.add('col-lg-3');
                column.classList.add('col-xl-2');
                column.classList.add('column-settings');
                column.classList.add('border');
                column.classList.add('border-secondary');

                // Created header that will be city name
                let header = document.createElement('h2');
                header.innerText = `${data[i].stacja}`;

                // Created pargarapsh strogin content and added them classes 
                let pTemperature = document.createElement('p');
                let pHumidity = document.createElement('p');
                let pPressure = document.createElement('p');
                pTemperature.classList.add('lead');
                pHumidity.classList.add('lead');
                pPressure.classList.add('lead');
                pTemperature.classList.add('m-0');
                pHumidity.classList.add('m-0');
                pPressure.classList.add('m-0');
                // Adding content to paragrapsh
                pTemperature.innerHTML = `Temperatura: <span class='bolded'>${data[i].temperatura}°C</span>`;
                pHumidity.innerHTML = `Wilgotność względna: <span class='bolded'>${data[i].wilgotnosc_wzgledna}%</span>`;
                pPressure.innerHTML = `Ciśnienie: <span class='bolded'>${data[i].cisnienie} hPa</span>`;

                column.appendChild(header);
                column.appendChild(pTemperature);
                column.appendChild(pHumidity);
                column.appendChild(pPressure);

                row.appendChild(column);
            }
        });
        
};

getData();
