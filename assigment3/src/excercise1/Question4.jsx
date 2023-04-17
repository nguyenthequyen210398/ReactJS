import './excercise1.css';
function question4() {
    const firtName = 'Nguyen Van';
    const lastName = 'A';
    function fullName(firtName, lastName){
        const fullName = firtName + ' ' + lastName;
        return fullName;
    }

    const user = {
        avatarUrl: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg',
        title: 'Giới thiệu bản thân',
        content: 'Xin chào! Tôi là Ngọc năm nay 25 tuổi, đang độc thân.'
    }

    return(
        <>
        <div>
            <p>fName: {firtName}</p>
            <p>lName: {lastName}</p>
            <p>fName: {fullName(firtName, lastName)}</p>
        </div>

        <div className='question4b'>
            <img className="image2" src={user.avatarUrl} />
            <div className='q4b'>
                <p>{user.title}</p>
                <p>{user.content}</p>
            </div>

        </div>


        </>
    )
}

export default question4;