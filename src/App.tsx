import Card3D from './components/3dCard/Card3D';
import OutLineAnchor from './components/outLineBtn/OutLineAnchor';

function App() {
  return (
    <Card3D>
      <div>
        <p>Hello! I'm Jacob Lee.</p>
        <p>UI Designer & Front End</p>
      </div>
      <OutLineAnchor
        text="Visit"
        color="#050002"
        normalColor="#050002"
        href="https://desnlee.com"
      ></OutLineAnchor>
    </Card3D>
  );
}

export default App;
