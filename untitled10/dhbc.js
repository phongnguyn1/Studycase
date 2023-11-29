let dhbc1 = new DuoiHinhBatChu ('kha banh ' , 'thay huan ','tien bip','lo','day la ai ','answer3')
let man=0
function start() {
    man++;
    if (man==1){
        document.getElementById('question').innerHTML = dhbc1.question;
        document.getElementById('answer1').innerHTML = dhbc1.answer1;
        document.getElementById('answer2').innerHTML = dhbc1.answer2;
        document.getElementById('answer3').innerHTML = dhbc1.answer3;
        document.getElementById('answer4').innerHTML = dhbc1.answer4;
    }
}
function answer ( ){

}