import "./Table.css"

const Table = ({children}) => {
  return (
    <div className="tableWrapper">
      <table className="tableWrapper__table">
        {children}
      </table>
    </div>
  );
};

export default Table