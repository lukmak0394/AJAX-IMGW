

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
                pTemperature.classList.add('m-0');
                pHumidity.classList.add('m-0');
                pPressure.classList.add('m-0');

                // Display specific text if there's no data in given data set and display data if there's info in data set
                if(data[i].cisnienie === null) {
                    pPressure.innerHTML = `Ciśnienie: <span class='bolded'>brak danych</span>`;
                } else {
                    pPressure.innerHTML = `Ciśnienie: <span class='bolded'>${data[i].cisnienie} hPa</span>`;
                };

                if (data[i].temperatura === null) {
                    pTemperature.innerHTML = `Temperatura: <span class='bolded'>brak danych</span>`;
                } else {
                    pTemperature.innerHTML = `Temperatura: <span class='bolded'>${data[i].temperatura}°C</span>`;
                };

                if (data[i].wilgotnosc_wzgledna === null) {
                    pHumidity.innerHTML = `Wilgotność względna: <span class='bolded'>brak danych</span>`;
                } else {
                    pHumidity.innerHTML = `Wilgotność względna: <span class='bolded'>${data[i].wilgotnosc_wzgledna}%</span>`;
                };

                column.appendChild(header);
                column.appendChild(pTemperature);
                column.appendChild(pHumidity);
                column.appendChild(pPressure);

                row.appendChild(column);
            };
        });
        
};

getData();