const QUESTIONS = [
  { 
    question: 'Which is more often energizing?',
    options: ['Going out','Staying in']
  },
  { 
    question: 'Which do you prefer?',
    options: ['Understanding the big picture','Seeing the details']
  },
  { 
    question: 'How are you most likely to make a decision?',
    options: ['Logically analyzing the options','Checking in with your own feelings and values']
  },
  { 
    question: 'When taking on a project, do you feel motivated to...',
    options: ['Meander about exploring options before beginning', 'act quickly and get it done',]
  }
];

const TYPES = {
  'ENTP': {
    overview: `ENTPs prefer Extrovertion, Intuition, Thinking, and Perceiving. But this doesn't mean they can't introvert, sense, feel, or judge.`,
    strengths: `ENTPs are endlessly curious and explosively creative. They are strong abstract thinkers and want to logical connect everything to the bigger picture.`,
    weaknesses: `ENTPs can be idealistic and inconsistent. Often, their production of new ideas greatly exceeds their ability to follow them through to completion`
  },
  'ENTJ': {
    overview: 'overview of ENTJ',
    strengths: 'strengths of ENTJ',
    weaknesses: 'weakness of ENTJ'
  },
  'ENFP': {
    overview: 'overview of ENFP',
    strengths: 'strengths of ENFP',
    weaknesses: 'weakness of ENFP'
  },
  'ENFJ': {
    overview: 'overview of ENFJ',
    strengths: 'strengths of ENFJ',
    weaknesses: 'weakness of ENFJ'
  },
  'ESTP': {
    overview: 'overview of ESTP',
    strengths: 'strengths of ESTP',
    weaknesses: 'weakness of ESTP'
  },
  'ESTJ': {
    overview: 'overview of ESTJ',
    strengths: 'strengths of ESTJ',
    weaknesses: 'weakness of ESTJ'
  },
  'ESFP': {
    overview: 'overview of ESFP',
    strengths: 'strengths of ESFP',
    weaknesses: 'weakness of ESFP'
  },
  'ESFJ': {
    overview: 'overview of ESFJ',
    strengths: 'strengths of ESFJ',
    weaknesses: 'weakness of ESFJ'
  },
  'INTP': {
    overview: 'overview of INTP',
    strengths: 'strengths of INTP',
    weaknesses: 'weakness of INTP'
  },
  'INTJ': {
    overview: 'overview of INTJ',
    strengths: 'strengths of INTJ',
    weaknesses: 'weakness of INTJ'
  },
  'INFP': {
    overview: 'overview of INFP',
    strengths: 'strengths of INFP',
    weaknesses: 'weakness of INFP'
  },
  'INFJ': {
    overview: 'overview of INFJ',
    strengths: 'strengths of INFJ',
    weaknesses: 'weakness of INFJ'
  },
  'ISTP': {
    overview: 'overview of ISTP',
    strengths: 'strengths of ISTP',
    weaknesses: 'weakness of ISTP'
  },
  'ISTJ': {
    overview: 'overview of ISTJ',
    strengths: 'strengths of ISTJ',
    weaknesses: 'weakness of ISTJ'
  },
  'ISFP': {
    overview: 'overview of ISFP',
    strengths: 'strengths of ISFP',
    weaknesses: 'weakness of ISFP'
  },
  'ISFJ': {
    overview: `ISFJs prefer Introversion, Sensing, Feeling, and Judging. But this doesn't mean they can't extrovert, intuit, think, or perceive.`,
    strengths: `ISFJs are compassionate and conscientious. They are strong at perceiving the needs of those around them and selflessly work towards meeting those needs. There commitment and consistency make them the backbone of many families, friend groups, and organizations`,
    weaknesses: `ISFJs can be limited by their lack of exploration. There love to help can be taken advantage of. They can get caught up living in the past instead of being in the present.`
  }
};

const ANSWERKEY = {
  '0000': 'ENTP',
  '0001': 'ENTJ',
  '0010': 'ENFP',
  '0011': 'ENFJ',
  '0100': 'ESTP',
  '0101': 'ESTJ',
  '0110': 'ESFP',
  '0111': 'ESFJ',
  '1000': 'INTP',
  '1001': 'INTJ',
  '1010': 'INFP',
  '1011': 'INFJ',
  '1100': 'ISTP',
  '1101': 'ISTJ',
  '1110': 'ISFP',
  '1111': 'ISFJ',
}

export { QUESTIONS, TYPES, ANSWERKEY };
