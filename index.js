

var _ServicesContainer = document.getElementById('ServicesContainer')
for (let i = 0; i < 4 ; i++) {
    var _icon = "";
    var _title = '';
    
    if (i == 0) {
        _icon = 'map';
        _title = "Location";
    }
    if (i == 1) {
        _icon = 'envelope';
        _title = "Email";

    }
    if (i == 2) {
        _icon = 'alexa';
        _title = "Alexa";

    }
    if (i == 3) {
        _icon = 'briefcase';
        _title = "Briefcase";

    }
    var content = `
    <div class="icon"><i class="bi bi-${_icon}"></i></div>
    <h4 class="title"><a href="">${_title}</a></h4>
    <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
    `
    let _div = document.createElement('div')
    _div.innerHTML = content;
    _div.className = 'col-lg-4 col-md-6 icon-box';
    _ServicesContainer.appendChild(_div)
}   