
let getByClass = document.getElementsByClassName('btn')
let getByClass2 = document.getElementsByClassName('btnquest')
var introaudio = document.getElementById('disorder')

const intro = () => {
    var elem = document.querySelector(".introimg")
    elem.remove()
introaudio.play()
for (let inp in getByClass){
    getByClass[inp].style.visibility= 'visible'
}

}



let dict = [
    {quest: 'Назовите фамилию Путина?', answer: ['Ельцин', 'Батя', 'Рофлян', 'Путин'], rightanswer: 'Путин'},
    {quest: 'Назовите имя Дианы Гурцкой?', answer: ['Андрей', 'Диана', 'Кобзон', 'Валет'], rightanswer: 'Диана'},
    {quest: 'Назовите столицу Кыргызстана?', answer: ['Боржоми', 'Бухло', 'Бишкек', 'Антон'], rightanswer: 'Бишкек'},
    {quest: 'В каком году записан альбом Pink Floyd - Animals?', answer: ['1977', '1975', '1979', '2001'], rightanswer: '1977'},
    {quest: 'Сколько исполнителей в группе ABBA?', answer: ['8', '6', '4', '3'], rightanswer: '4'}

    ]

let i = 0

document.getElementById('question').value= dict[i].quest
document.getElementById('avariant').value= dict[i].answer[0]
document.getElementById('bvariant').value= dict[i].answer[1]
document.getElementById('cvariant').value= dict[i].answer[2]
document.getElementById('dvariant').value= dict[i].answer[3]



const rightanswercolor = () => {


    
}


const variantButton = (v) => {
    
    let b = EventTarget
    b.style.backgroundcolor="yellow"
    let a = v.target.value
    if (a == dict[i].rightanswer) {i=i+1}
//      else
// if (a == dict[i].answer[0]) {
//     setTimeout(() => {
//         document.getElementById("avariant").style.backgroundColor ="white"
//     }, 2000);
//     document.getElementById("avariant").style.backgroundColor ="yellow"
// } else
// if (a == dict[i].answer[1]) {document.getElementById("bvariant").style.backgroundColor ="yellow"} else
// if (a == dict[i].answer[2]) {document.getElementById("cvariant").style.backgroundColor ="yellow"} else
// if (a == dict[i].answer[3]) {document.getElementById("dvariant").style.backgroundColor ="yellow"} 
    

    document.getElementById('question').value= dict[i].quest
    document.getElementById('avariant').value= dict[i].answer[0]
    document.getElementById('bvariant').value= dict[i].answer[1]
    document.getElementById('cvariant').value= dict[i].answer[2]
    document.getElementById('dvariant').value= dict[i].answer[3]
    } 
