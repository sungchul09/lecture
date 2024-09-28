const jwt = require('jsonwebtoken')

const secret = 'asdfijasdifj'

const token = jwt.sign({
  id: 'userId',
  isAdmin: true,
}, secret)

const editied = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNjc0MDI1Nn0.yeK8TGFWLy39WtLLhtJI-IkTM5f7ZCb_f_4plKTD6cg'

jwt.verify(editied, secret, (error, decoded) => {
  console.log(error, decoded)
})

console.log(token)