

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
        websiteUrl: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/

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