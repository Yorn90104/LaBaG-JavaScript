import QST from '../../assets/QST.jpg';

function Picture({p}) {
    return (
        <img src= {p}/>    
    );
}
function PPicture() {
  return (
    <div className="Pictures">
        <Picture p= {QST}/>
        <Picture p= {QST}/>
        <Picture p= {QST}/>
    </div>
  );
}

export default PPicture;