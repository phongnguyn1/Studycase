
class DuoiHinhBatChu {
    constructor(answer1, answer2, answer3, answer4, question, checkAnswer, image) {
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.question = question;
        this.checkAnswer = checkAnswer;
        this.image = image;
    }

    setProperties(answer1, answer2, answer3, answer4, question, checkAnswer, image) {
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.question = question;
        this.checkAnswer = checkAnswer;
        this.image = image;
    }
}

const levels = [
    new DuoiHinhBatChu('Tiến Bịp', 'Khá Bảnh', 'Khánh sky', 'Phú Lê', 'Đây là ai ?', 'answer1', 'https://i1.sndcdn.com/artworks-cW7edxmicBqOgEM4-aVI3bg-t500x500.jpg'),
    new DuoiHinhBatChu('Có làm mới có ăn', 'Cần cù bù thông minh ', 'Ăn đb', 'Xu cà na ', 'Đây là câu nói trending nào ?', 'answer1', 'https://cdn.vietnambiz.vn/171464876016439296/2020/10/28/huanhoahong-1ugww-1603860149561719888008.jpg'),
    new DuoiHinhBatChu('phú lê', 'huấn rose', 'tien bip', 'dương minh tuyền', 'đây là giang hồ mạng nào ? ', 'answer1', 'https://giadinh.mediacdn.vn/zoom/740_463/2020/8/13/phu-le-159730801624084001780.jpg'),
    new DuoiHinhBatChu('Bella', 'Thông soái ca', 'Linh mikenco', 'Ngân Baby', 'đây là hiện tượng mạng nào ? ', 'answer2', 'https://newsmd2fr.keeng.vn/tiin/archive/imageslead/2023/06/14/90_c373d5ac0433257417f21a0a5e07fa11.jpg'),
    new DuoiHinhBatChu('Balan', 'Indonesia', 'Hong Kong', 'Ecuador', 'đây là nước nào  ? ', 'answer2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/800px-Flag_of_Indonesia.svg.png'),
    new DuoiHinhBatChu('Cristiano Ronaldo', 'Lionel Messi', 'Diego Maradonna', 'Paul Pogba', 'Cầu thủ nào xuất sắc nhất mọi thời đại ? ', 'answer2', 'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A842PA3861PT28D1020377430W8333H10000/views/1,width=800,height=800,appearanceId=842,backgroundColor=F2F2F2/football-sport-goat-animal-zoo-ball-game-enclosure-sticker.jpg'),
    new DuoiHinhBatChu('Miu Lê', 'Hòa Minzy', 'Chipu', ' Khánh Linh', 'Bài hát Vì mẹ anh bắt chia tay của ai  ? ', 'answer1', 'https://i.ytimg.com/vi/S7ElVoYZN0g/maxresdefault.jpg'),
    new DuoiHinhBatChu('Nicki Minaj', 'Mia Khalifa', 'Jennifer Lawrence', 'Eva Elfie', 'Đây là ai ? ', 'answer4', 'https://motgame.vn/stores/news_dataimages/motgamevn/082023/29/02/tieu-su-eva-elfie-thien-than-cua-nganh-phim-nguoi-lon-04-.1118.jpg'),
    new DuoiHinhBatChu('Nghĩ kĩ đi ', 'Không biết ', 'Chỗ này nhiều máu này', 'Thằng đầu đất ', 'Đây là câu nói trending nào  ? ', 'answer3', 'https://simg1zen.myclip.vn/image1/2021/10/20/12/b1eaf78a/b1eaf78a-507b-4ce2-a2a6-e66eab0c334c_720_405.jpg'),
    new DuoiHinhBatChu('Còn cái nịt ', 'Ngu si ', 'Đánh chỉ xịt', 'Non nớt ', 'Đây là câu nói trending nào  ? ', 'answer1', 'https://i1.sndcdn.com/artworks-MyB3Iz2Q7suAafj8-iiEXyQ-t500x500.jpg'),
    new DuoiHinhBatChu(' Xu cà na ', 'Hê sờ lô hê sờ li ', 'Đánh chỉ xịt', 'Ủa,gì dợ?', 'Đây là câu nói trending nào  ? ', 'answer4', 'https://i.ytimg.com/vi/rqw8PPFT2v0/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AdYBgALgA4oCDAgAEAEYZSBdKFAwDw==&rs=AOn4CLDOepreRXSWbSEXp64QUSYiorEiiQ'),
    new DuoiHinhBatChu('Khoái khoái ', 'Hê sờ lô hê sờ li ', 'Hihi', 'Ủa,gì dợ?', 'Đây là câu nói trending nào  ? ', 'answer4', 'data:image/jpeg;base64,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'),
];

let currentLevel = 0;
let score  = 0;


function setupLevel() {
    const currentQuestion = levels[currentLevel];
    document.getElementById('question').innerHTML = currentQuestion.question;
    document.getElementById('answer1').innerHTML = currentQuestion.answer1;
    document.getElementById('answer2').innerHTML = currentQuestion.answer2;
    document.getElementById('answer3').innerHTML = currentQuestion.answer3;
    document.getElementById('answer4').innerHTML = currentQuestion.answer4;
    document.getElementById("image").src = currentQuestion.image
}
function answer(clickedId) {
    const currentQuestion = levels[currentLevel];
    if (clickedId === currentQuestion.checkAnswer) {
        document.getElementById('correctSound').play();
        alert('Đúng vại');
        score ++;
        document.getElementById('score').innerHTML = 'Score: ' + score;
        if (score > highScore) {
            highScore = score;
            document.getElementById('highScore').innerHTML = 'High Score: ' + highScore;
            localStorage.setItem('highScore', highScore);


        }

        if (currentLevel < levels.length - 1) {
            currentLevel++;

            setupLevel();
        } else {
            const playerName = document.getElementById('playerName').value || 'Player';
            alert('Chúc mừng , ' + playerName + '! Bạn đã thắng game điểm của bạn là: ' + score);
            resetGame();
        }
    } else {
        alert('Sai rồi , non quá');
        document.getElementById('incorrectSound').play();
    }
}
setupLevel();
function resetGame() {
    currentLevel = 0;
    score = 0;
    document.getElementById('score').innerHTML = 'Score: ' + score;
    setupLevel();
}

