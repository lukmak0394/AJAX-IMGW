
function getData() {
    fetch('https://danepubliczne.imgw.pl/api/data/synop')
        .then(res => res.json())
        .then(data => {
            
            let row = document.querySelector('.row');
            for (let i = 0; i < data.length; i++) {
                let column = document.createElement('div');
                column.classList.add('col-2');
                column.classList.add('py-3');
                column.classList.add('border');
                column.classList.add('border-secondary');

            };
        });
};

getData();