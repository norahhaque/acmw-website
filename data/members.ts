export type Member = {
  name: string
  role: string | null
  major: string | null
  minor: string | null
  year: string | null
  gradYear: string | null
  imgSrc: string
  about: {
    q: string | null
    a: string | null
  }[]
  description: string | null
}

const members: Member[] = [
  {
    name: "Amelia Lunning",
    role: "President",
    major: "Computer Science",
    minor: "Math",
    year: "4",
    gradYear: "May 2026",
    imgSrc: "/images/team/members/amelia-president.png",
    about: [
      { q: "What is your favorite CSCI class?", a: "CSCI 5161: Compilers" },
      { q: "Tell us a fun fact about you!", a: "I figure skated for 10 years, and now I skate recreationally" },
      { q: "What advice would you give to someone new to CS?", a: "Get involved! Being a part of ACM-W has been so beneficial to me both professionally and socially" }
    ],
    description: "Amelia is a senior majoring in Computer Science and minoring in Math! She expects to graduate in May 2026."
  },
  {
    name: "Sophie Reznik",
    role: "Vice President",
    major: "Computer Science",
    minor: "Management",
    year: "3rd",
    gradYear: "May 2026",
    imgSrc: "/images/team/members/sophie-vp.png",
    about: [
      { q: "Fun Fact:", a: "I'm bilingual! I grew up speaking English and Russian :)" },
      { q: "Favorite CSCI Class:", a: "CSCI 3081W: Program Design and Development" },
      { q: "Hobbies:", a: "Reading, sewing, painting, baking & cooking" }
    ],
    description: "Sophie is a 3rd-year student majoring in Computer Science with a minor in Management! Her expected graduation is May 2026."
  },
  {
    name: "Minah Elsawy",
    role: "Secretary",
    major: "Statistics",
    minor: "Computer Science",
    year: "4th",
    gradYear: "December 2026",
    imgSrc: "/images/team/members/minah-secretary.png",
    about: [
      { q: "What is your favorite CSCI class?", a: "CSCI 5521: Machine Learning Fundamentals" },
      { q: "What's your go-to drink order?", a: "Brown sugar milk tea boba" },
      { q: "What advice would you give to someone new to CS?", a: "Take it step by step- it's a difficult field! Give yourself grace and time to learn all the systems, techniques and skills." }
    ],
    description: "Minah is a 4th-year Statistics major with a Computer Science minor, set to graduate in December 2026!"
  },
  {
    name: "Norah Haque",
    role: "Webmaster",
    major: "Computer Science",
    minor: "Management",
    year: "2nd",
    gradYear: "December 2026",
    imgSrc: "/images/team/members/norah-webmaster.png",
    about: [
      { q: "What hobbies do you enjoy?", a: "I love trying out new cafe spots, traveling, gardening in the summers, and reading!" },
      { q: "Tell us a fun fact about you!", a: "I run a 10K every year!" },
      { q: "What advice would you give to someone new to CS?", a: "Making connections and having people skills is just as important as picking up the technical skills! You can only get so fa" }
    ],
    description: "Norah is a 2nd-year Computer Science student with a minor in Managemennt graduating in December 2026."
  },
  {
    name: "Harini Kuchibhotla",
    role: "Treasurer",
    major: "Computer Science and Data Science",
    minor: null,
    year: "3rd",
    gradYear: "May 2027",
    imgSrc: "/images/team/members/harini-treasurer.png",
    about: [
      { q: "What's your go-to drink order?", a: "Taro Milk Tea" },
      { q: "Tell us a fun fact about you!", a: "I can easily get through an entire season of a TV show in one day!" },
      { q: "What advice would you give to someone new to CS?", a: "Focus on building a solid understanding of algorithms, and problem-solving, it’s the foundation for everything else!" }
    ],
    description: "Harini is a 3rd-year student double majoring in Computer Science and Data Science. She is graduating in May 2027."
  },
  {
    name: "Adna Wardere",
    role: "Graphics",
    major: "Computer Science",
    minor: "ITI and Leadership",
    year: "4th",
    gradYear: "May 2026",
    imgSrc: "/images/team/members/adna-graphics.png",
    about: [
      { q: "What's your go-to drink order?", a: "Thai tea or earl grey latte!" },
      { q: "What hobbies do you enjoy?", a: "Dancing, singing, beatboxing." },
      { q: "The best programming language is ___. Why?", a: "Java, cause of the memory deallocation!" }
    ],
    description: "Adna is a 4th-year Computer Science major with minors in ITI and Leadership, on track to graduate in May 2026!"
  },
  {
    name: "Simi Khulbe",
    role: "Corporate Outreach",
    major: "Computer Science",
    minor: "Mathematics and Statistics",
    year: "4th",
    gradYear: "December 2025",
    imgSrc: "/images/team/members/simi-corporate-outreach.png",
    about: [
      { q: "Tell us a fun fact about you!", a: "I'm in an a cappella group!" },
      { q: "What hobbies do you enjoy?", a: "Gardening, gaming, and reading." },
      { q: "What advice would you give to someone new to CS?", a: "CS can be broad and daunting! It's ok to not to know everything, making mistakes is a part of learning." }
    ],
    description: "Simi is a 4th-year Computer Science student with minors in Mathematics and Statistics. She is set to graduate in December 2025."
  },
  {
    name: "Joseline Rosa",
    role: "Marketing",
    major: "Computer Science",
    minor: null,
    year: "4th",
    gradYear: "May 2026",
    imgSrc: "/images/team/members/joseline-marketing.png",
    about: [
      { q: "Tell us a fun fact about you!", a: "I have traveled to 12 countires so far and plan to travel to all continents." },
      { q: "What's your go-to drink order?", a: "Brown sugar latte with coffee boba!" },
      { q: "What advice would you give to someone new to CS?", a: "It does not get easier but you learn as you go. Personally my favorite part is being able to intern and apply my in class learning to the real world." }
    ],
    description: "Joseline is a 4th-year Computer Science major planning to graduate in May 2026!"
  },
  {
    name: "Shana Watters",
    role: "Advisor",
    major: null,
    minor: null,
    year: null,
    gradYear: null,
    imgSrc: "/images/team/members/shana-advisor-2.png",
    about: [
      { q: null, a: null },
      { q: null, a: null },
      { q: null, a: null }
    ],
    description: "Dr. Watters, a Teaching Professor in Computer Science, brings years of experience in computing education and a deep commitment to supporting gender minorities in tech. As ACMW's faculty advisor, she provides guidance and institutional support to help the club thrive."
  }
]

export default members
