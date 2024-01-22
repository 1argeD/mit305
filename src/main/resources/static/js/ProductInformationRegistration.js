/*------------품목의 계약 정보 모달창 관련한 js 코드------------*/
function select_pname(get_name) {

    const pname_tr = get_name.closest("tr");

    const name_cell = pname_tr.children[1]; // 버튼 눌린 행의 품목 코드

}



function OpenProductContract() {

    $(".Product_Contract_Modal").css('display', 'block');
}

function CloseProductContract() {

    $(".Product_Contract_Modal").css('display', 'none');
}

/*------------품목 등록 관련한 js 코드------------*/
function info_show(get) {

    if (get == 'in') {

        document.getElementById('product_info').style.display = 'inline-block';
    }

}

function info_modify_and_save(tag) {

    const tr = tag.closest("tr");

    const cell_0 = tr.children[0];
    const cell_1 = tr.children[1];
    const cell_2 = tr.children[2];
    const cell_3 = tr.children[3];
    const cell_4 = tr.children[4];
    const cell_5 = tr.children[5];
    const cell_6 = tr.children[6];
    const cell_7 = tr.children[7];
    const cell_8 = tr.children[8];
    const cell_9 = tr.children[9];

    if (cell_0.contentEditable == "true") {

        cell_0.contentEditable = "false";
        cell_1.contentEditable = "false";
        cell_2.contentEditable = "false";
        cell_3.contentEditable = "false";
        cell_4.contentEditable = "false";
        cell_5.contentEditable = "false";
        cell_6.contentEditable = "false";
        cell_7.contentEditable = "false";
        cell_8.contentEditable = "false";
        cell_9.contentEditable = "false";

        tag.innerText = "수정";

    } else {

        cell_0.contentEditable = "true";
        cell_1.contentEditable = "true";
        cell_2.contentEditable = "true";
        cell_3.contentEditable = "true";
        cell_4.contentEditable = "true";
        cell_5.contentEditable = "true";
        cell_6.contentEditable = "true";
        cell_7.contentEditable = "true";
        cell_8.contentEditable = "true";
        cell_9.contentEditable = "true";

        tag.innerText = "수정 완료";

        cell_0.focus();
    }
}

function info_registration_and_delete(tag) {

    const tr = tag.closest("tr");
    tr.remove();
}

function info_delete(tag) {

    const tr = tag.closest("tr");
    tr.remove();
}

// 전체 품목 정보 검색
function select_info() {

    $.ajax({

        url : '/search/product',
        method : 'GET',
        dataType : 'json',

        success : function(data) {
            console.log(data);
            resultTable(data);
        },

        erorr : function(error) {
            console.error(error);
        }

    });
}

// 검색한 결과 테이블로 출력
function resultTable(data_info) {

    $.each(data_info, function(index, info) {

        $('#product_info tbody')
            .append(
                '<tr>' +
                    '<td>' + '<input type="text" style = "width:69.67px; height:"29px"; font-size:15px;" class = now_product_name value =' + info.product_name + '>' + '</td>' + // 품목명
                    '<td>' + '<input type="text" style = "width:69.67px; height:"29px"; font-size:15px;" class = now_product_name value =' + info.product_code + '>' + '</td>' + // 품목 코드
                    '<td>' + '<input type="text" style = "width:69.67px; height:"29px"; font-size:15px;" class = now_product_name value =' + info.product_abbreviation + '>' + '</td>' + // 약칭
                    '<td>' + '<input type="text" style = "width:69.67px; height:"29px"; font-size:15px;" class = now_product_name value =' + info.texture + '>' + '</td>' + // 재질
                    '<td>' + '<input type="text" style = "width:69.67px; height:"29px"; font-size:15px;" class = now_product_name value =' + info.width + '>' + '</td>' + // 가로
                    '<td>' + '<input type="text" style = "width:69.67px; height:"29px"; font-size:15px;" class = now_product_name value =' + info.length + '>' + '</td>' + // 세로
                    '<td>' + '<input type="text" style = "width:69.67px; height:"29px"; font-size:15px;" class = now_product_name value =' + info.height + '>' + '</td>' + // 높이
                    '<td>' + '<input type="text" style = "width:69.67px; height:"29px"; font-size:15px;" class = now_product_name value =' + info.weight + '>' + '</td>' + // 중량
                    '<td>' + info.part.assy.unit.unit + '</td>' + // 대분류
                    '<td>' + info.part.assy.assy + '</td>' + // 중분류
                    '<td>' + info.part.part + '</td>' + // 소분류
                    '<td>' + info.product_imageURL + '</td>' + // 사진 주소
                    '<td>' +
                        '계약 안됨 <button>계약 상세</button>' +
                    '</td>' +
                    '<td>' +
                         '<div class="actions">' +
                             '<button class="action-button action-button-edit" onclick="info_modify_and_save(this)">수정</button>' +
                             '<button class="action-button action-button-delete" onclick="info_delete(this)">삭제</button>' +
                         '</div>' +
                    '</td>' +
                '</tr>'
            )
    });

}

