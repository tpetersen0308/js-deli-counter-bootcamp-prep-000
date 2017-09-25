function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
     var name = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine) {
  var str = "The line is currently"

  if(katzDeliLine.length === 0) {
    return str + " empty."
  }
  else {
    for(var i = 0; i < katzDeliLine.length; i++) {
      str = `${str}: ${i + 1}. ${katzDeliLine[i]},`
    }
    return str
  }
