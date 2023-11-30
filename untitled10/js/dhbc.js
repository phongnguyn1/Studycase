
let dhbc1 = new DuoiHinhBatChu('Day la ai ?', 'thay huan', 'tien bip', 'khánh sky', 'kha banh', 'answer3', 'https://i1.sndcdn.com/artworks-cW7edxmicBqOgEM4-aVI3bg-t500x500.jpg');
let dhbc2 = new DuoiHinhBatChu('Day la ai ?', 'thay huan', 'tien bip', 'hải bánh', 'kha banh ', 'answer4', 'https://media-cdn-v2.laodong.vn/Storage/newsportal/2019/4/2/666385/11.jpg');
let dhbc3 = new DuoiHinhBatChu('Day la ai ?', 'huấn rose', 'tien bip', 'dương tuyền', 'phú lê ', 'answer4', 'https://giadinh.mediacdn.vn/zoom/740_463/2020/8/13/phu-le-159730801624084001780.jpg');

let round = 0;

function start() {
    round++;
    if (round === 1) {
        document.getElementById('question').innerHTML = dhbc1.question;
        document.getElementById('answer1').innerHTML = dhbc1.answer1;
        document.getElementById('answer2').innerHTML = dhbc1.answer2;
        document.getElementById('answer3').innerHTML = dhbc1.answer3;
        document.getElementById('answer4').innerHTML = dhbc1.answer4;
    } else if (round === 2) {
        document.getElementById('question').innerHTML = dhbc2.question;
        document.getElementById('answer1').innerHTML = dhbc2.answer1;
        document.getElementById('answer2').innerHTML = dhbc2.answer2;
        document.getElementById('answer3').innerHTML = dhbc2.answer3;
        document.getElementById('answer4').innerHTML = dhbc2.answer4;
        } else if (round === 3) {
        document.getElementById('question').innerHTML = dhbc3.question;
        document.getElementById('answer1').innerHTML = dhbc3.answer1;
        document.getElementById('answer2').innerHTML = dhbc3.answer2;
        document.getElementById('answer3').innerHTML = dhbc3.answer3;
        document.getElementById('answer4').innerHTML = dhbc3.answer4;
    }
}

function answer(clickedId) {
    if (round === 1) {
        if (clickedId === dhbc1.correctAnswer) {
            alert("Đúng rồi đó!");
        } else {
            round = 0;
            document.getElementById('start').innerHTML = 'Chơi lại';
        }
    }

}
