export type Event = {
  id: number
  title: string
  date: string
  time: string | null
  location: string | null
  image: string
  description: string
  rsvpLink: string | null
}

export type EventsData = {
  upcoming: Event[]
  past: {
    [year: string]: Event[]
  }
}

const events: EventsData = {
  upcoming: [
     {
        id: 33,
        title: "Girls Night In",
        date: "2025-10-16",
        time: "5:30 PM - 7:00 PM",
        location: "Keller 2-260",
        image: "/images/events/posters/2025-girls-night-in.png",
        description: "Join ACM-W for a cozy evening filled with movies, snacks, and fun vibes! ",
        rsvpLink: "https://forms.gle/vHnxhXewXyFLFaL38"
      },
    
  ],

  past: {
    "2025": [
      {
        id: 24,
        title: "Spring Tech Kickoff",
        date: "2025-01-23",
        time: "5:30 PM - 7:00 PM",
        location: null,
        image: "/images/events/posters/2024-spring-techkickoff.png",
        description: "Start your spring semester strong with networking, snacks, and an intro to ACMW.",
        rsvpLink: null
      },
      {
        id: 25,
        title: "Galentine's Party",
        date: "2025-02-14",
        time: "4:30 PM - 6:00 PM",
        location: "Bruininks Hall 432",
        image: "/images/events/posters/2025-galentines-party.png",
        description: "Celebrate friendship, fun, and ACMW with crafts, music, and good company!",
        rsvpLink: null
      },
      {
        id: 26,
        title: "ACM-W x MIT Study Night",
        date: "2025-02-27",
        time: "5:00 PM - 6:30 PM",
        location: "Lind Hall 302",
        image: "/images/events/posters/2025-tech-talk.png",
        description: "Collaborative study night with Minnesota Institute of Technology—come grind with us!",
        rsvpLink: null
      },
      {
        id: 27,
        title: "ACM-W Study Night",
        date: "2025-03-28",
        time: "5:00 PM - 6:30 PM",
        location: "Keller Hall 2-246",
        image: "/images/events/posters/2025-study-night.png",
        description: "Chill study vibes with snacks and support before exams.",
        rsvpLink: null
      },
      {
        id: 28,
        title: "Women in Tech Symposium",
        date: "2025-04-25",
        time: "5:00 PM - 8:00 PM",
        location: "HSEC 3-110",
        image: "/images/events/posters/2025-wits.png",
        description: "Join us to hear from our University of Minnesota professors and industry professionals from Amazon, Microsoft, Google, and more! dinner will be provided.",  
        rsvpLink: null
      },
      {
        id: 29,
        title: "Fall Tech Kickoff",
        date: "2025-09-04",
        time: "6:00 PM - 8:00 PM",
        location: "HSEC 3-110",
        image: "/images/events/posters/2025-fall-tech-kickoff.png",
        description: "Fall Tech Kickoff is this Thursday! Come by to meet several CS&E student orgs in HSEC 3-110 from 6-8PM! We will have pizza ",  
        rsvpLink: null
      },
      {
        id: 30,
        title: "STEM For All Fair",
        date: "2025-09-10",
        time: "5:30 PM - 7:00 PM",
        location: "HSEC 3-110",
        image: "/images/events/posters/2025-stem-for-all.png",
        description: "We are proud to announce that this week 9 student groups are coming together to host the first ever STEM for ALL Fair, which aims to introduce students to the diverse groups in STEM at the U and allow them to connect and collaborate. Come join our communities this Wednesday at 5:30-7:00 pm in HSEC 3-110 and enjoy pizza and soda!",  
        rsvpLink: null
      },
      {
        id: 31,
        title: "ACM-W X CTG: Ace the Technical Interview",
        date: "2025-09-18",
        time: "5:30 PM - 6:30 PM",
        location: "Amundson 240",
        image: "/images/events/posters/2025-technical-interview.png",
        description: "Want to land your first tech internship or sharpen up for interviews? 💻 ACM-W x Code the Gap are hosting a hands-on workshop where we’ll break down technical interviews, practice LeetCode, and share real tips to help you tackle problems with confidence.",
        rsvpLink: null
      },
      {
        id: 32,
        title: "ACM-W X SWE: So You Want To Get an Internship",
        date: "2025-09-23",
        time: "6:00 PM - 7:00 PM",
        location: "Lind L125",
        image: "/images/events/posters/2025-internship-panel.png",
        description: "ACM-W x SWE are hosting an intern panel where there will be past interns from describing their internship experiences and answering questions! Food will be provided.",
        rsvpLink: null
      }
    ],
    "2024": [
      {
        "id": 13,
        "title": "Spring Tech Kickoff",
        "date": "2024-01-23",
        "time": "5:30 PM - 7:00 PM",
        "location": "HSEC 3-110",
        "image": "/images/events/posters/2024-spring-techkickoff.png",
        "description": "Start your spring semester strong with networking, snacks, and an intro to ACMW.",
        "rsvpLink": null
      },
      {
        "id": 14,
        "title": "Galentine's Party",
        "date": "2024-02-12",
        "time": "5:30 PM - 7:00 PM",
        "location": "Keller Hall 2-246",
        "image": "/images/events/posters/2024-galentines.png",
        "description": "Celebrate friendship, fun, and ACMW with crafts, music, and good company!",
        "rsvpLink": null
      },
      {
        "id": 15,
        "title": "Resume Swap",
        "date": "2024-02-27",
        "time": "5:30 PM - 7:00 PM",
        "location": "Lind Hall 302",
        "image": "/images/events/posters/2024-resume-swap.png",
        "description": "Get feedback on your resume from peers before internship season hits.",
        "rsvpLink": null
      },
      {
        "id": 16,
        "title": "Empowering Women in STEM: Q&A with Professor Maria Gini",
        "date": "2024-03-22",
        "time": "6:00 PM - 8:00 PM",
        "location": "Bruininks Hall 512A",
        "image": "/images/events/posters/2024-q&a-gini.png",
        "description": "An intimate Q&A with one of UMN\u2019s legendary CS professors about her journey in STEM.",
        "rsvpLink": null
      },
      {
        "id": 17,
        "title": "Canvas and Conversations",
        "date": "2024-03-27",
        "time": "6:30 PM - 8:00 PM",
        "location": null,
        "image": "/images/events/posters/2024-canvas_and_conversations.png",
        "description": "A relaxing evening of painting and personal conversations about life in tech.",
        "rsvpLink": null
      },
      {
        "id": 18,
        "title": "Fall Tech Kickoff",
        "date": "2024-09-04",
        "time": "5:00 PM - 7:00 PM",
        "location": "Bruininks Hall 330",
        "image": "/images/events/posters/2024-fall-tech-kickoff.png",
        "description": "One of our many community-centered events at ACMW!",
        "rsvpLink": null
      },
      {
        "id": 19,
        "title": "Intern Panel",
        "date": "2024-09-26",
        "time": "6:00 PM - 7:00 PM",
        "location": "Lind Hall L125",
        "image": "/images/events/posters/2024-acmw-intern-panel.png",
        "description": "Students share their internship journeys, interview prep tips, and advice for landing your role.",
        "rsvpLink": null
      },
      {
        "id": 20,
        "title": "Networking",
        "date": "2024-10-10",
        "time": "5:00 PM - 6:30 PM",
        "location": "Lind Hall L125",
        "image": "/images/events/posters/2024-networking-acmw.png",
        "description": "Build real connections with students and industry folks through structured networking activities.",
        "rsvpLink": null
      },
      {
        "id": 21,
        "title": "ACM-W Industry Networking",
        "date": "2024-10-10",
        "time": "5:00 PM - 6:30 PM",
        "location": "HSEC 3-110",
        "image": "/images/events/posters/2024-networking-acmw.png",
        "description": "An industry-focused networking night with professionals from leading tech companies.",
        "rsvpLink": null
      },
      {
        "id": 22,
        "title": "Cookie Decorating",
        "date": "2024-10-30",
        "time": "4:00 PM - 5:30 PM",
        "location": "Keller Hall 2-246",
        "image": "/images/events/posters/2024-cookie-decorating.png",
        "description": "A wholesome Halloween celebration with cookies, crafts, and community.",
        "rsvpLink": null
      },
      {
        "id": 23,
        "title": "Holiday Party",
        "date": "2024-12-13",
        "time": "5:00 PM - 6:30 PM",
        "location": null,
        "image": "/images/events/posters/2024-holiday-party.png",
        "description": "Celebrate the end of the semester with games, snacks, and festive cheer!",
        "rsvpLink": null
      }
    ],
    "2023": [
      {
        "id": 8,
        "title": "Spring Tech Kickoff",
        "date": "2023-01-27",
        "time": "5:30 PM - 7:30 PM",
        "location": "Bruininks Hall 144",
        "image": "/images/events/posters/2023-spring-techkickoff.png",
        "description": "Start your spring semester strong with networking, snacks, and an intro to ACMW.",
        "rsvpLink": null
      },
      {
        "id": 9,
        "title": "ACM-W x BlockChain",
        "date": "2023-02-15",
        "time": "6:00 PM - 7:00 PM",
        "location": "Bruininks Hall 131A",
        "image": "/images/events/posters/2023-acmblockchain2.png",
        "description": "Explore the world of blockchain with student-led demos and discussions.",
        "rsvpLink": null
      },
      {
        "id": 10,
        "title": "Study & Snack",
        "date": "2023-02-28",
        "time": "5:30 PM - 7:00 PM",
        "location": null,
        "image": "/images/events/posters/2023-studysnack.png",
        "description": "Lowkey study session with snacks, good vibes, and productivity.",
        "rsvpLink": null
      },
      {
        "id": 11,
        "title": "Pre-Registration Mingle",
        "date": "2023-03-30",
        "time": "4:00 PM - 5:00 PM",
        "location": "Bruininks Hall 144",
        "image": "/images/events/posters/2023-spring-preregmingle.png",
        "description": "Get class recs, meet upperclassmen, and plan your next semester in a chill social setting.",
        "rsvpLink": null
      },
      {
        "id": 12,
        "title": "Women in Tech Symposium",
        "date": "2023-04-21",
        "time": null,
        "location": "Bruininks Hall 330",
        "image": "/images/events/posters/2023-wits.png",
        "description": "Our annual flagship event! Hear from women in tech and explore diverse career paths.",
        "rsvpLink": null
      }
    ],
    "2022": [
      {
        "id": 1,
        "title": "Fall Kickoff",
        "date": "2022-09-15",
        "time": "4:30 PM - 6:00 PM",
        "location": "Tate Hall",
        "image": "/images/events/posters/2022-fallkickoff.png",
        "description": "Kick off the semester with ACMW! Meet the board, make friends, and learn about upcoming events.",
        "rsvpLink": null
      },
      {
        "id": 2,
        "title": "Ameriprise x ACM-W Event",
        "date": "2022-10-10",
        "time": "5:30 PM - 6:30 PM",
        "location": "Keller Hall 2-260",
        "image": "/images/events/posters/2022-ameriprise.png",
        "description": "Hear from Ameriprise engineers and recruiters on navigating careers in tech.",
        "rsvpLink": null
      },
      {
        "id": 3,
        "title": "WIB x ACM-W Halloween Party",
        "date": "2022-10-24",
        "time": "5:30 PM - 6:30 PM",
        "location": "Keller Hall 2-260",
        "image": "/images/events/posters/2022-wibxacmw-halloween-party.png",
        "description": "A spooky collab with Women in Business! Costumes, games, and Halloween fun.",
        "rsvpLink": null
      },
      {
        "id": 4,
        "title": "Pre-Registration Mingle",
        "date": "2022-11-03",
        "time": "5:30 PM - 6:30 PM",
        "location": "Bruininks Hall 530B",
        "image": "/images/events/posters/2022-prereg-mingle.png",
        "description": "Get class recs, meet upperclassmen, and plan your next semester in a chill social setting.",
        "rsvpLink": null
      },
      {
        "id": 5,
        "title": "SciTech Panel",
        "date": "2022-11-09",
        "time": null,
        "location": "Bruininks Hall 131A",
        "image": "/images/events/posters/2022-scitech-panel.png",
        "description": "Learn about tech internships and research from SciTech panelists and student experiences.",
        "rsvpLink": null
      },
      {
        "id": 6,
        "title": "SciTech Panel",
        "date": "2022-11-09",
        "time": null,
        "location": "Bruininks Hall 131A",
        "image": "/images/events/posters/2022-scitech-panel.png",
        "description": "Learn about tech internships and research from SciTech panelists and student experiences.",
        "rsvpLink": null
      },
      {
        "id": 7,
        "title": "Cocoa and Connect",
        "date": "2022-12-07",
        "time": "5:30 PM - 6:30 PM",
        "location": "Bruininks Hall 530B",
        "image": "/images/events/posters/2022-cocoa-connect.png",
        "description": "Unwind with cocoa and convo before finals! Network with peers and relax.",
        "rsvpLink": null
      }
    ]
  }
}

export default events