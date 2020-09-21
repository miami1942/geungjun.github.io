var calulator_result_map = new Map()
calulator_result_map.set("radio_reset", 365)
var my_error = true

var my_year = $('#table_y').text()
var my_month = add_zero($('#table_m').text())

function data_api(my_year) {
    //console.log("data_api is start")
    //debugger;
    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo'; /*URL*/
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + 'CV2DsPrJWffzsFZhEWP6HWS987c3MVh4LBAqj2ulKCniMxBQp%2Ftt%2FjCSahBquqtU2MYK5A9FgnFq0Xhd%2F8zA1w%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-'); /**/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('30'); /**/
    queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent(my_year); /**/
    //queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(my_month); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        //console.log("this.readyState", this.readyState)
        if (this.readyState == 4) { //이게 4가 뒤늦게되네?? 요청하고 받고 하는거라 바로는 안되네
            //alert('Status: ' + this.status + '   nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + '   nBody: ' + this.responseText);
            parsing_function(this)
        }
    };
    xhr.send();
}

function parsing_function(xml) {
    holiday_map.clear()
    var xmlDoc = xml.responseXML; //파싱
    try {
        var dateName = xmlDoc.getElementsByTagName("dateName"); //공휴일이 들어있는 배열값들
        var locdate = xmlDoc.getElementsByTagName("locdate");
    } catch {
        if (my_error == true) {
            alert("Cross-Origin Resource Sharing 정책으로 인한 오류 입니다. \n\n 크롬 바로가기 -> 속성 -> 대상 뒤에 \n --disable-web-security --user-data-dir=\"C:\\chrome\" \n를 적어서 우회해 주세요")
            my_error = false
        }
    }


    //console.log("dateName.length", locdate.length)
    for (i = 0; i < locdate.length; i++) {
        //console.log(dateName[i].firstChild.data)
        var day = remove_zero(locdate[i].firstChild.data.substring(6, 8))
        var month = remove_zero(locdate[i].firstChild.data.substring(4, 6))
        //맵에 넣기
        holiday_map.set(locdate[i].firstChild.data, dateName[i].firstChild.data)

        //console.log("month", month)
        //console.log("day", day)
        var tbody = $('#cal_text').parent().parent().parent().children()
        var start_num = 10

        for (j = start_num; j < tbody.children().length; j++) {
            if (tbody.children().eq(j).text() == day && month == $('#cal_text').parent().parent().parent().find("#table_m").text()) {
                tbody.children().eq(j).attr('id', 'holiday')
                tbody.children().eq(j).append("<div id='holiday_name'>" + dateName[i].firstChild.data + "</div>")
                //console.log("tbody.children().eq(j)", tbody.children().eq(j).children())
                start_num = j
                break;
            }
        }
    }
    //console.log(holiday_map)
    var radio_val = $(":radio[name='select']:checked").val()
    switch (radio_val) {
        case "radio_reset":
            console.log("radio_reset")
            $("#radio_result").text(calulator_result_map.get("radio_reset"))
            break;
        case "radio_all_holiday":
            console.log("radio_all_holiday")
            one_year_running()
            $("#radio_result").text(calulator_result_map.get("radio_all_holiday"))
            break;
        case "radio_only_holiday":
            console.log("radio_only_holiday")
            one_year_running()
            $("#radio_result").text(calulator_result_map.get("radio_only_holiday"))
            break;
        case "radio_except_sunday":
            console.log("radio_except_sunday")
            one_year_running()
            $("#radio_result").text(calulator_result_map.get("radio_except_sunday"))
            break;
        case "radio_only_sunday":
            console.log("radio_only_sunday")
            one_year_running()
            $("#radio_result").text(calulator_result_map.get("radio_only_sunday"))
            break;
    }

    function one_year_running() {
        radio_only_sunday = 0 //일요일 다시 새야되서 초기화
        var my_year = $('#table_y').text()
        var my_month = $('#table_m').text()
        var radio_only_holiday = locdate.length
        for (x = 1; x <= 12; x++) {
            today = new Date(my_year, x - 1)
            create_cal()
        }
        for (i = 0; i < locdate.length; i++) {
            holiday_map.set(locdate[i].firstChild.data, dateName[i].firstChild.data)
        }
        console.log(holiday_map)
        today = new Date(my_year, my_month - 1)
        create_cal()


        for (i = 0; i < locdate.length; i++) {
            //console.log(dateName[i].firstChild.data)
            var day = remove_zero(locdate[i].firstChild.data.substring(6, 8))
            var month = remove_zero(locdate[i].firstChild.data.substring(4, 6))
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
        var radio_except_sunday = holiday_map.size - radio_only_sunday
        //=radio_only_holiday-(radio_only_holiday-(holiday_map.size - radio_only_sunday))
        calulator_result_map.set("radio_all_holiday", holiday_map.size)
        calulator_result_map.set("radio_only_holiday", radio_only_holiday)
        calulator_result_map.set("radio_except_sunday", radio_except_sunday)
        calulator_result_map.set("radio_only_sunday", radio_only_sunday)
    }
}

$("#prev").on('click', function () {
    prev_cal()
    create_cal()
    $("input:radio[name='select']").filter("[value=radio_reset]").prop("checked", true)
    my_year = $('#table_y').text()
    //console.log("my_year", my_year)
    my_month = add_zero($('#table_m').text())
    //console.log("my_month", my_month)
    data_api(my_year, my_month)
    //console.log(today)
    $("#cal_sec_y").text(my_year)
})
$("#next").on('click', function () {
    next_cal()
    create_cal()
    $("input:radio[name='select']").filter("[value=radio_reset]").prop("checked", true)
    //console.log("tbody.children().eq(j).text()", $('#cal_text').parent().parent().parent().find("#table_m").text())
    my_year = $('#table_y').text()
    //console.log("my_year", my_year)
    my_month = add_zero($('#table_m').text())
    //console.log("my_month", my_month)
    data_api(my_year, my_month)
    //console.log(today)
    $("#cal_sec_y").text(my_year)
})
$(".change_api").on('mouseup', function () {
    data_api(my_year, my_month)
})
data_api(my_year, my_month)