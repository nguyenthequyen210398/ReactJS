import './excercise1.css';
import image1 from '../excercise1/image/image1.jpg'
import { clear } from '@testing-library/user-event/dist/clear';


function question3() {
   
    return (
        <>
            <div>
                <h2 style={{border: '4px solid orange' }} >Hello World</h2>
                <h2 className="hello2">Hello World</h2>
                <h2 className="hello3">Hello World</h2>
            </div>

            <div className='question3b'>
                <h2>Học lập trình wed có đơn giản không?</h2>
                <img className='image1' src={image1} />
                <br /> <br />
                <b><big>Đây là tiêu đề của bài viết</big></b>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa, vel beatae odit voluptatibus quis culpa a est nihil nostrum doloremque? Quisquam minima aut aspernatur, molestias architecto enim deserunt repellendus?</p>
                <button  type='botton' >Đọc thêm</button>
            
            </div>
            <br />

            <div className='login'>
                <h1>Login Form</h1>
                <form action="">
                    <div className='innerForm'>
                    <input type='text'  placeholder='Email or Uername'></input>
                
                    <input type='text' placeholder='Password'></input>
                   
                    <input type="submit" value="LOGIN"></input>
                    </div>
                </form>
                <br />
                <p>Or login with</p>
                <button style={{color: 'blue'}}><i class="fa-brands fa-facebook"></i> <b >Facebook</b></button>
                <button style={{color: 'red'}}><i class="fa-brands fa-google-plus"></i> <b>Google</b></button>
                <p>Not a member? <a href='https://www.google.com/'>Signup now</a> </p>
            </div>
          


        </>

  
    );
}
   
 export default question3;