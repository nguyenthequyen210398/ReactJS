

function question2() {
    const click = () => {
       alert('Hello')
    }
    return (
        <>
            <div>
                <h1>Hello Word</h1>
                <p>My first paragraph.</p>
            </div>

            <div>
                <h2>DANH SÁCH LỚP HỌC</h2>
                <ol>
                    <li>Nguyễn Ngọc Duy</li>
                    <li>Tống Quang Anh</li>
                    <li>Đinh Thu Loan</li>
                    <li>Hà Văn Tiến</li>
                    <li>Nguyễn Hải Đăng</li>
                    <li>Nguyễn Tiến Quang</li>
                    <li>Nguyễn Văn Chiến</li>
                </ol>

                <ol>
                    <li>
                        <p>Cơm trưa</p>
                        <ul>
                            <li>Cơm chiên hải sản</li>
                            <li>Cơm sườn non nấu cam</li>
                            <li>Cơm canh cua cá lóc</li>
                        </ul>
                    </li>
                    <li>
                        <p>Tráng miệng trái cây</p>
                        <ul>
                            <li>Nho tươi</li>
                            <li>Chuối</li>
                            <li>Mận</li>
                        </ul>
                    </li>
                </ol>

                <p onClick={click} >Hello World</p>
            </div>
        </>

  
    );
 }
   
 export default question2;