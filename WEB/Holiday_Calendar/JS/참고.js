function loadDoc() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    req.open("GET", "xml_sample.xml", true);
    req.send();
}

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;

    var gname = xmlDoc.getElementsByTagName("name")[0].firstChild.data;
    document.getElementById("gname").innerHTML = gname;

    var members = "";
    var member = xmlDoc.getElementsByTagName("member");
    for (i = 0; i < member.length; i++) {
        if (i != 0) {
            members = members + ", ";
        }
        members = members + member[i].firstChild.data;
    }
    document.getElementById("members").innerHTML = members;

    var albums = "";
    var album = xmlDoc.getElementsByTagName("album");
    for (i = 0; i < album.length; i++) {
        albums = albums + "<li>" + album[i].getAttribute('order') + ": " + album[i].firstChild.data + "</li>\n";
    }
    document.getElementById("albums").innerHTML = albums;
}