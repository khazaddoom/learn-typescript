let value: string = '1000'
let value2: any = '2000'
console.log(value + value2)

const fun = (value: string) => {
    return () => {
        console.log(value)
    }
}