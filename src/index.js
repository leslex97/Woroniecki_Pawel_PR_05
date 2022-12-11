var ajaxService = null;
function init() {

    document.getElementById("loginBtn").addEventListener("click", signIn);
    ajaxService = new AjaxService();
}
function signIn() {
    debugger;
    var login = document.getElementById("login").value;
    ajaxService.post({
        url: "http://127.0.0.1:8085/auth/login",
        data: {
            login: login,
            password: document.getElementById("password").value
        },
        success: function (response) {
            if (response.logged === true) {
                showUserDetails(login);
            } else {
                showMessage(response.message);
            }
        }
    });
}
function showUserDetails(login) {
    ajaxService.get({
        url: `http://127.0.0.1:8085/userDetails/${login}`,
        data: {
            login: login
        },
        success: function (response) {
            document.getElementById("loginPanel").style.display = "none";
            document.getElementById("appPanel").style.display = "block";
            document.getElementById("userDetails").textContent = `${response.name} ${response.surname}`;
            document.getElementById("showUsersBtn").addEventListener("click", ShowAllUssers);
        }
    });

}
function ShowAllUssers() {
    ajaxService.get({
        url: `http://127.0.0.1:8085/allUsers`,

        success: function (response) {
            let imrpove_height = 180;
            document.getElementById("showAllUsers").style.display = "block";

            for (const [key, value] of Object.entries(response)) {

                const row = document.createElement("tr");
                const elem = document.createElement('td');
                row.appendChild(elem);
                const login = document.createTextNode(key);
                elem.appendChild(login);

                for (const [info, info_values] of Object.entries(value)) {
                    if (info == 'password') { continue; }
                    const elem = document.createElement("td");
                    row.appendChild(elem);
                    const infTable = document.createTextNode(info_values);
                    elem.appendChild(infTable);
                }
                imrpove_height += 30;
                const element = document.getElementById("showAllUsers");
                element.appendChild(row);
            }
            document.getElementById("appPanel").style.width = "750px";
            document.getElementById("appPanel").style.height = imrpove_height + 'px';
        }
    });
}

function goToCalculator(){
    window.open("calculator.html","_blank");
 };




function showMessage(message) {
    document.getElementById("message").textContent = message;
}

document.addEventListener("DOMContentLoaded", init);