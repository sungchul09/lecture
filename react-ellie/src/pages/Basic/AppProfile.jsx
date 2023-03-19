import 'pages/Basic/css/AppProfile.css';
import Profile from 'components/Basic/Profile';
import Avatar from 'components/Basic/Avatar';

function AppProfile() {
  const profileMap = [
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'seongcheol',
      title: '프론트엔드 개발자',
      isNew: true,
      useAvatar: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'seongcheol2',
      title: '백엔드 개발자',
      isNew: false,
      useAvatar: false,
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'seongcheol3',
      title: 'devOps 개발자',
      isNew: true,
      useAvatar: true,
    },
  ];

  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭됨!');
  };
  return (
    <>
      <button type="button" onClick={handleClick}>버튼</button>
      {
      profileMap.map((v) => (v.useAvatar
        ? (
          <Avatar
            key={v.name}
            image={v.image}
            isNew={v.isNew}
          />
        )
        : (
          <Profile
            key={v.name}
            image={v.image}
            name={v.name}
            title={v.title}
            isNew={v.isNew}
            useAvatar={v.useAvatar}
          />
        )))
    }
    </>
  );
}

export default AppProfile;
