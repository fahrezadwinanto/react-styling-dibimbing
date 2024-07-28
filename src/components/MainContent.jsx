import '../styles/MainContent.css';

const MainContent = ({ content }) => {
    return (
      <main className="main-content">
        <p>{content}</p>
      </main>
    );
  };
  
  export default MainContent;