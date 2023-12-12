


a=1;
b="b";
c=33;
d=123;

LOG(a);

LOG(b);

LOG(c, a);

LOGX(c, a);


function process(button)
{
    o = button;
    LOGX(o.id);
    LOGX(o.value);


    const xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "process?data=" + a);
    a += 1;
    xhr1.responseType = "json";
    xhr1.onload = () => {
	LOGX("temps received");
        LOGX(xhr1.readyState,xhr1.status);
	if (xhr1.readyState == 4 && xhr1.status == 200) {
	    const response = xhr1.response;
            LOGX(response.v);
        }}
    xhr1.send();

    o.value = (o.value =="OFF") ? "ON" : "OFF";

}
