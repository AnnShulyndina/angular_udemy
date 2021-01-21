interface UserInterface {
    name: string
    age: number
    logInfo: () => void // - функция которая возвращает пустое значение
    id?: any
}

interface MyData {
    nativeTown: string
    parentsName: string
    pets?: any
}

const user: UserInterface = {
    name: 'Ann',
    age: 25,
    logInfo() {
        console.log(this.name + ' ' + this.age)
    }
}

const AnnData: MyData = {
    nativeTown: 'Gatchina',
    parentsName: 'Valeriy and Irina',

}

