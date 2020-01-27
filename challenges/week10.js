const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");

  //put numbers into an array
  //reduce to add up nums
  const stringArray = n.toString().split("");
  const numArray = stringArray.map(Number)
  return numArray.reduce((a, b) => a + b)
}


const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

  for (let i = start; i < end + 1; i += step) {
    return (i)
  }
};


const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  //"screentime" - adds up values in an object:
  const screentime = (usage) => {
    let sum = 0

    for (let key in usage) {
      sum += usage[key]
    }
    return sum
  }

  //"currentDay" - filter returns an array of screenTime based on a given date
  const currentDay = (screentime) => {
    return screentime.filter(n => n.date === date)
  }

  const matchingUsers = []

  users.forEach(n => {
    const matchingday = currentDay(n.screenTime)
    if (matchingday.length > 0) {
      const usage = matchingday[0].usage

      if (screentime(usage) > 100) {
        matchingUsers.push(n.username)
      }
    }
  })

  //users that have more than 100 mins of screentime
  return matchingUsers
}


const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  //to turn each number in its rgb equivalent use parseint(string, base) 
  let r = parseInt(hexStr.substring(1, 3), 16)
  let g = parseInt(hexStr.substring(3, 5), 16)
  let b = parseInt(hexStr.substring(5, 7), 16)

  //return the string back using ``
  return `rgb(${r},${g},${b})`
};


const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  const getHorizontalWinner = () => {
    const matchingLine = board
      .filter(line => line[0] === line[1] && line[1] === line[2] && line[0] !== null)
    return matchingLine.length > 0 ? matchingLine[0][0] : null
  }

  const getDiagonalWinner = () => {
    const matchingLineDiagLeft = board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null
    const matchingLineDiagRight = board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== null

    if (matchingLineDiagLeft === true) {
      return board[0][0]
    } else if (matchingLineDiagRight === true) {
      return board[0][2]
    }
    return null
  }

  const getVerticalWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] &&  board[1][i] === board[2][i] && board[0][0] !== null) {
        return board[0][i]
      }
    }
    return null
  }

  const horizonalWinner = getHorizontalWinner()
  const verticalWinner = getVerticalWinner()
  const diagonalWinner = getDiagonalWinner()


  if (horizonalWinner !== null) {
    return horizonalWinner
  }

  if (verticalWinner !== null) {
    return verticalWinner
  }

  if (diagonalWinner !== null) {
    return diagonalWinner
  }
  return null
};




module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
