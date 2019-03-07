const getdata = document.querySelector("#getdata");
const data = document.querySelector(".data");

const senddata = document.querySelector("#senddata");
const imie = document.querySelector("#name");
const nazwisko = document.querySelector("#surname");

const receivedata = document.querySelector("#receivedata");

getdata.addEventListener("click", function()
{
    const xhr = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/todos";
    xhr.open("GET", url, true);
    xhr.send();
    xhr.addEventListener("load", function()
    {
        if(this.status == 200)
        {
            const wynik = JSON.parse(xhr.response);
            for (i=0; i<wynik.length; i++)
            {
                let p = document.createElement("p");
                    p.innerText = wynik[i].id + " - " + wynik[i].title;
                data.appendChild(p);
            }
        }
        else
        {
            let p = document.createElement("p");
                p.innerText = "Status: " + this.status;
            let url_p = document.createElement("p");
                url_p.innerText = "URL: " + url;
            data.appendChild(p);
            data.appendChild(url_p);
        };
    });
    xhr.addEventListener("error", function()
    {
        let p = document.createElement("p");
            p.innerText = "Brak połączenia internetowego";
        let url_p = document.createElement("p");
            url_p.innerText = "URL: " + url;
        data.appendChild(p);
        data.appendChild(url_p);
    });
});

senddata.addEventListener("click", function()
{
    let xhr = new XMLHttpRequest();
    let name = imie.value;
    let surname = nazwisko.value;
    xhr.open("GET", "http://172.16.131.125/3ti/pelka_j/xml/dane.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("imie= " + name + "& nazwisko=" + surname + "");
});

receivedata.addEventListener("click", function()
{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "./dane.php", true);
    xhr.send();
    xhr.addEventListener("load", function()
    {
        let wynik = JSON.parse(xhr.response);
        console.log(wynik);
        wynik.map(function(el)
        {
            const p = document.createElement("p");
                  p.innerText = `imie: ${el.imie} | zarobki: ${el.zarobki} | data: ${el.data_urodzenia}`; 
            data.appendChild(p);
        })
    });

});