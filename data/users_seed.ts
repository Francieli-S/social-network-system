const users: IUser[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    profilePicture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [2, 3, 5],
    statusMessage: 'Enjoying the sunshine!',
  },
  {
    id: 2,
    name: 'Bob Smith',
    profilePicture:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [1, 4, 6],
    statusMessage: 'Working on a new project.',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    profilePicture:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [1, 5, 7],
    statusMessage: 'Just finished a great book!',
  },
  {
    id: 4,
    name: 'David Wright',
    profilePicture:
      'https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [2, 8, 9],
    statusMessage: 'Excited for the weekend!',
  },
  {
    id: 5,
    name: 'Eve Davis',
    profilePicture:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [1, 3, 6, 10],
    statusMessage: 'Loving the new coffee shop.',
  },
  {
    id: 6,
    name: 'Frank Harris',
    profilePicture:
      'https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [2, 5, 7, 11],
    statusMessage: "Can't wait for the next adventure.",
  },
  {
    id: 7,
    name: 'Grace Lee',
    profilePicture:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [3, 6, 8],
    statusMessage: 'Learning something new every day.',
  },
  {
    id: 8,
    name: 'Hannah Clark',
    profilePicture:
      'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=2841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [4, 7, 9, 12],
    statusMessage: 'Feeling inspired today!',
  },
  {
    id: 9,
    name: 'Isaac Walker',
    profilePicture:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [4, 8, 10, 13],
    statusMessage: 'Working on personal growth.',
  },
  {
    id: 10,
    name: 'Jack Young',
    profilePicture:
      'https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [5, 9, 11],
    statusMessage: 'Ready for the next challenge.',
  },
  {
    id: 11,
    name: 'Kate Martin',
    profilePicture:
      'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=2841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [6, 10, 12],
    statusMessage: 'Living life to the fullest!',
  },
  {
    id: 12,
    name: 'Liam Scott',
    profilePicture:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [8, 11, 13],
    statusMessage: 'Enjoying the little things.',
  },
  {
    id: 13,
    name: 'Mia Turner',
    profilePicture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [9, 12, 14],
    statusMessage: 'Planning my next trip.',
  },
  {
    id: 14,
    name: 'Noah Wilson',
    profilePicture:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [13, 15],
    statusMessage: 'Staying positive and focused.',
  },
  {
    id: 15,
    name: 'Olivia Moore',
    profilePicture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    friends: [14, 1],
    statusMessage: 'Exploring new opportunities.',
  },
];

export default users;
