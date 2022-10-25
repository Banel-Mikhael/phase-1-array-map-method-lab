const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
    const words=tutorials.map(eachLine => eachLine.split(" "))
    const capitalWords=[]
    words.forEach(item =>{

     
      capitalWords.push(item.map(element=> element.charAt(0).toUpperCase()+element.slice(1)).join(" "))

    })

    return  capitalWords
   }
   titleCased()