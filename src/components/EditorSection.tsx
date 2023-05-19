import "../styles/EditorSection.css";
import { EditorSectionProps } from "../types/propTypes";
import Sidebar from "./Sidebar";
import Editor from "./editorSection/Editor";
import EditorToolbar from "./editorSection/EditorToolbar";

function EditorSection({ toolbarOpen, setToolbarOpen }: EditorSectionProps) {
  return (
    <section className="editorSection">
      <main className="editorSection__toolbar_and_textarea">
        <EditorToolbar
          toolbarOpen={toolbarOpen}
          setToolbarOpen={setToolbarOpen}
        />
        <Editor />
      </main>
      <Sidebar />
    </section>
  );
}

export default EditorSection;
