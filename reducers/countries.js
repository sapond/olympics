const initialState = [
  {
    name: 'U.S.A',
    gold: 2,
    silver: 4,
    bronze: 8,
    completed: 22
  },
  {
    name: 'Russia',
    gold: 2,
    silver: 4,
    bronze: 8,
    completed: 22
  },
]

export default function countries(state = initialState, action) {
  return state;
}
