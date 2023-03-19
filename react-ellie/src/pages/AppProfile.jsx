import './css/AppProfile.css';
import Profile from '../components/Profile'
function AppProfile() {
  const profileMap = [
    {
      image:'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'seongcheol',
      title: '프론트엔드 개발자',
      isNew: true,
      useAvatar: true
    },
    {
      image:'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'seongcheol2',
      title: '백엔드 개발자',
      isNew: false,
      useAvatar: false
    },
    {
      image:'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'seongcheol3',
      title: 'devOps 개발자',
      isNew: true,
      useAvatar: true
    }
  ]
  return (
  <>
    {
      profileMap.map(v => 
        <Profile 
          image={v.image}
          name={v.name}
          title={v.title}
          isNew={v.isNew}
          useAvatar={v.useAvatar}
        />
      )
    }
  </>
  )
  
}

export default AppProfile;
