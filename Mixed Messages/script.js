//This function generate Random Numbers
const  generateRandomNumber = (num) => {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

  // Wisdom of words
  const collectiveWisdom = {
    signs: ['star', 'moon', 'sun', 'comet'],
    fortune: ['Good luck', 'Bad luck', 'Succcess', 'Terrible'],
    advice: ['Take time to know yourself.', 'Don\'t make assumptions', 'Luck comes from hard work', 'Be your best at all times']
  }
  
  // Store the 'wisdom' in an array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'signs':
        personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'fortune':
        personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'advice':
        personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);