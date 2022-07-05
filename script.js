function Id(){
    var ID = Date.now();
    return ID;
};
var updateId;
var arr = [];
function add() {
    optionval = document.getElementById('name').value;
    var obj = {
        opt : optionval,
        id : Id()
    }
    
    var index = arr.findIndex(function (e) {
        return e.id == updateId;
    })
    if (index>-1) {
        arr.splice(index,1,obj)
    }
    else {
        arr.push(obj);
    }

    render();
    clear();
}

function render() {
    html = "";
    for(var i=0; i<arr.length; i++) {
        arr[i].opt
        html += `<option id="${arr[i].id}" value="${arr[i].opt}">${arr[i].opt}</option>`
    }
    document.getElementById('list').innerHTML = html;
}

function clear() {
    document.getElementById('name').value ="";
}

function remove() {
    var select = document.getElementById('list');   
    // Lấy giá trị của select
    var a = select.options[select.selectedIndex].id;
    for (var i=0; i<arr.length; i++) {
        var b = document.getElementById('list').querySelectorAll('option')[i].id;
        if (b == a) {
            arr.splice(i,1)
        }
    }
    render();

}

function edit() {
    var select = document.getElementById('list');   
    var a = select.options[select.selectedIndex].id;
    console.log(select.options[select.selectedIndex].value)
    for (var i=0; i<arr.length; i++) {
        var b = document.getElementById('list').querySelectorAll('option')[i].id;
        if (b == a) {
            document.getElementById('name').value = arr[i].opt;
            break;
        }
    }
    return updateId = b;
}

// User keyboard
function isKeyPressed(event, expectedKey, expectedCode) {
    var code = event.which || event.keyCode; 
    if (expectedKey === event.key || code === expectedCode) {
      return true;
    }
    return false;
  }
  
document.getElementById('name').addEventListener('keydown', function(event) {
    if (isKeyPressed(event, 'Enter', 13)) {
      event.preventDefault();
      add();
    }
});

document.addEventListener('keydown', function(event) {
 if (isKeyPressed(event, 'Esc', 27)) {
        event.preventDefault();
        render();
        clear();
        updateId ="";
      }
});

document.addEventListener('keydown', function(event) {
    if (isKeyPressed(event, 'Delete', 46)) {
           event.preventDefault();
           remove();
         }
});


document.addEventListener('keydown', function(event) {
    if (isKeyPressed(event, 'F2', 113)) {
           event.preventDefault();
           edit();
         }
});


