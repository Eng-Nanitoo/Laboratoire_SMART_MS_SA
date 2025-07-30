const isDigit = (number) => {
    return /^\d{10,}$/.test(number)
}

export default isDigit;