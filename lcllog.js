
EKOTable = {};

/*

100 : a=23;
101 : EKOX(a);

will print :

yourfile.js:101 : a=23

*/

function EKOX(txt) {
    var thisline = new Error().lineNumber
    const error = new Error();
    var stack = error.stack.split('\n')
    a = stack[1].split("@")
    b = a[1].split(":")
    nl = parseInt(b.slice(-2, -1));
    url = b.slice(0, -2).join(":")
    file = url;
    if (! EKOTable.hasOwnProperty(file)) {
        const req = new XMLHttpRequest();
        req.open("GET", url, false); // <-- completely sync and deprecated
        req.send();
        if(req.readyState === 4 && req.status === 200) {
            //console.log("response=" + req.response);
            t  = req.response;
            l = t.split("\n");
            EKOTable[file] = l;
        } else {
            console.log("unable to retreive " + file);
        }
    } else {
        //console.log("already there");
    }
    l = EKOTable[file];
    vv = l[nl-1];
    re = new RegExp(" *EKOX\\(([^\\)]+)\\) *;");
    var result = re.exec(vv);
    vvn = result[1];
    console.log(file + ":" + nl + ":" + vvn + "=" + txt);
}

