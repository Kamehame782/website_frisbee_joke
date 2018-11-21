window.onload = function() {
// Laittaa divit(sivuosiot) pois nakyvista
    const nav = document.getElementsByClassName('nav_link');
    
    Array.from(nav).forEach(item => {
        // item.style.display="none";
        // console.log(item);
        var item_div=document.getElementById(item.textContent.toLowerCase());
        // console.log(item_div);
        item_div.style.display="none";
        // item_div.display="none";

// eventti kuuntelemaan navigointinappien klikkausta
        item.addEventListener('click', (e) => {

            Array.from(nav).forEach(ab => {
                var item_div2=document.getElementById(ab.textContent.toLowerCase());
                // console.log(item_div2);
                item_div2.style.display="none";
            })
            item_div.style.display="block";
            // subscribe näkyy aina
            document.getElementById('subscribe').style.display="block";
        });
    });

// disc-sivun bagille clickaus eventti
    document.getElementById('home').style.display="block";
    // subscribe näkyy aina, myös alusta
    document.getElementById('subscribe').style.display="block";
    // piiloitetaan taskujen sisalto
            document.getElementById("bag_left2").style.display='none';
            document.getElementById("bag_right2").style.display='none';
            document.getElementById("bag_top2").style.display='none';
            document.getElementById("bag_bot2").style.display='none';

    const bag_hover=document.getElementsByClassName("hovering2");
    // console.log(bag_hover);

    Array.from(bag_hover).forEach(e => {
        // console.log(e);
        e.addEventListener('click', (r) =>{
            var tasku_vasen = document.getElementById("bag_left2");
            var tasku_oikea = document.getElementById("bag_right2");
            var tasku_ala = document.getElementById("bag_bot2");
            var tasku_yla = document.getElementById("bag_top2");
            if(e.id=="clk_left"){
                if (tasku_vasen.style.display==="" || tasku_vasen.style.display==="inline-block"){
                    tasku_vasen.style.display='none'
                } else if(tasku_vasen.style.display==="none"){
                    tasku_vasen.style.display='inline-block'
                }
            } 
            else if(e.id=="clk_right"){
                if (tasku_oikea.style.display==="" || tasku_oikea.style.display==="inline-block"){
                    tasku_oikea.style.display='none'
                } else if(tasku_oikea.style.display==="none"){
                    tasku_oikea.style.display='inline-block'
                }
                
            }
            else if(e.id=="clk_bot"){
                if (tasku_ala.style.display==="" || tasku_ala.style.display==="inline-block"){
                    tasku_ala.style.display='none'
                } else if(tasku_ala.style.display==="none"){
                    tasku_ala.style.display='inline-block'
                }
                
            }
            else if(e.id=="clk_top"){
                if (tasku_yla.style.display==="" || tasku_yla.style.display==="inline-block"){
                    tasku_yla.style.display='none'
                } else if(tasku_yla.style.display==="none"){
                    tasku_yla.style.display='inline-block'
                }
                
            }
        } )
    })

}

function subaa (){
    // POST--------------------
    var xhr = new XMLHttpRequest();
    var url = "https://discking-77bcd.firebaseio.com/maililista.json";
    xhr.open("POST", url, true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         var json = JSON.parse(xhr.responseText);
    //         console.log(json.email + ", " + json.password);
    //     }
    // };
    var data = JSON.stringify({email: document.getElementById("subiOsoite").value});
    xhr.send(data);
    // console.log(document.getElementById("subiOsoite").value," osoite subattu!");

    // GET-------------------------
    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() { 
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }

            anHttpRequest.open( "GET", aUrl, true );            
            anHttpRequest.send( null );
        }
    }

    var client = new HttpClient();
    client.get('https://discking-77bcd.firebaseio.com/maililista.json', function(response) {
        // console.log(response);
        // Muutetaan saatu data (response) ensin JSON-objektiksi ja sitten forilla taulukoksi
        var mailiObjekti=JSON.parse(response);
        var mailiArray=[];
        // console.log(mailiObjekti);
        for(let key in mailiObjekti){
            mailiObjekti[key].id=key;
            mailiArray.push(mailiObjekti[key]);
        }
        // Viimeisin lisätty maili
        if (document.getElementById("subiOsoite").value===mailiArray[mailiArray.length-1].email){
            console.log(document.getElementById("subiOsoite").value +" osoite subattu!");
            document.getElementById("subiOsoite").value="subbed! add another?";
        }
        else{
            console.log("Email not added");
        }
        // console.log(mailiArray[mailiArray.length-1].email);
    });
    
}

// Galleria
function openImg(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}