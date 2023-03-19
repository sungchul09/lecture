import 'pages/Basic/css/AppJSX.css';

function AppJSX() {
  const name = 'seongcheol';
  const nameList = ['banana', 'apple', 'kiwi'];
  return (
    <>
      <p>
        {' '}
        { `Hello ${name}` }
        {' '}
      </p>
      <h1 className="hello-name">hello</h1>
      <ul>
        {
        nameList.map((item) => <li>{item}</li>)
      }
      </ul>
    </>
  );
}

export default AppJSX;