function info_modify_and_save(tag) {

    const tr = tag.closest("tr");

    const cell_0 = tr.children[0];
    const cell_1 = tr.children[1];
    const cell_2 = tr.children[2];
    const cell_3 = tr.children[3];
    const cell_4 = tr.children[4];
    const cell_5 = tr.children[5];
    const cell_6 = tr.children[6];
    const cell_7 = tr.children[7];


    if (cell_0.contentEditable == "true") {

        cell_0.contentEditable = "false";
        cell_1.contentEditable = "false";
        cell_2.contentEditable = "false";
        cell_3.contentEditable = "false";
        cell_4.contentEditable = "false";
        cell_5.contentEditable = "false";
        cell_6.contentEditable = "false";
        cell_7.contentEditable = "false";

        tag.innerText = "수정";

        //첫번째 셀의 contenteditable 속성이 false라면(나머지 셀들의 속성 동일)
    } else {

        //각 셀들의 contenteditable 속성 true로 모두 변경하여 수정 가능하게 함

        cell_0.contentEditable = "true";
        cell_1.contentEditable = "true";
        cell_2.contentEditable = "true";
        cell_3.contentEditable = "true";
        cell_4.contentEditable = "true";
        cell_5.contentEditable = "true";
        cell_6.contentEditable = "true";
        cell_7.contentEditable = "true";

        tag.innerText = "수정 완료";

        cell_0.focus();
    }
}

function info_registration_and_delete(tag) {

    var cnt = $('.cnt');

    cnt.change(function () {

        for (var i = 0; i < cnt.length; i++) {

            console.log(i + '번째: ' + cnt.eq(i).val());
        }

    });


    alert("품목 등록 완료");

    const tr = tag.closest("tr");
    tr.remove();
}

function info_delete(tag) {

    const tr = tag.closest("tr");
    tr.remove();
}

function info_addRow() {

    const table = document.getElementById('product');
    const new_row = table.insertRow();

    const cell_length = table.rows[0].cells.length;

    for (let i = 0; i < cell_length; i++) {
        const new_cell = new_row.insertCell(i);
        let temp_html = '';

        temp_html =

            '<input type="text" class = "cnt" style="width:50px; height:25px; font-size:15px; text-align:center;">';

        if (i == 0) {

            temp_html =
                '<input type="text" class = "cnt" style="width:73px; height:25px; font-size:15px; text-align:center;">';
        }

        if (i == 3) {

            temp_html =
                '<input type="text" class = "cnt" style="width:73px; height:25px; font-size:15px; text-align:center;">';
        }

        if (i == 5) {

            temp_html =
                '<input type="text" class = "cnt" style="width:73px; height:25px; font-size:15px; text-align:center;">';
        }

        if (i == 6) {

            temp_html =
                '<input type="text" class = "cnt" style="width:73px; height:25px; font-size:15px; text-align:center;">';
        }

        if (i == 8) {

            temp_html =
                '<td>' +
                '<select name="state">' +
                '<option value="first">대분류 1</option>' +
                '<option value="second">대분류 2</option>' +
                '</select>' +
                '</td>';
        }

        if (i == 9) {

            temp_html =
                '<td>' +
                '<select name="state">' +
                '<option value="first">중분류 1</option>' +
                '<option value="second">중분류 2</option>' +
                '</select>' +
                '</td>';
        }

        if (i == 10) {

            temp_html =
                '<td>' +
                '<select name="state">' +
                '<option value="first">소분류 1</option>' +
                '<option value="second">소분류 2</option>' +
                '</select>' +
                '</td>';
        }

        if (i == 11) {

            temp_html = '<td>' +
                '<input type="file" accept="image/png, image/jpg">' +
                '</td>';
        }

        if (i == 12) {

            temp_html =
                '<td>' +
                '<div class="actions">' +
                '<button class="action-button action-button-delete" onclick="info_registration_and_delete(this)">등록</button>' +
                '</div>' +
                '</td>';
        }

        new_cell.insertAdjacentHTML('afterbegin', temp_html);

    }
}
