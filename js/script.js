let dict = [
{quest: 'Назовите фамилию Путина?', answer: ['Ельцин', 'Батя', 'Рофлян', 'Путин'], rightanswer: 'Путин'},
{quest: 'Назовите имя Дианы Гурцкой?', answer: ['Андрей', 'Диана', 'Кобзон', 'Валет'], rightanswer: 'Диана'},
{quest: 'Назовите столицу Кыргызстана?', answer: ['Боржоми', 'Бухло', 'Бишкек', 'Антон'], rightanswer: 'Бишкек'},

]




// let a = input.value





let i = 0
let a = dict[i].rightanswer

for (i = 0; a == dict[i].rightanswer; i++){


    document.getElementById('question').value= dict[i].quest
    document.getElementById('avariant').value= dict[i].answer[0]
    document.getElementById('bvariant').value= dict[i].answer[1]
    document.getElementById('cvariant').value= dict[i].answer[2]
    document.getElementById('dvariant').value= dict[i].answer[3]
    // let rightanswer = dict[i].rightanswer
    
    }

const variantButton = (a) => {

    let v = a.target.value
    if (v == dict[0].rightanswer) {
        document.getElementById('question').value= dict[0].quest
        
        alert(true)
    
    } else alert(false)
    
}

// const getElement = () =>{
//     let n = arr.map(el=>{
//         return el
//     })
//     alert(n)
// }
