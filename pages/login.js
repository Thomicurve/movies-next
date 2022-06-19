import { userContext } from 'context/UserContext'
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import GithubIcon from '@mui/icons-material/GitHub'


export default function Login() {
    return (
        <>
            <Container className='mt-36 bg-white drop-shadow-lg rounded-sm py-5' maxWidth="sm">
                <h4 className='text-center font-bold text-3xl text-fuchsia-800 capitalize'>Sign in</h4>
                <div className='flex justify-center mt-5 gap-1'>
                    <IconButton aria-label="google">
                        <GoogleIcon />
                    </IconButton>
                    <IconButton aria-label="github">
                        <GithubIcon />
                    </IconButton>
                </div>

                <p className='options-text text-center mt-4'>Or use your email account</p>

                <form className='flex flex-col mt-5 items-center'>
                    <input placeholder='Email' required className='py-2 my-3 px-5 rounded-sm' type='email' />
                    <input placeholder='Password' required className='py-2 my-3 px-5 rounded-sm' type='password' />
                    <button className='rounded-full py-2 px-4 text-sm submit-button'>Submit</button>
                </form>

                <p className='mt-10 text-center text-sm'>You dont have an account? <a className='text-sky-600 underline' href='#'>Register now</a></p>
            </Container>
            <style jsx>{`
            input {
                outline: none;
                background: #F0F0F0;
                font-size: 14px;
                width:  350px;
            }

            .options-text::after {
                content: "";
                width: 100px;
                height: 2px;
                background-color: #f0f0f0;
                display: inline-block;
                margin-bottom: 4px;
                margin-left: 15px;
            }

            .options-text::before {
                content: "";
                width: 100px;
                height: 2px;
                background-color: #f0f0f0;
                display: inline-block;
                margin-bottom: 4px;
                margin-right: 15px;
            }

            .submit-button {
                background: #2b2d42;
                color: #fff;
            }
        `}</style>
        </>
    )
}
