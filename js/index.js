

var websiteName = document.getElementById("websiteName");
var websiteUrl = document.getElementById("websiteUrl");


var rowsList = [];

console.log(websiteName.value);

function addRow() 
{
    var rows = 
    {
        websiteName: websiteName.value,
        websiteUrl: websiteUrl.value
    };
    if(websiteName.classList.contains("is-valid") && websiteUrl.classList.contains("is-valid"))
    {
        rowsList.push(rows);
        displayRow(rowsList);
    }
    
}
function deleteRow(index) 
{
    rowsList.splice(index,1);
    displayRow(rowsList);
}

function displayRow(rowsList) 
{
    
    var cartoona = ``;
    for (var i = 0; i < rowsList.length; i++) 
    {
        cartoona += `<tr>
        <td class="pt-3" >${i+1}</td>
        <td class="pt-3">${rowsList[i].websiteName}</td>
        <td>
            <button class="btn btn-visit" onclick="visitWebsite(${i})" data-index=${i+1}>
                <i class="fa-solid fa-eye pe-2"></i>Visit
            </button>
        </td>
        <td>
            <button class="btn btn-delete pe-2" onclick="deleteRow(${i})" data-index=${i+1}>
                <i class="fa-solid fa-trash-can"></i>
                Delete
            </button>
        </td>
        </tr>`;     
    }
    

    document.getElementById("tableContent").innerHTML = cartoona;

}

function visitWebsite(e) {
    console.log(rowsList[e].websiteUrl);
    var Regex = /^https?:\/\//;
    if (Regex.test(rowsList[e].websiteUrl)) {
      open(rowsList[e].websiteUrl);
    } else {
      open(`https://${rowsList[e].websiteUrl}`);
    }
  }

function validation(element)
{
    var regex =
    {
        websiteName: /^[A-Za-z]\w{3,10}\s?\w{0,10}$/,
        websiteUrl: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i


    };
    
    if(regex[element.id].test(element.value))
    {
        element.classList.add("is-valid");
        element.nextElementSibling.classList.add("d-none");
        element.classList.remove("is-invalid");
    }
    else
    {
        element.nextElementSibling.classList.remove("d-none");
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
    }
}