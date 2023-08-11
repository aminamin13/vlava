

var _ServicesContainer = document.getElementById('ServicesContainer')

fetch('http://localhost:3000/services')
    .then(response => response.json())
    .then(json => {


        for (let i = 0; i < json.length; i++) {

            var content = `
    <div class="icon"><i class="bi bi-${json[i].icon}"></i></div>
    <h4 class="title"><a href="">${json[i].name}</a></h4>
    <p class="description">${json[i].description}</p>
    `
            let _div = document.createElement('div')
            _div.innerHTML = content;
            _div.className = 'col-lg-4 col-md-6 icon-box';
            _ServicesContainer.appendChild(_div)
        }


    });


