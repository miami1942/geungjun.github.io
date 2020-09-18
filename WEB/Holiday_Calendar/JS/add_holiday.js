function add_zero(num) {
    if (0 < num && num < 10) {
        num = "0" + num
    }
    return num
}

function remove_zero(num) {
    if (num < 10) {
        num = num.substring(1, 2)
    }
    return num
}

function data_api(my_year, my_month) {
    console.log("data_api is start")
    //debugger;
    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo'; /*URL*/
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + 'CV2DsPrJWffzsFZhEWP6HWS987c3MVh4LBAqj2ulKCniMxBQp%2Ftt%2FjCSahBquqtU2MYK5A9FgnFq0Xhd%2F8zA1w%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-'); /**/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('30'); /**/
    queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent(my_year); /**/
    queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(my_month); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        console.log("this.readyState", this.readyState)
        if (this.readyState == 4) { //이게 4가 뒤늦게되네?? 요청하고 받고 하는거라 바로는 안되네
            //alert('Status: ' + this.status + '   nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + '   nBody: ' + this.responseText);
            parsing_function(this)
            console.log("parsing_function")
        }
    };
    xhr.send();
}

function parsing_function(xml) {
    //debugger;
    var xmlDoc = xml.responseXML; //파싱

    var dateName = xmlDoc.getElementsByTagName("dateName"); //공휴일이 들어있는 배열값들
    var locdate = xmlDoc.getElementsByTagName("locdate");

    //console.log("dateName.length", locdate.length)
    for (i = 0; i < locdate.length; i++) {
        //console.log(dateName[i].firstChild.data)
        var day = remove_zero(locdate[i].firstChild.data.substring(6, 8))
        var month = remove_zero(locdate[i].firstChild.data.substring(4, 6))
        //console.log("month", month)
        //console.log("day", day)
        var tbody = $('#cal_text').parent().parent().parent().children()
        var start_num = 10

        for (j = start_num; j < tbody.children().length; j++) {
            if (tbody.children().eq(j).text() == day && month == $('#cal_text').parent().parent().parent().find("#table_m").text()) {
                tbody.children().eq(j).attr('id', 'holiday')
                tbody.children().eq(j).prepend("<div id='holiday_name'>" + dateName[i].firstChild.data + "</div>")
                //console.log("tbody.children().eq(j)", tbody.children().eq(j).children())
                start_num = j
                break;
            }
        }
    }
}

var my_year = $('#table_y').text()
var my_month = add_zero($('#table_m').text())

$("#prev").on('click', function () {
    prev_cal()
    create_cal()
    var my_year = $('#table_y').text()
    //console.log("my_year", my_year)
    var my_month = add_zero($('#table_m').text())
    //console.log("my_month", my_month)
    data_api(my_year, my_month)
    //console.log(today)
})
$("#next").on('click', function () {
    next_cal()
    create_cal()
    //console.log("tbody.children().eq(j).text()", $('#cal_text').parent().parent().parent().find("#table_m").text())
    var my_year = $('#table_y').text()
    //console.log("my_year", my_year)
    var my_month = add_zero($('#table_m').text())
    //console.log("my_month", my_month)
    data_api(my_year, my_month)
    //console.log(today)
})
$(".change_api").on('mouseup', function () {
    var my_year = $('#table_y').text()
    var my_month = add_zero($('#table_m').text())
    //console.log("my_month", my_month)
    sunday = 0
    holiday_with_sun = 0
    holiday_except_sun = 0
    for (x = 1; x <= 12; x++) { //요청을 받아야하는데 금방안되서 이건 안됨
        //console.log($('#holiday').parent().parent().children().children())
        today = new Date(my_year, x - 1)
        create_cal()
        //debugger;

        data_api(my_year, add_zero(x))
        console.log($('#holiday').parent().parent().children().find("#holiday").length)
        if ($('#cal_text').parent().parent().parent().find("#holiday")) {
            holiday_with_sun++
        }
        next_cal()
    }

    today = new Date(my_year, my_month - 1)
    create_cal()
    data_api(my_year, my_month)
    //console.log(today)
})
//console.log(today)
data_api(my_year, my_month)