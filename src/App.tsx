import SvgIcon from './components/SvgIcon';
import './index.less';

const icons = import.meta.globEager('./assets/icons/logo-*.svg');

const iconUrls = Object.values(icons).map((mod: any) => {
  const fileName = mod.default.split('/').pop();
  const [svgName] = fileName.split('.');
  return svgName;
});

function App() {
  return (
    <div className="app">
      <div className="title">my vite project</div>
      {iconUrls.map((item) => (
        <SvgIcon name={item} key={item} width="50" height="50" />
      ))}
    </div>
  );
}

export default App;
