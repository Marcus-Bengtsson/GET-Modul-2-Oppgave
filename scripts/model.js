const model = {
  // app
  app: {
    page: 'GroupList',
    userLoggedInId: null, // null is loggedOut
  },

  // input
  inputs: {
    groupList: {
      markedGroupIds: [],
      checkedAll: false,
    },
    groupSite: {
      groupId: null, // number
      editMode: false,
      userIds: [],
      confirmDelete: false,
      newInterval: null, // number
      confirmEdit: false,
    },
    groupComparison: {
      groupIds: [],
      hiddenGroupIds: [],
    },
    groupNew: { 
      name: '',
      description: '',
      timeInterval: null,
      startDate: null,
      deadline: null,
      newNotification: true,
      reminderNotification: true,
      managerTextbox: '',
      managerIds: [],
      userTextbox: '',
      userIds: [],
      confirmCreation: false,
    },
    surveyPage: {
      surveyId: null,
      lastPageNumber: 5,
      pageNumber: 1,
      // Lage array med nuller for antall spørsmål
      // 0 er ubesvart og når bruker velger så endrer vi verdien basert på index.
      answers: [],
      commentText: '',
      commentIsAnonymous: false,
      confirmSubmission: false,
    },
    userSignup: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      confirmEmail: null,
      confirmCreation: null,
    },
    userLogin: {
      email: '',
      password: '',
      isCorrect: null,
    },
    userList: {    
      markedUserIds: [],
      checkedAll: false,
    },
    userEdit: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      userId: null,
      roleId: null,
      deleteUser: false,
      confirmEdit: false,
    }
  },

  // data
  data: {
    users: [
      {
        id: 0,
        firstName: 'Lillie',
        lastName: 'Rugtveit',
        email: 'lillie@example.com',
        password: 'N0tS4f3Pass_',
        roleId: 2, // user
        avatarId: 0,
      },
      {
        id: 1,
        firstName: 'Ola',
        lastName: 'Nordmann',
        email: 'ola@example.com',
        password: 'N0rdp@ssw0rd99_',
        roleId: 2, // user
        avatarId: 1,
      }
    ],
    roles: [
      { id: 0, name: 'admin', permissions: [0, 1] },
      { id: 1, name: 'manager', permissions: [0, 1] },
      { id: 2, name: 'bruker', permissions: [2] },
    ],
    groups: [
      {
        id: 0,
        name: 'Gruppe 1',
        description: 'Beskrivelse av gruppe 1',
        intervals: 7,
        startDate: 1642580756,
        deadline: 3,
        userIds: [0, 2],
        managerIds: [0, 2],
      }
    ],
    surveys: [
      {
        id: 0,
        groupId: 1,
        date: "01/05/2022",
        totalAnswers: 2,
        totalScores: [17, 23, 10, 14], //index 0 = forming, 1 = storming, 2 = norming, 3 = performing
        stageNames: ['Forming', 'Storming', 'Norming', 'Performing'],
        averageScores: [8.5, 11.5, 5, 7],
      },
    ],
    comments: [
      {
        id: 0,
        managerIds: [0, 2],
        text: "Dette er en kommentar",
        userId: null // om null er den anonym
      }
    ],
    avatars: [
      {id: 0, url: '', alt: ''},
      {id: 1, url: '', alt: ''},
    ],
    articles: [
      {
        id: 0,
        title: 'Overskrift 1',
        description: 'Kort beskrivelse',
        imageURL: 'https://i.imgur.com/RvYL7wB.png',
        url: 'https://www.getacademy.no/',
      },
      {
        id: 1,
        title: 'Overskrift 2',
        description: 'Kort beskrivelse',
        imageURL: 'https://i.imgur.com/RvYL7wB.png',
        url: 'https://www.getacademy.no/',
      },
      {
        id: 2,
        title: 'Overskrift 3',
        description: 'Kort beskrivelse',
        imageURL: 'https://i.imgur.com/RvYL7wB.png',
        url: 'https://www.getacademy.no/',
      },
    ],
  },
}
// imageURL
// Articles
// Id
// Titel
// Beskrivelse
// Bildelink