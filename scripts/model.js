
const model = {
  // app
  app: {
    page: 'GroupSite',
    userLoggedInId: 1, // null is loggedOut
  },

  // input
  inputs: {
    devTools: {
      isOpen: false,
    },
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
      timeInterval: 0,
      startDate: new Date().toISOString().split('T')[0],
      deadline: 0,
      newNotification: true,
      reminderNotification: true,
      managerDropdown: '',
      managerIds: [],
      userDropdown: '',
      userIds: [],
      confirmName: null,
      confirmCreation: false,
    },
    surveyPage: {
      surveyId: null,
      lastPageNumber: 4,
      pageNumber: 1,
      title: '',
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
        firstName: 'Nora',
        lastName: 'Holm',
        email: 'nora@example.com',
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
        roleId: 1, // user
        avatarId: 1,
      },
      {
        id: 2,
        firstName: 'Test',
        lastName: 'Test',
        email: 'test@example.com',
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
        startDate: "2022-01-22",
        deadline: 3,
        userIds: [0, 1],
        managerIds: [0, 1, 3],
      },
      {
        id: 1,
        name: 'Gruppe 2',
        description: 'Beskrivelse av gruppe 2',
        intervals: 14,
        startDate: "2022-01-23",
        deadline: 4,
        userIds: [1, 2],
        managerIds: [0, 1, 3 ],
      },
      {
        id: 2,
        name: 'Gruppe 3',
        description: 'Beskrivelse av gruppe 3',
        intervals: 14,
        startDate: "2022-01-11",
        deadline: 3,
        userIds: [0, 2],
        managerIds: [0, 1, 3],
      },
      {
        id: 4,
        name: 'Gruppe 4',
        description: 'Beskrivelse av gruppe 4',
        intervals: 14,
        startDate: "2022-01-27",
        deadline: 4,
        userIds: [1, 2],
        managerIds: [0, 1, 3],
      },
    ],
    surveys: [
      {
        id: 0,
        groupId: 0,
        date: "2022-01-31",
        totalAnswers: 2,
        totalScores: [17, 23, 10, 14], //index 0 = forming, 1 = storming, 2 = norming, 3 = performing
        stageNames: ['Forming', 'Storming', 'Norming', 'Performing'],
        averageScores: [8.5, 11.5, 5, 7],
        isInterval: true,
      },
      {
        id: 1,
        groupId: 0,
        date: "2022-02-07",
        totalAnswers: 2,
        totalScores: [12, 26, 8, 9, 14], //index 0 = forming, 1 = storming, 2 = norming, 3 = performing
        stageNames: ['Forming', 'Storming', 'Norming', 'Performing', 'Cohesion'],
        averageScores: [6, 13, 4, 4.5, 7],
        isInterval: true,
      },
      {
        id: 1,
        groupId: 0,
        date: "2022-02-14",
        totalAnswers: 3,
        totalScores: [30, 18, 16, 20, 24], //index 0 = forming, 1 = storming, 2 = norming, 3 = performing
        stageNames: ['Forming', 'Storming', 'Norming', 'Performing', 'Cohesion'],
        averageScores: [10, 6, 5.33, 6.66, 8],
        isInterval: true,
      },
    ],
    stageData: [
      {
        id: 'Forming',
        color: '255, 99, 132',
      },
      {
        id: 'Storming',
        color: '255, 205, 86',
      },
      {
        id: 'Norming',
        color: '100, 150, 86',
      },
      {
        id: 'Performing',
        color: '75, 192, 192',
      },
      {
        id: 'Cohesion',
        color: '10, 120, 86',
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
    templates: [
      {
        id: 0,
        pages: [
          {
            title: "Forming",
            questions: [
            `1: We try to have set procedures or protocols to ensure that things are orderly and run smoothly (e.g. minimize interruptions; everyone gets the opportunity to have their say).`,
            `5: Team members are afraid or do not like to ask others for help.`,
            `10: Team members do not fully trust the other team members and closely monitor others
            who are working on a specific task.`,
            `15: We are trying to define the goal and what tasks need to be accomplished.`,
            `18: We assign specific roles to team members (team leader, facilitator, time keeper, note
            taker, etc.).`,
            `21: There are many abstract discussions of the concepts and issues, which make some
            members impatient with these discussions.`,
            `27: It seems as if little is being accomplished with the project's goals.`,
            `29: Although we are not fully sure of the project's goals and issues, we are excited and
            proud to be on the team.`],
          },
          {
            title: "Storming",
            questions: [
              `2: We are quick to get on with the task on hand and do not spend too much time in the
              planning stage.`,
              `7: The team leader tries to keep order and contributes to the task at hand.`,
              `9: We generate lots of ideas, but we do not use many because we fail to listen to them and
              reject them without fully understanding them.`,
              `16: Many of the team members have their own ideas about the process and personal
              agendas are rampant.`,
              `20: The tasks are very different from what we imagined and seem very difficult to
              accomplish.`,
              `23: We argue a lot even though we agree on the real issues.`,
              `28: The goals we have established seem unrealistic.`,
              `31: There is a lot of resisting of the tasks on hand and quality improvement approaches.`,
            ]
          },
          {
            title: "Norming",
            questions: [
            `4: We have thorough procedures for agreeing on our objectives and planning the way we
            will perform our tasks.`,
          `6: We take our team's goals and objectives literally, and assume a shared understanding.`,
          `11: The team leader ensures that we follow the procedures, do not argue, do not interrupt,
            and keep to the point.`,
          `13: We have accepted each other as members of the team.`,
          `19: We try to achieve harmony by avoiding conflict.`,
          `24: The team is often tempted to go above the original scope of the project.`,
          `25: We express criticism of others constructively.`,
          `30: We often share personal problems with each other.`],
          },
          {
            title: "Performing",
            questions: [
          `3: Our team feels that we are all in it together and shares responsibilities for the team's
           success or failure.`,
          `8: We do not have fixed procedures, we make them up as the task or project progresses.`,
          `12: We enjoy working together; we have a fun and productive time.`,
          `14: The team leader is democratic and collaborative.`,
          `17: We fully accept each other's strengths and weaknesses.`,
          `22: We are able to work through group problems.`,
          `26: There is a close attachment to the team.`,
          `32: We get a lot of work done.`],
          },
        ]
      }
    ]
  },
}