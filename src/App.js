import "./styles.css";
import files from './files.json';
import Directory from './components/Directory';

export default function App() {
  return (
    <div className="spacing">
      <p> Note</p>
      <p>Click Folders to Expand</p>
      <p> right click File name to see context menu</p>
        <Directory files={files} />
    </div>
  );
}
