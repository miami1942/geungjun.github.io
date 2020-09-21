//console.log("Date() -> ", Date())
var holiday_map = new Map()
var today = new Date()
var radio_only_sunday = 0;

function add_zero(num) {
    if (0 < num && num < 10) {
        num = "0" + num
    } else {
        num = num +""
    }
    return num
}

function remove_zero(num) {
    if (num < 10) {
        num = num.substring(1, 2)
    }
    return num
}

function prev_cal() {
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
}

function next_cal() {
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
}

function create_cal() {
    console.log("create cal start")
    //객체변수 = new Date(년, 월, 일, 시, 분, 초, 밀리초) 년 월(0~11)은 필수값
    var month_fir_day = new Date(today.getFullYear(), today.getMonth(), 1)
    var month_last_day = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    var temp_today = today.getFullYear() + add_zero(today.getMonth()+1)
    //console.log(month_last_day.getDay())

    var calendar_table = document.getElementById("calendar_table")
    var table_y = document.getElementById("table_y")
    var table_m = document.getElementById("table_m")

    while (calendar_table.rows.length > 2) {//달력 한번 지워주기(새로만들기위해)
        //console.log("while")
        calendar_table.deleteRow(calendar_table.rows.length - 1)
    }

    table_y.innerHTML = today.getFullYear()
    table_m.innerHTML = today.getMonth() + 1

    //var row = null
    var cell_count = 0
    var row = calendar_table.insertRow()
    row.id = "created_row"
    //console.log("functioncreate_cal -> row", row)
    var table_cell = null

    //console.log("month_fir_day.getDay() -> ", month_fir_day.getDay())
    for (i = 1; i <= month_fir_day.getDay(); i++) { //시작 위치 찾기
        row.insertCell();
        cell_count = cell_count + 1
    }
    cell_count = cell_count + 1
    for (i = 1; i <= month_last_day.getDate(); i++) { //시작위치로부터 시작
        if (cell_count > 7) { //줄바꿈
            cell_count = 1
            row = calendar_table.insertRow()
            row.id = "created_row"
        }
        var table_cell = row.insertCell()

        if (cell_count == 1) {
            table_cell.parentNode.innerHTML = "<td id='holiday'>" + "<div id='cal_text' onclick='show_left(event)'>" + i
            holiday_map.set(temp_today + add_zero(i), "sunday")
            radio_only_sunday++
        } else {
            table_cell.innerHTML = "<div id='cal_text' onclick='show_left(event)'>" + i
        }
        cell_count = cell_count + 1
    }
}

function reset_left() {
    var left_day = document.getElementById("left_day")
    var left_date = document.getElementById("left_date")

    var day = ""
    //console.log("today.getDay()", today.getDay())
    switch (today.getDay()) {
        case 0:
            day = "일"
            break;
        case 1:
            day = "월"
            break;
        case 2:
            day = "화"
            break;
        case 3:
            day = "수"
            break;
        case 4:
            day = "목"
            break;
        case 5:
            day = "금"
            break;
        case 6:
            day = "토"
            break;
    }
    left_day.innerHTML = day + "요일"
    left_date.innerHTML = today.getDate()
}

function show_left(event) {
    //console.log("show_left event -> ", event.target.innerText)
    var left_day = document.getElementById("left_day")
    var left_date = document.getElementById("left_date")

    var day = ""
    today = new Date(today.getFullYear(), today.getMonth(), event.target.innerText)
    //console.log("today.getDay()", today.getDay())
    switch (today.getDay()) {
        case 0:
            day = "일"
            break;
        case 1:
            day = "월"
            break;
        case 2:
            day = "화"
            break;
        case 3:
            day = "수"
            break;
        case 4:
            day = "목"
            break;
        case 5:
            day = "금"
            break;
        case 6:
            day = "토"
            break;
    }
    left_day.innerHTML = day + "요일"
    left_date.innerHTML = event.target.innerText

}

