console.log("Date() -> ", Date())
var today = new Date()

function prev_cal() {
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
    create_cal()
}

function next_cal() {
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
    create_cal()
}

function create_cal() {
    //객체변수 = new Date(년, 월, 일, 시, 분, 초, 밀리초) 년 월(0~11)은 필수값
    var month_fir_day = new Date(today.getFullYear(), today.getMonth(), 1)
    var month_last_day = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    //console.log(month_last_day.getDay())

    var calendar_table = document.getElementById("calendar_table")
    var table_y_m = document.getElementById("table_y_m")

    while (calendar_table.rows.length > 2) {
        console.log("while")
        calendar_table.deleteRow(calendar_table.rows.length - 1)
    }

    table_y_m.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월"

    //var row = null
    var cell_count = 0
    var row = calendar_table.insertRow()
    //console.log("functioncreate_cal -> row", row)
    var table_cell = null

    console.log("month_fir_day.getDay() -> ", month_fir_day.getDay())
    for (i = 1; i <= month_fir_day.getDay(); i++) { //시작 위치 찾기
        row.insertCell();
        cell_count = cell_count + 1
    }
    cell_count = cell_count + 1
    for (i = 1; i <= month_last_day.getDate(); i++) { //시작위치로부터 시작
        if (cell_count > 7) { //줄바꿈
            cell_count = 1
            row = calendar_table.insertRow()
        }
        var table_cell = row.insertCell()

        if (cell_count == 1) {
            table_cell.parentNode.innerHTML = "<td id='holiday'>" + "<div id='text' onclick='show_left(event)'>" + i
        } else {
            table_cell.innerHTML = "<div id='text' onclick='show_left(event)'>" + i
        }
        cell_count = cell_count + 1
    }
}

function reset_left() {
    var left_day = document.getElementById("left_day")
    var left_date = document.getElementById("left_date")

    var day = ""
    console.log("today.getDay()", today.getDay())
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
    console.log("show_left event -> ", event.target.innerText)
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